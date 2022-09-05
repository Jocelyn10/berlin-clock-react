const getLedsFromTime = time => {
  const leds = parseInt(time.getMinutes() / 5)
  return Array(11)
    .fill(false)
    .map((_, index) => index < leds)
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

  if(time){
    let ledsArray = getLedsFromTime(time);

    ledsArray.map((led, index) => {
      if(led){
        if(index !== 0 && index % 2 === 0){
          berlinClockconversionArray.push("R")
        }else{
          berlinClockconversionArray.push("Y")
        }
      }else{
        berlinClockconversionArray.push("O")
      }
    })

    return berlinClockconversionArray.join('')
  }

  return ""
}


