# random-pw-generator

## Description

For this project, I will be creating a random password generator developed with javascript and a css framework. The site must be secure, and the password must meet the requirements set forth by the user. Javascript is a powerful tool in any developer's belt, and will be the main focus of this project.

While building this password generation application, I was able to learn a few fundamental tricks that helped me along the way. Of those fundamental tricks, the most important was the use of DOM events, such as the "addEventListener" that was placed on the "generate password" button within the webpage. By placing this DOM event in the language, clicking the "generate password" button linked the click event to a function within my JavaScript code. Once the DOM event was started, I created a framework within the "generatePW()" function that prompts/confirms the user with a sereies of questions that are used to determine what characters and how many characters will be used in the password. These prompts and confirmations were stored within variables and arrays, allowing me to push their answers into empty arrays. The most difficult part of the project was creating a mathematical calculation that would take the characters allowed by the user, and randomly select between those characters for the password. I used a for loop along with Math.floor and Math.random along with the userChoiceArray in order to accomplish this task.

![Finished Website](../css/Images/random-pw-gen-site.png)

## Credits

For this project, I used a few resources from developer sites in order to help me gain a broader understanding of the requirements I would be fullfilling. The following sources can be found below:

[StackOverflow](https://stackoverflow.com/)

[w3schools website](https://www.w3schools.com/js/js_htmldom.asp)

[MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events)

## Links

[Live URL](https://jonathanstoll0603.github.io/random-pw-generator/)

[Github URL](https://github.com/jonathanstoll0603/random-pw-generator)