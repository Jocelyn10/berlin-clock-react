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
      const ZeroLettersCount = berlinClockconversion.length;
      const ZeroLettersValue = '0'.repeat(ZeroLettersCount);

      return berlinClockconversion.concat(ZeroLettersValue);
    }

    return berlinClockconversion;
  }

  return berlinClockconversion;
};
