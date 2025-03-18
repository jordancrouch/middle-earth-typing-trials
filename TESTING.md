# There & Back Again - Testing Documentation

The main README documentation can be found under [README.md](https://github.com/jordancrouch/middle-earth-typing-trials/blob/main/README.md)

[View the website on GitHub Pages](https://jordancrouch.github.io/middle-earth-typing-trials/index.html).

## Table of Contents

1. [User Story Testing](#user-story-testing)
2. [Feature Testing](#feature-testing)
3. [Cross-browser Testing](#cross-browser-testing)
4. [Automated Testing](#automated-testing)
5. [Significant Bugs](#significant-bugs)

## User Story Testing

**First Time Visitor Goals**

1.  As a first time visitor, I want to be able to easily determine and understand the main purpose of the website.
    1. When first landing on the website, there is a large H1 heading that states: "Test your keyboard skills with quotes from Middle-earth". This, along with the supporting subtitle providing more information, as well as the 'Choose a character' call-to-action button immediately helps provide the user with what they can expect from the site.
    2. Throughout the rest of the site, there are clear, hierarchical headings, supporting text, and calls to action, in order to provide clear and direct instructions to guide the user through the site and to the interactive typing test.
    3. When completing a test and the results are displayed, there are two clear call to action buttons displayed, signifying the test has ended and providing the user with an opportunity to restart the test, or select a new character.
2.  As a first time visitor, I want to be able complete an interactive typing test that is easy and intuitive to use, and also provides visual feedback to keep track of progress.
    1. There is a caret in place on the typing test, in order to provide the user with visual feedback on what position they are in, to make it easy to identify what the next character is, or where they are going if they are deleting text or adding a space to move to the next word, for example. This allows the user to feel comfortable knowing where they are at any given point during the test.
    2. Correctly typed letters are a solid white, and letters that haven't been typed have an opacity applied, which helps to create a difference between typed and untyped letters. Incorrect letters turn red in colour to help make clear when an error has been made, and any additional letters that have been typed at an end of a word are red with an opacity applied, to help separate them from the original word and make it clear for the user that these are added additional words. The combination of these colours and opacity styles further aids to visually represent user progress, providing instant per-letter feedback.
    3. When the typing input is not in focus, an out-of-focus element appears with instructions on how to focus on the typing input again. This helps to prevent any unnecessary wasted input, whilst guiding the user on how to continue with the test in any instance where the focus of the typing test has been taken by another event.
3.  As a first time visitor, I want to receive feedback on my typing performance in the form of data metrics, such as word per minute (WPM) and accuracy.
    1. When a typing test concludes, a results page is loaded provided the user with data on their performance, including words per minute (WPM) and accuracy. Words per minute is calculated by taking the total amount of correctly typed characters (including spaces) from correct words, divided by 5 for the average word length, divided by the time of the test, and multiplied by 60 to standardise the result to one minute. Accuracy is calculated by dividing the total correct characters (including spaces) by the total number of characters typed, multiplied by 100 to get a percentage.
    2. In the settings popover located throughout the site, there is an explanation of these data metrics to help the user to understand how these results are calculated, to get a better understanding of their performance.

**Returning Visitor Goals**

1.  As a returning visitor, I want additional metrics provided on my typing performance, including the total number of characters/words typed, errors, and 'raw' typing speed.
    1. When a test ends, the total number of correctly typed characters is calculated and output to the user, so they know exactly how many correct characters they typed (including spaces).
    2. Using the correctly typed characters above, that number is divided by 5 to use as the average word length, with the result being shown on the results pages.
    3. Raw typing speed is calculated the same way as words per minute (WPM), but it also includes incorrectly types characters as well. This result is also shown to provide more feedback to the user on their performance.
2.  As a returning visitor, I want to be able to have a range of different characters to select from, so that their quotes are used for the test.
    1. There are 9 different characters to select from, who all have a large range of quotes. This helps to reduce monotony of typing the same words/text in the test, with having a large range of data that is used.
3.  As a returning visitor, I want an option to be able to change the duration of the test, in order to assess my typing performance over a different period of time.
    1. The tests defaults to 30 seconds, and the results are standardised to one minute. In the settings popover, it is possible to change the time to 60 seconds, so a returning user can test their ability and consistency over the full one-minute period, and compare their results to their 30 second standardised scores.

**Frequent User Goals**

1.  As a frequest user, I want to be able to use the test as many times as possible without there being any issues with retrieving the quotes for the characters I select.
    1. Due to the nature of the API used, requests are limited to 100 every 10 minutes. As a result, this could lead to errors fetching the data if these rate limits are exceeded. The quote data for each character has been saved and stored locally, so that it can be used in such cases, allowed frequent users to take the test as much as they would like.
    2. When local data is used, an icon and text is displayed in the navigation bar to inform the user that the local data is currently being used.
2.  As a frequent user, I want an easy way to be able to restart the previously finished test to be able to directly compare my score.
    1. When a test is finished, the recently completed test instance is saved so that it can be reinstated, providing the user with the ability to re-take the same test using the same quotes, providing a like-for-like comparison in the results.
3.  As a frequent user, I also want an easy way to navigate back to the character select screen after I have completed a test.
    1. Guiding the user through to the test from the homepage allows them to select a character. When a test ends, the user is also provided with an option to go back to the character select screen, where a different character can be selected and their quotes used for the test.

## Feature Testing

All feature testing was done manually, as outlined below:

### Feature 1

- Feature 1 testing

## Cross-browser Testing

Cross-browser testing was conducted by manually checking each of the features above on the different browsers and operating systems outlined below:

### Windows 11

#### Firefox/Chrome/Edge

All features work as intended.

### Android

#### Firefox/Chrome

All features work as intended.

### macOS

#### Safari/Firefox/Chrome

All features work as intended.

### iOS

#### Safari/Firefox/Chrome

All features work as intended.

## Automated Testing

### A Note on Validation

As a result of using Tailwind CSS and some newer HTML elements (such as popover), previous validation services I've used are not necessarily up to date to include such uses and returned errors that wouldn't be able to be fixed without a considerable amount of work. As a result, I searched for an alternative validation service that is regularly updated and includes CSS framework definitions and latest HTML elements/attributes. This led me to use the [CSS HTML Validator](https://www.htmlvalidator.com) Pro trial version, which can validate to W3C and WHATWG standards, but also based on what works with real-world browsers. More information on this can be [found here](https://www.htmlvalidator.com/current/docs/validate_to_w3c_standards.htm).

### HTML Validation

[CSS HTML Validator](https://www.htmlvalidator.com) was used to check the markup validity of the HTML used in this project. The following errors and warnings were identified upon initial checks:

#### Homepage

- Warning: Possibly misspelled words (9, 5 unique): eartH (1x), SettingS (1x), LotR (2x), WPM (2x), MeTT (3x). Complete list.
  - Words with capital letters at the end have been done so stylistically, to achieve a similar effect as The Lord of the Rings titles used on movie posters (eartH, SettingS) and can be ignored.
  - Abbreviations used can also be ignored (LotR, WPM, and MeTT).
- Warning: It is strongly recommended that both the "height" and "width" attributes be used with the `<img>` element so browsers can leave the correct amount of space for them while downloading the image (which can take more time on mobile networks and devices).
  - Explicit image dimensions have been added to each image element to resolve this warning.
- Warning: The "popover", "popovertarget", and "popovertargetaction" attributes are relatively new and may not yet be widely supported. Visit https://caniuse.com/?search=popover%20attribute for more information.
  - These attributes are shown to have wide support across desktop devices and in Safari for iOS. They have only recently become available in the latest versions of Chrome and Firefox for Android (Feb 2025), so older browsers will not support the popover functionality. Whilst the popover provides some additional functionality to be able to change the test timer, and also result statistic information, this is not integral to the typing test itself and will not cause any issues with taking the test, so I am happy to ignore this warning.
- An `<h1>` element has already been used. Avoid using multiple `<h1>` elements on one page because it is not best practice.
  - The second instance of a H1 is within the popover element, which is hidden by default. This structure was taken from the modals used in Bootstrap, which I am happy with so this has also been ignored.
- Void HTML elements like `<input>` don't need a trailing slash (/). Using a trailing slash could interfere with unquoted attribute values. Consider removing the slash.
  - Prettier is used for code formatting on this project, and the philosophy it employs enforces trailing slash for self-closing tags. This can be ignored.

#### Characters Page

- Warning: Possibly misspelled words (24, 15 unique): Baggins (1x), Gamgee (1x), LotR (1x), MeTT (1x), selecT (1x), SettingS (1x), Aragorn (2x), Boromir (2x), Frodo (2x), Gandalf (2x), Gimli (2x), Gollum (2x), Legolas (2x), Samwise (2x), WPM (2x). Complete list.
  - Character names, abbreviations, and words with a trailing capital can all be ignored.
- Warning in line 49 at character 12: (Grouped > Mobile) It is strongly recommended that both the "height" and "width" attributes be used with the `<img>` element so browsers can leave the correct amount of space for them while downloading the image (which can take more time on mobile networks and devices).
  - Explicit image dimensions have been added to each image element to resolve this warning.
- Warning in line 76 at character 13: (Grouped > General Compatibility) The "popover", "popovertarget", and "popovertargetaction" attributes are relatively new and may not yet be widely supported. Visit https://caniuse.com/?search=popover%20attribute for more information.
  - These attributes are shown to have wide support across desktop devices and in Safari for iOS. They have only recently become available in the latest versions of Chrome and Firefox for Android (Feb 2025), so older browsers will not support the popover functionality. Whilst the popover provides some additional functionality to be able to change the test timer, and also result statistic information, this is not integral to the typing test itself and will not cause any issues with taking the test, so I am happy to ignore this warning.
- This alt text ["Gandalf", "Aragorn", "Legolas", "Gimli", "Boromir", "Gollum"] may be too short to be meaningful. This alt text is only (x) characters long and should be lengthened...
  - Character name alt text can be ignored, as provided in context of the character select screen/page makes sense following the title and following instruction to select a character, and can be ignored.
- An `<h1>` element has already been used. Avoid using multiple `<h1>` elements on one page because it is not best practice.
  - The second instance of a H1 is within the popover element, which is hidden by default. This structure was taken from the modals used in Bootstrap, which I am happy with so this has also been ignored.
- Void HTML elements like `<input>` don't need a trailing slash (/). Using a trailing slash could interfere with unquoted attribute values. Consider removing the slash.
  - Prettier is used for code formatting on this project, and the philosophy it employs enforces trailing slash for self-closing tags. This can be ignored.

#### Typing Test Page

- Warning: Possibly misspelled words (6, 5 unique): LotR (1x), MeTT (1x), SettingS (1x), traveler (1x), WPM (2x). Complete list.
  - Abbreviations and words with a trailing capital can be ignored. 'Traveler' incorrectly spelled using US English and can be changed to correct British spelling: traveller.
- Warning: It is strongly recommended that both the "height" and "width" attributes be used with the `<img>` element so browsers can leave the correct amount of space for them while downloading the image (which can take more time on mobile networks and devices).
  - Explicit image dimensions have been added to each image element to resolve this warning.
- Warning: The "popover", "popovertarget", and "popovertargetaction" attributes are relatively new and may not yet be widely supported. Visit https://caniuse.com/?search=popover%20attribute for more information.
  - These attributes are shown to have wide support across desktop devices and in Safari for iOS. They have only recently become available in the latest versions of Chrome and Firefox for Android (Feb 2025), so older browsers will not support the popover functionality. Whilst the popover provides some additional functionality to be able to change the test timer, and also result statistic information, this is not integral to the typing test itself and will not cause any issues with taking the test, so I am happy to ignore this warning.
- An `<h1>` element has already been used. Avoid using multiple `<h1>` elements on one page because it is not best practice.
  - The second instance of a H1 is within the popover element, which is hidden by default. This structure was taken from the modals used in Bootstrap, which I am happy with so this has also been ignored.
- Void HTML elements like `<input>` don't need a trailing slash (/). Using a trailing slash could interfere with unquoted attribute values. Consider removing the slash.
  - Prettier is used for code formatting on this project, and the philosophy it employs enforces trailing slash for self-closing tags. This can be ignored.

#### Results Page

- Warning: Possibly misspelled words (7, 5 unique): LotR (1x), MeTT (1x), ResultS (1x), SettingS (1x), WPM (3x). Complete list.
  - Abbreviations and words with a trailing capital can be ignored.
- Warning: It is strongly recommended that both the "height" and "width" attributes be used with the `<img>` element so browsers can leave the correct amount of space for them while downloading the image (which can take more time on mobile networks and devices).
  - Explicit image dimensions have been added to each image element to resolve this warning.
- Warning: The "popover", "popovertarget", and "popovertargetaction" attributes are relatively new and may not yet be widely supported. Visit https://caniuse.com/?search=popover%20attribute for more information.
  - These attributes are shown to have wide support across desktop devices and in Safari for iOS. They have only recently become available in the latest versions of Chrome and Firefox for Android (Feb 2025), so older browsers will not support the popover functionality. Whilst the popover provides some additional functionality to be able to change the test timer, and also result statistic information, this is not integral to the typing test itself and will not cause any issues with taking the test, so I am happy to ignore this warning.
- An `<h1>` element has already been used. Avoid using multiple `<h1>` elements on one page because it is not best practice.
  - The second instance of a H1 is within the popover element, which is hidden by default. This structure was taken from the modals used in Bootstrap, which I am happy with so this has also been ignored.
- Void HTML elements like `<input>` don't need a trailing slash (/). Using a trailing slash could interfere with unquoted attribute values. Consider removing the slash.
  - Prettier is used for code formatting on this project, and the philosophy it employs enforces trailing slash for self-closing tags. This can be ignored.

#### 404 Page

- Warning: Possibly misspelled words (8, 7 unique): founD (1x), LotR (1x), MeTT (1x), Mordor (1x), SettingS (1x), traveler (1x), WPM (2x). Complete list.
  - Abbreviations, words with a trailing capital, and location name (Mordor) can be ignored. 'Traveler' incorrectly spelled using US English and can be changed to correct British spelling: traveller.
- Warning: It is strongly recommended that both the "height" and "width" attributes be used with the `<img>`element so browsers can leave the correct amount of space for them while downloading the image (which can take more time on mobile networks and devices).
  - Explicit image dimensions have been added to each image element to resolve this warning.
- Warning: The "popover", "popovertarget", and "popovertargetaction" attributes are relatively new and may not yet be widely supported. Visit https://caniuse.com/?search=popover%20attribute for more information.
  - These attributes are shown to have wide support across desktop devices and in Safari for iOS. They have only recently become available in the latest versions of Chrome and Firefox for Android (Feb 2025), so older browsers will not support the popover functionality. Whilst the popover provides some additional functionality to be able to change the test timer, and also result statistic information, this is not integral to the typing test itself and will not cause any issues with taking the test, so I am happy to ignore this warning.
- Warning in line 110 at character 25: (Grouped > Useless or Possibly Useless) Void HTML elements like `<br>` don't need a trailing slash (/). Using a trailing slash could interfere with unquoted attribute values. Consider removing the slash.
  - Prettier is used for code formatting on this project, and the philosophy it employs enforces trailing slash for self-closing tags. This can be ignored.
- An `<h1>` element has already been used. Avoid using multiple `<h1>` elements on one page because it is not best practice.
  - The second instance of a H1 is within the popover element, which is hidden by default. This structure was taken from the modals used in Bootstrap, which I am happy with so this has also been ignored.
- Void HTML elements like `<input>` don't need a trailing slash (/). Using a trailing slash could interfere with unquoted attribute values. Consider removing the slash.
  - Prettier is used for code formatting on this project, and the philosophy it employs enforces trailing slash for self-closing tags. This can be ignored.

Most warnings have been ignored given the reasons stated above, other than adding height and width attributes to images, and spelling corrections. No errors are shown, confirming that all pages have been validated and contain no syntax errors.

#### Results

- [Homepage](https://github.com/jordancrouch/middle-earth-typing-trials/blob/main/assets/validation/index.txt)
- [Characters](https://github.com/jordancrouch/middle-earth-typing-trials/blob/main/assets/validation/characters.txt)
- [Typing Test](https://github.com/jordancrouch/middle-earth-typing-trials/blob/main/assets/validation/typing-test.txt)
- [Results](https://github.com/jordancrouch/middle-earth-typing-trials/blob/main/assets/validation/results.txt)
- [404](https://github.com/jordancrouch/middle-earth-typing-trials/blob/main/assets/validation/404.txt)

### CSS Validation

[CSS HTML Validator](https://www.htmlvalidator.com) was also used to check the CSS used in this project for errors and ensure it meets W3C compliance.

The following error was identified on initial validation checks:

- Error in line 1115 at character 20: (CSS > Bad Property Value) The value of the "scrollbar-width" property is invalid. This value can be "auto | thin | none". This property sets the desired thickness of an element's scrollbars when they are shown.
  - This property was changed to "none" to fix the issue.
- Error in line 1172 at character 3: (CSS > Parsing) Nested selectors must not start with an identifier (i.e. a type selector) or functional notation. Try prepending "& " to the nested selector.
  - There were multiple nested selected errors, which were resolved by un-nesting the styles that started with an identifier.

Upon checking the CSS again with the validation service, no errors were shown and is confirmed to be valid CSS that meets W3C compliance.

- [CSS](https://github.com/jordancrouch/middle-earth-typing-trials/blob/main/assets/validation/css.txt)

### PageSpeed Insights

[Google PageSpeed Insights (PSI)](https://developers.google.com/speed/docs/insights/v5/about) 'reports on the user experience of a page on both mobile and desktop devices and provides suggestions on how that may be improved'.

All pages of the website were tested using Google PSI and produced the following results:

**Home**

[Mobile](https://pagespeed.web.dev/analysis/https-jordancrouch-github-io-middle-earth-typing-trials-index-html/tzvgsh0ujm?form_factor=mobile)

![Homepage mobile psi results - first test](https://raw.githubusercontent.com/jordancrouch/middle-earth-typing-trials/refs/heads/main/assets/pagespeed/psi-home-mobile-1.png)

[Desktop](https://pagespeed.web.dev/analysis/https-jordancrouch-github-io-middle-earth-typing-trials-index-html/tzvgsh0ujm?form_factor=desktop)

![Homepage desktop psi results - first test](https://raw.githubusercontent.com/jordancrouch/middle-earth-typing-trials/refs/heads/main/assets/pagespeed/psi-home-desktop-1.png)

**Characters**

[Mobile](https://pagespeed.web.dev/analysis/https-jordancrouch-github-io-middle-earth-typing-trials-characters-html/f39287j7ex?form_factor=mobile)

![Journals page mobile psi results - first test](https://raw.githubusercontent.com/jordancrouch/middle-earth-typing-trials/refs/heads/main/assets/pagespeed/psi-characters-mobile-1.png)

[Desktop](https://pagespeed.web.dev/analysis/https-jordancrouch-github-io-middle-earth-typing-trials-characters-html/f39287j7ex?form_factor=desktop)

![Journals page desktop psi results - first test](https://raw.githubusercontent.com/jordancrouch/middle-earth-typing-trials/refs/heads/main/assets/pagespeed/psi-characters-desktop-1.png)

**Typing Test**

[Mobile](https://pagespeed.web.dev/analysis/https-jordancrouch-github-io-middle-earth-typing-trials-typing-test-html/4w4z37a5c0?form_factor=mobile)

![Gallery page mobile psi results - first test](https://raw.githubusercontent.com/jordancrouch/middle-earth-typing-trials/refs/heads/main/assets/pagespeed/psi-typing-test-mobile-1.png)

[Desktop](https://pagespeed.web.dev/analysis/https-jordancrouch-github-io-middle-earth-typing-trials-typing-test-html/4w4z37a5c0?form_factor=desktop)

![Gallery page desktop psi results - first test](https://raw.githubusercontent.com/jordancrouch/middle-earth-typing-trials/refs/heads/main/assets/pagespeed/psi-typing-test-desktop-1.png)

**Results**

[Mobile](https://pagespeed.web.dev/analysis/https-jordancrouch-github-io-middle-earth-typing-trials-results-html/ml5ygvo8j3?form_factor=mobile)

![Contact page mobile psi results - first test](https://raw.githubusercontent.com/jordancrouch/middle-earth-typing-trials/refs/heads/main/assets/pagespeed/psi-results-mobile-1.png)

[Desktop](https://pagespeed.web.dev/analysis/https-jordancrouch-github-io-middle-earth-typing-trials-results-html/ml5ygvo8j3?form_factor=desktop)

![Contact page desktop psi results - first test](https://raw.githubusercontent.com/jordancrouch/middle-earth-typing-trials/refs/heads/main/assets/pagespeed/psi-results-desktop-1.png)

**404**

[Mobile](https://pagespeed.web.dev/analysis/https-jordancrouch-github-io-middle-earth-typing-trials-404-html/eogad9xylb?form_factor=mobile)

![Contact page mobile psi results - first test](https://raw.githubusercontent.com/jordancrouch/middle-earth-typing-trials/refs/heads/main/assets/pagespeed/psi-404-mobile-1.png)

[Desktop](https://pagespeed.web.dev/analysis/https-jordancrouch-github-io-middle-earth-typing-trials-404-html/eogad9xylb?form_factor=desktop)

![Contact page desktop psi results - first test](https://raw.githubusercontent.com/jordancrouch/middle-earth-typing-trials/refs/heads/main/assets/pagespeed/psi-404-desktop-1.png)

#### Heading

#### Final Results

Each page was re-tested after implemented the above steps with the following results:

## Significant Bugs

### Character image saturation filter

---

[Click here](https://github.com/jordancrouch/middle-earth-typing-trials/blob/main/README.md) to return to the main README.md.
