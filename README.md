[![CircleCI](https://circleci.com/gh/glippi/berlin-clock.svg?style=svg)](https://circleci.com/gh/glippi/berlin-clock)

<div align="center">
  <h1>Berlin Clock</h1>
  <img
    alt="berlin-clock"
    src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Berlin-Uhr-1650-1705.gif"
    />

  > implementation of the berlin clock kata
</div>


The Berlin Uhr (Clock) is a rather strange way to show the time. On the top of the clock there is a yellow lamp that blinks on/off every two seconds. The time is calculated by adding rectangular lamps.

The top two rows of lamps are red. These indicate the hours of a day. In the top row there are 4 red lamps. Every lamp represents 5 hours. In the lower row of red lamps every lamp represents 1 hour. So if two lamps of the first row and three of the second row are switched on that indicates 5+5+3=13h or 1 pm.

The two rows of lamps at the bottom count the minutes. The first of these rows has 11 lamps, the second 4. In the first row every lamp represents 5 minutes. In this first row the 3rd, 6th and 9th lamp are red and indicate the first quarter, half and last quarter of an hour. The other lamps are yellow. In the last row with 4 lamps every lamp represents 1 minute.

The lamps are switched on from left to right.

Test Cases (Y = Yellow, R = Red, O = Off)

Input Result 00:00:00 Y OOOO OOOO OOOOOOOOOOO OOOO

13:17:01 O RROO RRRO YYROOOOOOOO YYOO

23:59:59 O RRRR RRRO YYRYYRYYRYY YYYY

24:00:00 Y RRRR RRRR OOOOOOOOOOO OOOO

## UI

The UI is built using React. The components are tested with 
`@testing-library/react`.

### The Kata

For more info about the kata, like rules etc., please check:
  
  * [Agile Katas](http://agilekatas.co.uk/katas/BerlinClock-Kata)
  * [CodeWars](https://www.codewars.com/kata/berlin-clock)

#### Local Development

As the app was created with *create-react-app*, you have all the scripts that
are shipped by default with cra, so:

  * install packages: `yarn install`
  * run tests: `yarn test`
  * run local server: `yarn start`
  * build for production: `yarn build`
