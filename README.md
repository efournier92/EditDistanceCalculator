# ![Edit-Distance-Calculator](https://raw.githubusercontent.com/efournier92/edit-distance-calculator/master/public/img/logo/edit-distance-calculator_Logo.png)

## Contents
- [Overview](#overview)
- [Demo](#demo)
- [Features](#features)
- [Development Philosophy](#development-philosophy)
- [Stack](#stack)
- [Building](#building)
- [Contributing](#contributing)
- [Licensing](#licensing)

## Overview
I built this side-project to play around with writing a string comparison algorithm from scratch. The application can compare any two strings, calculating the minimum edit distance between the two. For each string the user inputs, the app will query a dictionary file to find the four English words with the smallest edit distance to the inputted string: this demonstrates how my algorithm could easily be repurposed into simple spell-checker.

A small application for determining the `minimum edit distance` between two string inputs.

## Demo
[Edit-Distance-Calculator](http://edit-distance-calculator.herokuapp.com/#/)

## Features

### App Dashboard
![App Dashboard Screen](https://github.com/efournier92/edit-distance-calculator/blob/master/public/img/screenshots/App_Dashboard.png?raw=true)

### Calculate Edit Distance
![Calculate Edit Distance Screen](https://github.com/efournier92/edit-distance-calculator/blob/master/public/img/screenshots/Calculate_Edit_Distance.png?raw=true)

### Change Tab To Define Word
![Change Tab Screen](https://github.com/efournier92/edit-distance-calculator/blob/master/public/img/screenshots/Change_Tab.png?raw=true)

### Reset Inputs
![Reset Inputs Screen](https://github.com/efournier92/edit-distance-calculator/blob/master/public/img/screenshots/Reset_Inputs.png?raw=true)

## Development Philosophy
Since this was just a side-project I got carried away with, my strategy was to keep the code simple and dependencies light. Other than the AngularJS framework, the app logic is mostly built on plain JavaScript.

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

