## Task 1 Sector Selection

Selected Sector: Health and Wellness

Project Name: Wellness Buddy

Problem:
Some students have a hard time keeping track of their daily wellness habits, such as drinking water, getting enough rest, and taking breaks while studying.

Target Users:
Students in the local Philippine community.

Proposed Solution:
I chose to create Wellness Buddy, a simple website that helps students monitor their daily wellness habits.

Planned Features:
1. Daily wellness checklist
2. Water intake tracker
3. Progress bar showing completed habits

Reason for Choosing This Sector:
I chose health and wellness because students need to take care of themselves while balancing schoolwork and other activities. This website can help them become more aware of their daily habits and keep track of their progress.

Project Scope:
The website will provide general wellness habit tracking only. It will not give medical diagnoses or personalized medical advice. It will use HTML, CSS, and JavaScript without a backend, database, or external APIs.

## Task 2 Zero-Shot Prompting

Technique: Zero-shot prompting

Prompt Used:

Create a simple webpage that helps students track their daily health and wellness habits.

Actual AI Output:

I can create a simple wellness website for students using HTML, CSS, and JavaScript. The website can include a daily habit checklist where students can mark completed habits and a water tracker to record their water intake. It can also show progress based on the number of completed habits. The design will be simple and easy to use.



## Task 3 Structured Prompting

Technique: Structured prompting

Prompt Used:

Act as a frontend web developer. Create a responsive single-page Wellness Buddy website for students in a local Philippine community. Include an interactive daily wellness checklist, a water intake tracker, and a daily habit completion progress indicator. Use semantic HTML, CSS, and vanilla JavaScript. Do not use external frameworks, backend services, or external APIs. Provide the required frontend files and implement the checklist so users can mark habits as completed and the progress indicator updates accordingly. The water intake tracker should allow users to record the number of glasses of water they drink. The interface must remain readable on mobile screens, and all interactive controls must work through mouse and keyboard interaction. Use general wellness information only and do not provide medical diagnoses or personalized medical advice.

Actual AI Output:

I’ll first check the workspace for any existing app files so the Wellness Buddy fits the project; if it’s empty, I’ll create a small, self-contained HTML/CSS/JavaScript site and verify its interactions.

The workspace is empty, so there’s no existing design or app behavior to preserve. I’m going with a dependency-free three-file page: checklist completion drives the progress display, while the water counter has keyboard-operable controls and persists today’s entries in the browser.

I’ve settled the local behavior: daily checklist state and water totals reset by date, with browser storage keeping the current day’s entries on refresh. I’m creating the page and its styling first; the next check will load the actual HTML in a browser to catch any immediate rendering or script errors.

The page loads with all six habits, the progress bar, and both water-entry methods present. I’m now checking the interactions themselves, including keyboard activation, state after refresh, and whether the layout fits a narrow mobile viewport.

The interaction check passed: Space toggled a habit, the progress count updated, water add/save worked, and both totals survived a refresh without mobile overflow. I spotted one small mismatch with the no-external-services requirement: the page currently fetches Google Fonts, so I’m removing that network dependency and then rerunning a local-file smoke check.

The self-contained version now loads with zero external requests, and a fresh run starts at 0 / 6 with zero glasses; keyboard input still updates both trackers. I’m clearing the sample values created during testing and doing a final visual check at desktop and mobile sizes.


## Task 4A Few-Shot Prompting

Technique: Few-shot prompting

Prompt Used:

Create preparedness checklist items using this format:

Example 1:

Item: Drink water  
Category: Hydration  
Description: Record a glass of water consumed.

Generate four additional daily wellness habit items using the same format and render them as a checklist.

Actual AI Output:

Item: Get enough rest  
Category: Rest  
Description: Keep track of your daily rest habit.

Item: Take a study break  
Category: Breaks  
Description: Record when you take a break from studying.

Item: Stretch your body  
Category: Movement  
Description: Keep track of your stretching habit.

Item: Eat regular meals  
Category: Nutrition  
Description: Record your habit of eating regular meals.

The items can be displayed as a checklist so students can mark which habits they have completed.



## Task 4B Role Assignment

Technique: Role assignment

Prompt Used:

Act as a frontend accessibility reviewer. Examine the generated Wellness Buddy website. Identify problems involving HTML semantics, keyboard access, labels, and visual clarity. Recommend targeted improvements without changing the project's scope.

Actual AI Output:

The Wellness Buddy website has a clear structure with headings, sections, labels, and buttons. The checklist and water tracker provide simple ways for students to record their habits.

The website should be checked to make sure all buttons and checkboxes can be used with a keyboard. Form inputs should have clear labels, and keyboard focus should be easy to see. Text should also remain readable on smaller screens.

A useful improvement would be to make sure the progress indicator communicates the current progress clearly to users who use assistive technology. The existing mobile styles and focus indicators are helpful, but the page should still be tested at different screen sizes.



## Task 5 Analysis and Refinement

Technique: Structured analysis and refinement

Prompt Used:

Review my Wellness Buddy website. Check whether the interactive checklist works correctly, whether the HTML uses appropriate semantic elements, and whether the interface is usable on mobile screens. Identify the two most important implementation issues based on the provided code. Recommend the smallest appropriate corrections and explain how I can test them. Do not change the project's scope or add external services.

Actual AI Output:

The checklist updates the progress bar when a habit is checked or unchecked. The water tracker allows users to add or remove a glass and enter a total manually. The daily entries are saved in local storage, so they remain after refreshing the page.

The HTML uses sections, headings, labels, and buttons. The CSS also includes styles for smaller screens and visible keyboard focus indicators.

Two possible improvements are making the progress bar's accessibility information clearer in the HTML and testing the water input with invalid values. The JavaScript already limits the saved water count to a range of 0–99, so the input should be tested to make sure it behaves as expected.

## Task 6 Compare and Submit

## Final Comparison Table

Zero-Shot:
The prompt was short, so Copilot had more freedom to decide what the website should include. Some details might not match my original idea.

Structured Prompt:
Adding the target users, required features, and limitations made the result more specific. The website included the checklist, water tracker, and progress bar.

Few-Shot:
Providing an example helped show the format I wanted for the wellness checklist items.

Role Assignment:
Asking Copilot to act as an accessibility reviewer helped me focus on keyboard controls, labels, HTML structure, and readability.

Structured Analysis:
Reviewing the code helped identify areas to test, including the progress indicator, water input, and mobile layout.

## Final Reflection

Structured prompting was the most useful technique for my project because it clearly explained the features and requirements I wanted. Few-shot prompting helped provide a consistent format for the checklist, while role assignment helped me consider accessibility.

I learned that the results depend on how I write my prompts. I also learned that AI-generated code should be checked and tested before I consider the project finished. Even if the website looks correct, I still need to test its buttons, inputs, keyboard controls, and mobile layout.