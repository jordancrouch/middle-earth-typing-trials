# Middle-earth Typing Trials

![Middle-earth Typing Trials Mockups](https://jordancrouch.github.io/middle-earth-typing-trials/assets/mockups/middle-earth-typing-trials-mockups.jpg)

A Lord of the Rings themed typing test, using quotes from the films.

[View the website on GitHub Pages](https://jordancrouch.github.io/middle-earth-typing-trials/index.html).

# Table of Contents

1.  [Overview](#overview)
2.  [User Experience (UX)](#user-experience-ux)
    1.  [Strategy](#strategy)
    2.  [Scope](#scope)
    3.  [Structure](#structure)
    4.  [Skeleton](#skeleton)
    5.  [Surface](#surface)
3.  [Features](#features)
    1.  [Existing Features](#existing-features)
    2.  [Future Feature Considerations](#future-feature-considerations)
4.  [Technologies Used](#technologies-used)
5.  [Testing](#testing)
6.  [Deployment](#deployment)
    1.  [GitHub Pages](#github-pages)
    2.  [Forking the GitHub Repository](#forking-the-github-repository)
    3.  [Making a Local Clone](#making-a-local-clone)
7.  [Credits](#credits)
    1.  [Code](#code)
    2.  [Content](#content)
    3.  [Media](#media)
    4.  [Acknowledgements](#acknowledgements)
    5.  [Disclaimer](#disclaimer)

# Overview

# User Experience (UX)

## Strategy

### User stories

**First-time Visitor Goals**

1. As a first-time visitor, I want to be able to easily determine and understand the main purpose of the website.
2. As a first-time visitor, I want to be able complete an interactive typing test that is easy and intuitive to use, and also provides visual feedback to keep track of progress.
3. As a first-time visitor, I want to receive feedback on my typing performance in the form of data metrics, such as word per minute (WPM) and accuracy.

**Returning Visitor Goals**

1. As a returning visitor, I want additional metrics provided on my typing performance, including the total number of characters/words typed, errors, and 'raw' typing speed.
2. As a returning visitor, I want to be able to have a range of different characters to select from, so that their quotes are used for the test.
3. As a returning visitor, I want an option to be able to change the duration of the test, in order to assess my typing performance over a different period of time.

**Frequent User Goals**

1. As a frequent user, I want to be able to use the test as many times as possible without there being any issues with retrieving the quotes for the characters I select.
2. As a frequent user, I want an easy way to be able to restart the previously finished test to be able to directly compare my score.
3. As a frequent user, I also want an easy way to navigate back to the character select screen after I have completed a test.

## Scope

### Requirements

**User Interface (UI) Design**

- The design should be minimalistic to reduce distractions so users can focus on typing, whilst still portraying the theme used.
- There should be real-time feedback for the test. A caret should be used to show the current position, whilst text styles should clearly highlight correct/incorrect characters in a non-intrusive way.
- Number of words in a line of text should be of optimal reading length to make it easy for users to read whilst typing, and the test timer should be within close proximity to not detract from a user's ability to quickly see how much time is remaining and resume from their current position.

**Responsiveness and Cross-Platform Support**

- The test should be compatible on a wide range of devices, so that it works seamlessly on desktops, tablets, and smartphones.
- The site and test should also be responsive, so that the layout and functionality adapts to different screen sizes and can be used with both a virtual or standard keyboard.

**Performance Metrics and Insights**

- Test results should provide performance feedback, including words-per-minute (WPM), raw typing speed, accuracy, errors, and total characters/words typed.
- Explanations of how each metric is calculated should also be available, so that users have a clear understanding of exactly what each result represents.

## Structure

### Homepage

- A clear, concise heading and supporting text to immediately convey the purpose of the site to users.
- An obvious call-to-action to guide the user to the character select page.
- **User Goals:**
  - Immediately get a sense of the site's theme and purpose.
  - Easily navigate to the character select screen using the call-to-action button.
- **Business Goals:**
  - Use design and information hierarchy to provide users with a sense of trust and intruige.
  - Encourage users to interact with the call-to-action, taking them to the next page of the site.

### Characters Page

- Provides users with a choice of characters to be able to select from.
- **User Goals:**
  - Characters should be easy to select/change.
  - Once a choice has been made, it should then be both obvious and easy to move on to the test.
- **Business Goals:**
  - Provide users with a range of choices to generate interest in using the site for a longer period of time.

### Typing Test Page

- An interactive typing test where users can type the quotes from their selected character.
- **User Goals:**
  - Typing on a virtual keyboard or regular keyboard progresses the typing test.
  - Easily identify current position, correctly/incorrectly typed characters, and any additional characters that have been typed that aren't part of existing words.
- **Business Goals:**
  - Provide immediate interactive feedback so a user is always engaged.
  - The test should be easy to use, so that users are more likely to return to use the test frequently.

### Results Page

- Provide data metrics to the user on their typing performance.
- **User Goals:**
  - Easily identify primary and secondary metrics, to understand personal performance and use data as a benchmark for future tests.
  - Can navigate back to the recently completed test to re-take the same test, or back to select a different character.
- **Business Goals:**
  - Provide users with accurate data and an explanation of each metric, so they have a clear understanding of how results are calculated.
  - Clear calls-to-action to keep the user on the site and engaging with the test.

### 404 Page

- A simple 404 error page to inform users they have reached a non-existent page, along with a link to return back to the home page.

## Skeleton

### Wireframes

[View](https://jordancrouch.github.io/middle-earth-typing-trials/assets/wireframes/middle-earth-typing-trials-wireframes.pdf) - it is recommended to download the wireframe PDF file for a better viewing experience, which can be done by right-clicking the link, followed by selecting 'Save Link As...'.

## Surface

### Design

#### Colour Scheme

The colour palette use for this project was generated by [Adobe Color](https://color.adobe.com/). Using a screenshot of a scene from the 1978 animated film by Ralph Bakshi, a colour palette was generated by uploading it to the 'Extract Theme' section, with the two following colours being used:

- Forest Green: #142608 (Primary colour, used for the main background colour)
- Gold: #A68932 (Secondary colour, used for links, buttons, calls-to-action, position caret, and result statistics)
- Red: #FF0000 (Error highlight colour for the typing test)

#### Typography

- [Ringbearer](https://www.thehutt.de/tolkien/fonts/ringbearer/readme.html) is used as the font for large headings (H1). It was created based off of the different logo types used from international sites of LotR, which helps to create the similarity of theme for the site.
- [Albertus MT](http://www.thehutt.de/tolkien/fonts/albert.zip) is used for other heading sizes, and is the font from the movie subtitle of the Lord of the Rings logo.
- [Albert Sans](https://fonts.google.com/specimen/Albert+Sans) is used as the main body copy font throughout the site, and aside from having a similar name, it also has a similar x-height to Albertus MT to make for a good pairing. The contrast created with having a sans-serif helps to further differentiate between heading and body styles, as well as help with readability for larger areas of text.
- [Fira Mono](https://fonts.google.com/specimen/Fira+Mono) is the font used for the typing test. This is a font that I use for coding personally, and despite being a sans-serif font, there are small serif-like terminals added to certain characters to help provide clarity between similar letters. Using a monospace font for the typing test also helps with spacing the letters/words given the functionality required for each element to be wrapped in separate markup individually.

#### Imagery

- The background and character images are all screenshots taken from the Lord of the Rings 1978 animated film by Ralph Bakshi. Having not previously seen this film, I purchased it on [Amazon Prime](https://www.amazon.co.uk/gp/video/detail/amzn1.dv.gti.76a9f65a-79b9-562f-0b46-d94bfdec38ad?autoplay=0&ref_=atv_cf_strg_wb) and took screenshots to be used.
- The loading spinner graphic text was taken from the [One Ring Wiki](https://en.wikipedia.org/wiki/One_Ring) and edited to be circular in shape.

#### High-fidelity Designs

[View](https://jordancrouch.github.io/middle-earth-typing-trials/assets/wireframes/middle-earth-typing-trials-design.pdf) - it is recommended to download the design PDF file for a better viewing experience, which can be done by right-clicking the link, followed by selecting 'Save Link As...'.

## Features

### Existing Features

#### Dynamic Page Loading

Starting from the main index page, the navigation throughout the site has been crafted to make it feel more like a single page application, as opposed to separate pages, or having all elements on one page. This decision was made to help improve performance and provide a more interactive application to users. This was achieved using [DOMParser](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser), where the other page HTML code could be fetched and parsed into a DOM document, thus dynamically updating/replacing elements in place.

In the event where a user might find themselves on a separate page, ways to navigate back to the homepage or character page have been included, so that the user is still able to find their way around. A 404 page has also been included should a user manage to navigate to a non-existent page.

#### Character Select

A range of characters have been provided for users to choose from, where their selection will return quotes specific to that character. The nine characters chosen are from the Fellowship itself, with Gollum as an additional character. Merry and Pippin are two separate characters in the API, so functionality was included in a case where two characters are selected to be able to fetch both of the quotes and process them together.

#### Test Timer Duration

A relatively new [popover](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/popover) element was used for the settings popover. Contained inside a time option allows users the change the duration of the test from the default (30 seconds) to 60 seconds. Due to the dynamic loading used for pages, this setting remains consistent and did not require any additional functionality to be implemented, such as using local storage, for example.

#### Typing Test

The majority of the functionality for this project is contained within the typing test itself. Inspiration for some of the functionality was provided by [https://monkeytype.com](monkeytype), a popular typing test. Quite early on, I realised that using keydown events by themselves would not be possible, due to the inconsistency of these events across the range of virtual keyboards used on mobile devices. As a result, I investigated further into monkeytype to find that an input field was being used, and so implemented a method of input checking to achieve the primary test functionality.

Once quotes are fetched, they are processed so each letter and word are individually wrapped in a HTML element. From here, classes can be applied based on the user's input, providing feedback on correctly or incorrectly typed characters.

Correctly typing a word and moving on to the next word will prevent the user from being able to navigate back to the previous word. If the previous word contains an error, the user will be able to navigate backwards to correct the error, should they so wish. If an incorrectly typed character is typed at the end of a word, it is added to the end of the word to make it obvious that an additional character has been typed.

A position caret has also been implemented to provide an additional point of feedback to the user, so that their current position can be easily identified at all times.

As the test relies on input checking, when the test loads, the input field is focused by default. If, in any instance, the focus is taken away from the input, the test timer is paused and an out-of-focus message is displayed with instructions for the user to be able to resume the test.

When the test loads initially, 10 random quotes from the selected character are used. If a user is particularly fast at typing, or they opt for the longer 60 second test, it could be possible that they would reach the end of these quotes. As a result, when the user reaches the start of the third line, the first line of words is removed so that more of the text becomes visible. In addition, one more random quote that hasn't been previously included gets added to the end of the text.

#### Results

A range of data is supplied to the user upon test completion. These metrics and calculations are explained in the settings popover, to provide the user with a clear understanding on how the results are calculated.

#### Restart Test

Once a test has been completed, the results are shown to the user. Restarting the test references the previous test data, so the exact same quotes can be typed. Alternatively, the user can also choose to select a different character to use a different set of quotes for the next test.

#### API Key and Local Data

Given the scope of this project, the API key has been included directly in the project. Whilst this is not best practice to do, there is a rate limit on requests. Further to this, quote data for each character has been saves locally so that in any case where the rate limit is exceeded, the test will still function. An icon and text will also be displayed in the header alongside settings icon, to inform the user that local data is being used.

### Future Feature Considerations

#### Additional Characters

[The One API](https://the-one-api.dev) contains practically every character from the LotR films, which provides an opportunity for any other character to be added as a choice for the typing test in the future.

#### Leaderboard

Whilst local storage could have been used for a leaderboard, if the scope of this project was larger to include the use of a database, then a leaderboard could certainly be added for users to submit their scores and compete against others.

#### Change Colours

Aside from having a light option to the current default dark style theme used, character-related themes could also be added, so that the background image and colours used would change based on the character selected. An option to select/change this colour theme could also be added to the settings popover, providing users with the ability to select a colour scheme of their preference.

## Technologies Used

### Languages Used

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [JavaScript ES6](https://en.wikipedia.org/wiki/ECMAScript)

### Frameworks, Libraries & Programs Used

- [Tailwind CSS v4.0](https://tailwindcss.com)
  - Tailwind CSS was used as the CSS framework to build the website using inline classes, styles, and functionality it provides.
- [node.js](https://nodejs.org/en) and [npm](https://www.npmjs.com)
  - Used to install and run several development packages on the command line.
  - [http-server](https://www.npmjs.com/package/http-server): a static HTTP server used for local development.
  - [Tailwind CSS](https://www.npmjs.com/package/tailwindcss): the main Tailwind CSS framework installation package.
  - [Tailwind CLI](https://www.npmjs.com/package/@tailwindcss/cli): to run Tailwind from the command line.
  - [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss): to automatically sort class names on the recommended order.
  - [Prettier](https://www.npmjs.com/package/prettier): used for code formatting.
  - [npm-run-all](https://www.npmjs.com/package/npm-run-all): to run multiple npm-scripts at the same time.
  - [onchange](https://www.npmjs.com/package/onchange): file watcher.
- [The One API](https://the-one-api.dev)
  - Used to fetch the selected character quotes used in the typing test.
- [Elvish Translator](https://www.jenshansen.com/pages/online-english-to-elvish-engraving-translator)
  - Used to translate the project to create logo and abbreviated logo icon.
- [Google Fonts](https://fonts.google.com/)
  - Google fonts was used to import the "Albert Sans" and "Fira Mono" fonts into CSS, and are used throughout the project.
- [heroicons](https://heroicons.com)
  - heroicons was used for the various icons used throughout the site, including arrows, settings, and
- [Git](https://git-scm.com/)
  - Git was used for version control to commit to Git and push to GitHub.
- [GitHub](https://github.com/)
  - GitHub was used to store the project code after being pushed to Git, as well as deploying the project files so that the project can be viewed online.
- [ui.dev/amiresponsive](https://ui.dev/amiresponsive)
  - ui.dev/amiresponsive was used to create the website device mock-up image used at the top of this file.
- [Figma](https://www.figma.com/)
  - Figma was used to create the [wireframes](https://jordancrouch.github.io/middle-earth-typing-trials/assets/wireframes/middle-earth-typing-trials-wireframes.pdf) and [designs](https://jordancrouch.github.io/middle-earth-typing-trials/assets/wireframes/middle-earth-typing-trials-design.pdf) for the project, as well as the logo and favicon. The wireframes were created using the [BRIX Templates Website Wireframes UI Kit](https://www.figma.com/community/file/1200835310657744518)
- [favicon.io](https://favicon.io)
  - favicon.io was used to generate the various favicon sizes used throughout the project.
- [Photoshop](https://www.adobe.com/uk/products/photoshop.html)
  - Photoshop was used to edit, resize, and export the images in WebP format throughout the website.
- [Illustrator](https://www.adobe.com/uk/products/illustrator.html)
  - Illustrator was used to edit the One Ring inscription text into a circle.
- [HTML Validator](https://www.htmlvalidator.com)
  - The HTML Validator was used to validate HTML and CSS. This validator was used as it includes newer HTML attributes used (such as popover) and includes CSS rules that are used in Tailwind CSS.
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
  - Google PageSpeed Insights was used to check the websites performance across mobile and desktop devices.
- [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/)
  - WAVE was used to test the websites accessibility features.

## Testing

Testing documentation and process can be found under [TESTING.md](https://github.com/jordancrouch/middle-earth-typing-trials/blob/main/TESTING.md)

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [jordancrouch/middle-earth-typing-trials](https://github.com/jordancrouch/middle-earth-typing-trials/) repository.
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
3. In the left-hand navigation, click on "Pages".
4. Under "Source", click the dropdown labelled "Deploy from a branch" and select "main".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://github.com/jordancrouch/middle-earth-typing-trials/) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository, we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [jordancrouch/middle-earth-typing-trials](https://github.com/jordancrouch/middle-earth-typing-trials/) repository.
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [jordancrouch/middle-earth-typing-trials](https://github.com/jordancrouch/middle-earth-typing-trials/) repository.
2. Under the repository name, click "Code".
3. To clone the repository using HTTPS, under "Code", click on the "HTTPS" tab and copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/jordancrouch/middle-earth-typing-trials.git
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/jordancrouch/middle-earth-typing-trials.git
> Cloning into 'middle-earth-typing-trials'...
> remote: Enumerating objects: 921, done.
> remote: Counting objects: 100% (127/127), done.
> remote: Compressing objects: 100% (96/96), done.
> remote: Total 921 (delta 71), reused 85 (delta 31), pack-reused 794 (from 1)
> Receiving objects: 100% (921/921), 9.98 MiB | 10.98 MiB/s, done.
> Resolving deltas: 100% (530/530), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

### Code

- [Tailwind CSS v4.0](https://tailwindcss.com) was used throughout the site to help with styling elements responsively.
- The idea to be able to load other page/file content dynamically was taken from [this post](https://gomakethings.com/how-to-load-html-from-another-page-with-vanilla-javascript/) on gomakethings.com.
- Code to determine local development environment and set different values for local/deployed sites was taken from [this StackOverflow post](https://stackoverflow.com/questions/3162457/how-to-check-with-javascript-if-connection-is-local-host).
- An earlier iteration of quote shuffling logic utilised Fisher-Yates shuffling, which I discovered on [this Geeks for Geeks post](https://www.geeksforgeeks.org/how-to-shuffle-an-array-using-javascript/), but was removed and replaced by different logic to keep track of used quotes.
- Styles used for the word and letter sizes/spacing in the typing test were found on [monkeytype](https://monkeytype.com).
- The initial idea to repeatedly run a function every specified amount of time was discovered on [this StackOverflow post](https://stackoverflow.com/questions/40711300/javascript-do-something-every-n-seconds).

### Content

- The character quote content used on the typing test is fetched from [The One API](https://the-one-api.dev).
- The other content used throughout the site was written by me.

### Media

- The background image and all character images are screenshots taken from The Lord of the Rings animated film from 1978 by Ralph Bakshi.
- The logo was created in [Figma](https://www.figma.com) using text generated by this [Elvish to English Translator](https://www.jenshansen.com/pages/online-english-to-elvish-engraving-translator)
- The favicon was also created in [Figma](https://www.figma.com), using text generated by this [Elvish to English Translator](https://www.jenshansen.com/pages/online-english-to-elvish-engraving-translator) and converted using [favicon.io](https://favicon.io/)

### Acknowledgements

- Thank you to our Cohort Facilitator, Lewis Dillon, for our weekly standups.
- Thank you to my mentor, Ben Kavanagh, for challenging me to push myself with the undertaking of this project, and for always being immensely helpful and supportive.
- Thank you to my partner, Mel, and my Mum, for your encouragement and support.

### Disclaimer

This website is for educational purposes only.
