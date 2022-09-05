const getLedsFromTime = (time) => {
  const leds = parseInt(time.getMinutes() / 5);
  return Array(11)
    .fill(false)
    .map((_, index) => index < leds);
};

// min and max included
const randomIntFromInterval = (min, max) => {  
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const singleMinutes = (time) => {
  let berlinClockconversion = '';

  if (time) {
    const minutes = time.getMinutes();
    const lastDigit = minutes % 5;
    berlinClockconversion = 'Y'.repeat(lastDigit);

    /**
     * Pour des raisons de performance, nous voulions
     * exclure le cas notre module ci-dessus donne 0
     */
    if (lastDigit < 4) {
      const ZeroLettersCount = 4 - lastDigit;
      const ZeroLettersValue = 'O'.repeat(ZeroLettersCount);

      return berlinClockconversion.concat(ZeroLettersValue);
    }

    return berlinClockconversion;
  }

  return berlinClockconversion;
};

export const fiveMinutes = (time) => {
  let berlinClockconversionArray = [];

  if (time) {
    let ledsArray = getLedsFromTime(time);

    ledsArray.map((led, index) => {
      if (led) {
        if (index !== 0 && index % 2 === 0) {
          berlinClockconversionArray.push('R');
        } else {
          berlinClockconversionArray.push('Y');
        }
      } else {
        berlinClockconversionArray.push('O');
      }
    });

    return berlinClockconversionArray.join('');
  }

  return '';
};

export const singleHours = (time) => {
  let berlinClockconversion = '';

  if (time) {
    const hours = time.getHours();
    const lastDigit = hours % 5;
    berlinClockconversion = 'R'.repeat(lastDigit);

    /**
     * Pour des raisons de performance, nous voulions
     * exclure le cas notre module ci-dessus donne 0
     */
    if (lastDigit < 4) {
      const ZeroLettersCount = 4 - lastDigit;
      const ZeroLettersValue = 'O'.repeat(ZeroLettersCount);

      return berlinClockconversion.concat(ZeroLettersValue);
    }

    return berlinClockconversion;
  }

  return berlinClockconversion;
};

export const fiveHours = (time) => {
  let berlinClockconversion = '';

  if (time) {
    const hours = time.getHours();
    const fiveHoursCount = parseInt(hours / 5);
    berlinClockconversion = 'R'.repeat(fiveHoursCount);

    /**
     * Pour des raisons de performance, nous voulions
     * exclure le cas notre module ci-dessus donne 0
     */
    if (fiveHoursCount < 4) {
      const ZeroLettersCount = 4 - fiveHoursCount;
      const ZeroLettersValue = 'O'.repeat(ZeroLettersCount);

      return berlinClockconversion.concat(ZeroLettersValue);
    }

    return berlinClockconversion;
  }

  return berlinClockconversion;
};

export const seconds = (time) => {
  if (time) {
    if (time.getSeconds() % 2) return 'Y';
    return 'O';
  }

  return '';
};

export const digitalClockBerlinClockConvert = (time) => {
  if (time) {
    return `${seconds(time)}${fiveHours(time)}${singleHours(time)}${fiveMinutes(
      time
    )}${singleMinutes(time)}`;
  }

  return '';
};

export const berlinClockDigitalClockConvert = (berlinClockValue) => {
  if (berlinClockValue) {
    let hours = 0;
    let fiveHours = '';
    let singleHours = '';

    let minutes = 0;
    let fiveMinutes = '';
    let singleMinutes = '';

    let randomSeconds = randomIntFromInterval(0, 60);

    fiveHours = berlinClockValue.toString().substring(1, 5);
    fiveHours.split('').map((value) => {
      if (value !== 'O') {
        hours += 5;
      }
    });

    singleHours = berlinClockValue.toString().substring(5, 9);
    singleHours.split('').map((value) => {
      if (value !== 'O') {
        hours += 1;
      }
    });

    fiveMinutes = berlinClockValue.toString().substring(9, 20);
    fiveMinutes.split('').map((value) => {
      if (value !== 'O') {
        minutes += 5;
      }
    });

    singleMinutes = berlinClockValue.toString().substring(20, 24);
    singleMinutes.split('').map((value) => {
      if (value !== 'O') {
        minutes += 1;
      }
    });

    if (
      (berlinClockValue.toString().substring(0, 1) === 'Y' &&
        randomSeconds % 2 !== 0) ||
      (berlinClockValue.toString().substring(0, 1) !== 'Y' &&
        randomSeconds % 2 === 0)
    ) {
      randomSeconds += 1;
    }

    return `${hours} : ${minutes} : ${randomSeconds}`;
  }

  return '';
};
