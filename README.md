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
A small application for determining the minimum [edit distance](https://en.wikipedia.org/wiki/Edit_distance) between two strings. A user may input any two strings, and the [edit distance](https://en.wikipedia.org/wiki/Edit_distance) is displayed in the UI. Each keystroke triggers a dictionary query, which returns the four English words with the least [edit distance](https://en.wikipedia.org/wiki/Edit_distance) as compared to the input. Those words are displayed and defined below in a tabbed interface. This interface and underlying algorithm function a rudimentary spell-check utility. Two such interfaces appear, one for each string input. The app was built using [AngularJS](https://angularjs.org/), in a short amount of time during 2018.

## Demo
[Edit-Distance-Calculator](http://edit-distance-calculator.herokuapp.com/#/)

## Development Philosophy
This project started as a simple [edit distance](https://en.wikipedia.org/wiki/Edit_distance) challenge, but turned into my playing around with writing a string-comparison algorithm from scratch. Since this was meant to be a quick project, my strategy was to keep the code simple and the dependencies light. Aside from the [AngularJS](https://angularjs.org/) dependency, this app is very light. It runs exclusively on the client-side, and the is hosted via [Heroku](https://www.heroku.com/). I added the dictionary [JSON](https://www.json.org/) query strictly as a test, but was surprised to find it runs fairly smoothly. Still, it's by no means efficient, and I'd add way more logic to my algorithm if I were to build a proper spell-check utility from scratch. I only spent a couple weeks on this one, but it was fun to build!

## Stack

### Server
- [NodeJs](https://nodejs.org/)
- [ExpressJs](https://expressjs.com/)

### Client
- [AngularJS](https://angularjs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Babel](https://babeljs.io/)
- [GulpJS](https://gulpjs.com/)

## Building
1. `npm install --save`
2. `nodemon app.js`

## Contributing
If you have feature suggestions, please contact me here or at efournier92@gmail.com. If you'd like to submit a pull request, please feel free to, and I'll review merge it at my earliest convenience!

## Licensing
This project is provided under the [`MIT`](https://opensource.org/licenses/MIT) licence and I hereby grant rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software without limitation, provided the resulting software also carries the same open-source licensing statement.

## Features

### App Dashboard
![App Dashboard Screen](https://raw.githubusercontent.com/efournier92/edit-distance-calculator/master/public/img/screenshots/App_Dashboard.png)

### Calculate Edit Distance
![Calculate Edit Distance Screen](https://raw.githubusercontent.com/efournier92/edit-distance-calculator/master/public/img/screenshots/Calculate_Edit_Distance.png)

### Change Tab To Define Word
![Change Tab Screen](https://raw.githubusercontent.com/efournier92/edit-distance-calculator/master/public/img/screenshots/Change_Tab.png)

### Reset Inputs
![Reset Inputs Screen](https://raw.githubusercontent.com/efournier92/edit-distance-calculator/master/public/img/screenshots/Reset_Inputs.png)

