# GraphingCalculator
A graphing calculator made on html

![GraphingCalculator](https://github.com/YeetTheAnson/GraphingCalculator/raw/main/1.png)

https://github.com/user-attachments/assets/33c21adc-c2e5-4a3d-8858-4eb220cfea37


Visit the site and try out the calculator yourself [GraphingCalculator](https://yeettheanson.github.io/GraphingCalculator/index.html)

## Overview

**GraphingCalculator** Uses javascript and chart.js to plot a mathematical equation.

# Getting started

1. Launch the html site
    - [Hosted on GitHub pages](#how-to-visit-the-link)
    - [Run locally]()
2. Learn how to use the calculator [here](#usage)
4. Learn about the features [here](#how-it-works)


## How to visit the link

1. Copy and paste the following link into your browser address bar and press the enter key `https://yeettheanson.github.io/GraphingCalculator/index.html`

## How to run locally

1. Type ```git clone https://github.com/YeetTheAnson/GraphingCalculator``` into CMD
2. Navigate to the correct folder with ```cd Html```
3. Type ```start index.html```  into CMD
4. Your browser of choice should open with the webpage


# Usage

1. Type in any mathematical equation
2. Set your X domain below the keypad
3. Press the graph button to start plotting
4. Use the arrow button to move the caret (text cursor)

## How it works
1. First a lower and upper domain is determined, and the range between the domain is calculated (upper - lower domain)
2. 5000 data point is obtained by using a for loop and the equation: LowerDomain + (Range*n)/5000
3. Y value is calculated by subbing into the equation
4. 5000 pairs of coordinates are obtained and plotted
