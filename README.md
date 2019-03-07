# ![Edit-Distance-Calculator](https://raw.githubusercontent.com/efournier92/edit-distance-calculator/master/public/img/logo/edit-distance-calculator_Logo.png)

## Contents
- [Overview](#overview)
- [Demo](#demo)
- [Development Philosophy](#development-philosophy)
- [Stack](#stack)
- [Building](#building)
- [Contributing](#contributing)
- [Licensing](#licensing)
- [Features](#features)

## Overview
A small application for determining the `minimum edit-distance` between two string. User inputs any two strings, and the edit-distance is displayed in the UI. Each keystroke triggers a dictionary query, which returns the four English words with the least edit-distance as compared to the input. Those words are displayed and defined below, in a tabbed interface. Two such interfaces appear, one for each string input. This could serve as a rudimentary spell-check utility. The app was built using AngularJS, in a short amount of time during 2018.

## Demo
[Edit-Distance-Calculator](http://edit-distance-calculator.herokuapp.com/#/)

## Development Philosophy
I built this side-project to play around with writing a string comparison algorithm from scratch. Since this was just a code challenge that got out of hand, my strategy was to keep the code simple and the dependencies light. Other than the AngularJS framework, the app logic is in plain JavaScript. It runs exclusively on the client-side, and the is hosted on Heroku. I added the dictionary JSON query strictly as a test, but was surprised to find it runs fairly smoothly. Still, it's by no means efficient, and I'd add way more logic to my algorithm if I were to build a proper spell-check utility from scratch. I only spent a couple weeks on this one, but it was fun to build!

## Stack
- NodeJs
- ExpressJs
- AngularJS
- Bootstrap
- Babel
- GulpJS

## Building
1. `npm install --save`
2. `nodemon app.js`

## Contributing
If you have feature suggestions, please contact me here or at efournier92@gmail.com. If you'd like to submit a pull request, please feel free to, and I'll review merge it at my earliest convenience!

## Licensing
This project is provided under the `MIT` licence and I hereby grant rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software without limitation, provided the resulting software also carries the same open-source licensing statement.

## Features

### App Dashboard
![App Dashboard Screen](https://github.com/efournier92/edit-distance-calculator/blob/master/public/img/screenshots/App_Dashboard.png?raw=true)

### Calculate Edit Distance
![Calculate Edit Distance Screen](https://github.com/efournier92/edit-distance-calculator/blob/master/public/img/screenshots/Calculate_Edit_Distance.png?raw=true)

### Change Tab To Define Word
![Change Tab Screen](https://github.com/efournier92/edit-distance-calculator/blob/master/public/img/screenshots/Change_Tab.png?raw=true)

### Reset Inputs
![Reset Inputs Screen](https://github.com/efournier92/edit-distance-calculator/blob/master/public/img/screenshots/Reset_Inputs.png?raw=true)

