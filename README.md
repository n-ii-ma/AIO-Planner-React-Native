[![MIT License](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)

# AIO Planner

A multipurpose React Native Android/iOS app which implements Google’s Material Design.

## Table of contents
+ [General Info](#general-info)
+ [Technologies](#technologies)
+ [Setup](#setup)
+ [Features](#features)
+ [Screenshots](#screenshots)
+ [License](#license)
+ [Contact](#contact)

## General Info
This React Native app allows clients to calculate their income/expenses, keep track of their tasks, get the weather data of their location, and search the current weather of any city in the world.

## Technologies
Project is created with:
+ React v17.0.2
+ React Native v0.68.2
+ React-Redux v8.0.2
+ Redux Toolkit v1.8.2
+ npm v8.5.0

## Setup

### Installation
To run this project, install it locally using npm:
```
$ cd ../aio-planner-react-native
$ npm install
```

Then follow the [React Native instructions](https://reactnative.dev/docs/environment-setup) to set up the development environment with React Native CLI.

### Environment Variables
After installation, you will need to add the following environment variable to your `.env` file:

- `API_KEY` : Your OpenWeather API Key

You can import the environment variable with `react-native-dotenv`:
```
import {API_KEY} from '@env';
```

## Features
- Calculate income/expenses
- Keep track of a list of daily tasks
- Get current weather info based on GPS location and search query

## Screenshots
<p float="left">
  <img src="https://user-images.githubusercontent.com/88039431/173394747-a2d29232-33a8-47cb-82b8-92ac577837bb.png" width="270" />
  <img src="https://user-images.githubusercontent.com/88039431/173394769-4e1f9485-8ad5-4a23-8c58-98382ea965e6.png" width="270" />
  <img src="https://user-images.githubusercontent.com/88039431/173394836-66203f14-23f5-4fbc-a9d9-f6b71eb833a8.png" width="270" />
</p>

## License
Distributed under the [MIT](https://opensource.org/licenses/MIT) License.

## Contact
Created by [n-ii-ma](https://github.com/n-ii-ma)

Feel free to contact me!
