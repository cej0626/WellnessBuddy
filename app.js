const habitInputs = [...document.querySelectorAll("[data-habit]")];
const progressCount = document.querySelector("#progress-count");
const progressFill = document.querySelector("#progress-fill");
const progressMessage = document.querySelector("#progress-message");
const waterCount = document.querySelector("#water-count");
const waterGlasses = document.querySelector("#water-glasses");
const waterInput = document.querySelector("#water-input");
const waterMinus = document.querySelector("#water-minus");

const dateKey = new Date().toLocaleDateString("en-CA");
const storageKey = `wellness-buddy-${dateKey}`;

function readToday() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) ?? { habits: [], water: 0 };
  } catch {
    return { habits: [], water: 0 };
  }
}

const today = readToday();
const completedHabits = new Set(today.habits);
let glasses = Number.isFinite(today.water) ? Math.min(99, Math.max(0, today.water)) : 0;

function saveToday() {
  try {
    localStorage.setItem(storageKey, JSON.stringify({ habits: [...completedHabits], water: glasses }));
  } catch {
    // The trackers still work for this visit when browser storage is unavailable.
  }
}

function updateProgress() {
  const completed = habitInputs.filter((input) => input.checked).length;
  const total = habitInputs.length;
  const percentage = total ? Math.round((completed / total) * 100) : 0;

  progressCount.textContent = `${completed} / ${total}`;
  progressFill.style.width = `${percentage}%`;
  progressFill.parentElement.setAttribute("role", "progressbar");
  progressFill.parentElement.setAttribute("aria-label", "Daily habits completed");
  progressFill.parentElement.setAttribute("aria-valuemin", "0");
  progressFill.parentElement.setAttribute("aria-valuemax", String(total));
  progressFill.parentElement.setAttribute("aria-valuenow", String(completed));

  if (completed === total) {
    progressMessage.textContent = "You showed up for yourself today. Well done!";
  } else if (completed > 0) {
    progressMessage.textContent = `${total - completed} more ${total - completed === 1 ? "step" : "steps"} whenever you're ready.`;
  } else {
    progressMessage.textContent = "Every little step counts. Pick one to begin.";
  }
}

function updateWater() {
  waterCount.textContent = String(glasses);
  waterInput.value = String(glasses);
  waterMinus.disabled = glasses === 0;

  const visibleGlasses = Math.min(12, Math.max(4, glasses));
  waterGlasses.replaceChildren(...Array.from({ length: visibleGlasses }, (_, index) => {
    const glass = document.createElement("span");
    glass.className = `glass-icon${index >= glasses ? " empty" : ""}`;
    return glass;
  }));
}

function setWaterCount(value) {
  glasses = Math.max(0, Math.min(99, value));
  updateWater();
  saveToday();
}

habitInputs.forEach((input) => {
  input.checked = completedHabits.has(input.dataset.habit);
  input.addEventListener("change", () => {
    if (input.checked) completedHabits.add(input.dataset.habit);
    else completedHabits.delete(input.dataset.habit);
    updateProgress();
    saveToday();
  });
});

document.querySelector("#water-plus").addEventListener("click", () => setWaterCount(glasses + 1));
waterMinus.addEventListener("click", () => setWaterCount(glasses - 1));
document.querySelector("#water-form").addEventListener("submit", (event) => {
  event.preventDefault();
  if (waterInput.value.trim() === "") return;
  setWaterCount(Number(waterInput.value));
});

document.querySelector("#today-label").textContent = new Intl.DateTimeFormat("en", {
  weekday: "long",
  month: "long",
  day: "numeric",
}).format(new Date()).toUpperCase();

updateProgress();
updateWater();