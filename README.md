# My solution to Frontend Developer Intern Challenge in Femme Palette

## Task requirements

- Build a web form that replicates the structure and appearance of the form you submitted with your application (as shown in the attached picture).
- Mark "Last Name" and "Email Address" fields as required in your form.
- Implement form validation features based on the capabilities of your chosen framework or technology.
- Implement error handling to provide clear messages for invalid form submissions.
- After a successful form submission, display a success message and the values entered into the form.
- Provide a brief explanation of your code and any design decisions made.

## Used technologies

- ReactJS
- BootStrap

## Explanation of my code

- I have chosen ReactJS framework with Bootstrap CSS framework so that the code is well readable and maintainable
- Implementing form validations and error handling was done based on native HTML form validation pseudo-selectors, displaying feedback is managed by ReactJS State Hook
- I was trying to replicate original design as much as possible, however, the font family used for the heading, Teodor, is licenced so that I have decided to use similar font provided by Google Fonts - Libre Caslan
- Enhancement ideas - what could have been improved if timeframe would have been larger:
  1. using more advanced approach for customizing bootstrap styling
  2. transision of form fields shadow/border when it is clicked on is different than in original form
  3. submitting button should have better transition on hover
  4. the form should reset after success modal window is closed
  5. prepare API for sending data to Back End

## Solution can be viewed on github pages - https://martinarandulova.github.io/FP-Application-Form/
