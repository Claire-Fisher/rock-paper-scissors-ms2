# Testing Page Table of Contents
* [**During Development Testing**](#during-development-testing)
    * [*Manual Testing*](#manual-testing)
    * [*Bugs and Fixes*](#bugs-and-fixes)
    * [*Third Party Testing and Feedback*](#third-party-testing-and-feedback)
* [**Post Development Testing**](#post-development-testing)
  * [**Validators**](#validators)
      * [*HTML*](#html---httpsvalidatorw3orgnu)
      * [*CSS*](#css---httpsjigsaww3orgcss-validator)
  * [**Lighthouse Scores**](#lighthouse-scores)
      * [*Desktop Version:*](#desktop-version)
      * [*Mobile Version*](#mobile-version)
      * [*Lighthouse Score Feedback From Third Party Testers*](#lighthouse-score-feedback-from-third-party-testers)
  * [**Accessability**](#accessability)

## **During Development Testing**
During the development process, I was manually testing in the following ways:-

1. Manually testing each element for appearance and responsiveness via a simulated live server using an extension in VSCode.
    
1. Published the page via GitHub pages and shared with fellow students to test and received feedback.

### ***Manual Testing:***

**Browser Compatibility**
* During testing, I used four different browsers to ensure cross-compatibility. The desktop browsers used by myself were:

  1. Chrome
  2. Firefox  
  3. Opera
  4. Edge

* I then used the devtools to simulate different screen sizes/devices from 320 px up to 1700px in width. 
* In addition to this, I also asked several people to test using iPhones and Apple Mac laptops/desktops using safari. These users reported no issues or bugs only style suggestions. CHECK THIS BEFORE PROJECT COMPLETION!!

**Style and Script link functionality**
* To manaually test my CSS and JS links were functioning as intended: 
  * I created a test h1 on my html.
  * I added code in the style.css to make the h1 content red.
  * I added code in the script.js to message the console. 
  * Ran my project in a live browser.
  * Result: Links working correctly.

  ![The reults of the links test image](/documents/testing-images/manual-testing-linked-css-and-js.png)

**Colour Palette**
* I softened the white and black values to reduce screen glare discomfort for the user. To test the contrast was still high enough for readability:
  * I created an additional h2 & h3 on my html.
  * I added code in the style.css to test font-color and background-color combos. 
  * Ran my project in a live browser and inspected with chrome dev tools.
  * H1 result: contrast rating = 9.6. Good readability.
  * H2 result: contrast rating = 15.11. Good readability.
  * H3 result: contrast rating = 1.57 Low readability.
  * Result: Only the H1 and H2 combo examples will be used. 

  ![The results of the colour palette test image](/documents/testing-images/color-testing.png)

**Best of three function**
* To manaually test my bestOfThree function was working as intended: 
  * Included a simple console log to announce "GAME OVER. PLEASE REFRESH" when any of the scores (win/lose/draw) hit the value of 3. 

  ![The results of manually testing the best-of-three function image](/documents/testing-images/best-of-three.png)

### ***Bugs and Fixes:***

Below is a list of bugs I found during the development process by testing myself via the live server extension on VSCode. I tried each element for how the browser would display the page to potential users on a range of different screen widths from 320px to 4000px:-

1. **Game-countdown area visibility** - 
    * ***Issue Found:*** 
        * Game countdown area showing on page load. Needs to be hidden on load, and show briefly during countdown phase, before returning back to hidden.
    * ***Solution Used:*** 
        * Gave the countdown-area section the class of 'hidden'.
        * Styled with CSS to display: none. 
        * Added jquery function to remove 'hidden' class when the user clicks on a game-btn.
2. **Variable playersChoice not updating** 
    * ***Issue Found:***
        * Variable playersChoice assigning on page load & not updating with event listener
        * Error message in console stated playersChoice as an empty string still, even after button clicked.
        * Template literal blank where variable value should be. 
    * ***Solution Used:***    
        * Declared the variable with an empty string.
        * Created an updateChoices function & called it inside the handleButtonClick function.
3. **H1 styling issue** 
    * ***Issue Found:*** 
        * H1 line height was far too big and causing styling issues. Dropping lower elements further down the page. All attempts to restyle H1 failed to fix the issue. 
    * ***Solution Used:***    
        * Realised I had targeted the weapon buttons with the class .btn
        * .btn is a bootstrap class, so the styling I'd applied to the weapons buttons, was also targetting the bootstrap modal button in the H1. 
        * Targetted the weapons buttons with .game-btn instead (my own class name). Additional height properties no longer affecting the H1 element. 
4. **AI random weapon not updating correctly** 
    * ***Issue Found:*** 
        * The AI's randomly generated weapon was not updating after the first round.  
    * ***Solution Used:***    
        * Created an empty string variable. 
        * Reassigned this variable with the getRandomWeapon function inside the button click event. 
        * AI random weapon choice now refreshes on every click event. 
5. **New Game functionality** 
    * ***Issue Found:*** 
        * Continue button still operating as a "New Game" button after first game over. So game kept resetting every time user clicked Continue.
    * ***Solution Used:***    
        * Created a separate New Game button in the html. Previously the button's innerText switched between "Continue" and "New Game" with JavaScript.
        * Used show and hide JQuerys to switch between the two buttons at the correct time.
        * With separate buttons, I could then accurately target each one to excute the correct functions and JQuery commands.  
6. **rollCountdown function** 
    * ***Issue Found:*** 
        * Appeared rollCountdown function was not executing after it's first cycle.
        * Suspected issue was the countdown numbers were still classed as "hidden" after the first fadeOuts. Showing and hiding in different positions, and even later functions, did not fix the issue. 
    * ***Solution Used:***    
        * Not only did the numbers need to be unhidden with show(), but the opacity had to be reset back up to 1 so they werent transparent. Countdown now executes as expected. 
7. **Intended Outcome** 
    * ***Issue Found:*** 
        * 
    * ***Solution Used:***    
        * 

### **Third Party Testing and Feedback**

1. **Final result "Draw"**
    * ***Tester feedback: Shaun Russell***
        * The "Final Result: Draw" outcome is confusing to the user. 
        * Suggestion: Have "Win" and "Lose" game completion options only.
        * Draw will continously tally until Win or Lose scores reach three.
2. **Final result "Lose"**
    * ***Tester feedback: Shaun Russell***
        * The "Final Result: Lose" outcome isn't obvious enough to the user. 
        * Suggestion: Have a single "Lose" game gif.
        * Lose outcome is still less favourable than win, as the single gif will be displayed every time a loss result is reached. 
    
## **Post Development Testing**
### **Validators**

#### ***HTML*** - https://validator.w3.org/nu/

* ***Issue Found:***
    * enter issue here
* ***Solution Used:***
    * enter solution here

#### ***CSS*** - https://jigsaw.w3.org/css-validator/

* All pages tested, no issues found via URL or file upload.\
![CSS validator badge](https://jigsaw.w3.org/css-validator/images/vcss)

### **Lighthouse Scores**
### **Test conditions**
* I did all lighthouse tests in incognito mode to avoid interference from browser extensions. 
* I ran the tests for both mobile and desktop. 
* I asked people to run lighthouse tests from their own devices. 
#### ***Desktop Version:***
I have only included one screenshot for desktop as all pages were the same score, only changing by one or two points in performance if I ran it multiple times. 

![Desktop Lighthouse Score](docs/screenshots/lighthouse-desktop.jpg) 

**There were several actions required to get to this score:**

#### ***Mobile Version:*** CHECK THIS BEFORE PROJECT COMPLETION!!

* Due to the more significant variance in the performance score, I have included a screenshot for each mobile page. That being said when I asked one of my testers to check the mobile light house scores from his device his performance scores were all the high nineties.

1. ***index.html:***

    ![Mobile Lighthouse Score for index.html]() 



#### ***Lighthouse score Feedback From Third Party Testers***CHECK THIS BEFORE PROJECT COMPLETION!!

  
### **Accessability** CHECK THIS BEFORE PROJECT COMPLETION!!
In addition to the accessability score on light house I also used [WAVE - Web accessability evaluation tool](https://wave.webaim.org/) to check my pages for accessability and no errors were returned.
***   
[return to README.md](README.md)