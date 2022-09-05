import {
  singleMinutes,
  fiveMinutes,
  fiveHours,
  singleHours,
  seconds,
  berlinClockDigitalClockConvert,
  digitalClockBerlinClockConvert,
} from '../../helpers/_functions';

// Unit Tests for Single Minutes
describe('Single Minutes', () => {
  it('Single Minutes - Test 1', () => {
    const date = new Date('2011-04-11T00:00:00Z');
    const minuteToTest = singleMinutes(date);

    expect(minuteToTest).toBe('OOOO');
  });

  it('Single Minutes - Test 2', () => {
    const date = new Date('2011-04-11T23:59:59Z');
    const minuteToTest = singleMinutes(date);

    expect(minuteToTest).toBe('YYYY');
  });

  it('Single Minutes - Test 3', () => {
    const date = new Date('2011-04-11T12:32:00Z');
    const minuteToTest = singleMinutes(date);

    expect(minuteToTest).toBe('YYOO');
  });

  it('Single Minutes - Test 4', () => {
    const date = new Date('2011-04-11T12:34:00Z');
    const minuteToTest = singleMinutes(date);

    expect(minuteToTest).toBe('YYYY');
  });

  it('Single Minutes - Test 5', () => {
    const date = new Date('2011-04-11T12:35:00Z');
    const minuteToTest = singleMinutes(date);

    expect(minuteToTest).toBe('OOOO');
  });
});

// Unit Tests for Five Minutes
describe('Five Minutes', () => {
  it('Five Minutes - Test 1', () => {
    const date = new Date('2011-04-11T00:00:00Z');
    const minuteToTest = fiveMinutes(date);

    expect(minuteToTest).toBe('OOOOOOOOOOO');
  });

  it('Five Minutes - Test 2', () => {
    const date = new Date('2011-04-11T23:59:59Z');
    const minuteToTest = fiveMinutes(date);

    expect(minuteToTest).toBe('YYRYYRYYRYY');
  });

  it('Five Minutes - Test 3', () => {
    const date = new Date('2011-04-11T12:04:00Z');
    const minuteToTest = fiveMinutes(date);

    expect(minuteToTest).toBe('OOOOOOOOOOO');
  });

  it('Five Minutes - Test 4', () => {
    const date = new Date('2011-04-11T12:23:00Z');
    const minuteToTest = fiveMinutes(date);

    expect(minuteToTest).toBe('YYRYOOOOOOO');
  });

  it('Five Minutes - Test 5', () => {
    const date = new Date('2011-04-11T12:35:00Z');
    const minuteToTest = fiveMinutes(date);

    expect(minuteToTest).toBe('YYRYYRYOOOO');
  });
});

/**
 * Unit Tests for Single Hours
 * We put the hours to be sure to have the same time because there is an increment 
 * of the time
 */
describe('Single Hours', () => {
  it('Single Hours - Test 1', () => {
    const date = new Date('2011-04-11');
    date.setHours(0);
    date.setMinutes(0);
    const hourToTest = singleHours(date);

    expect(hourToTest).toBe('OOOO');
  });

  it('Single Hours - Test 2', () => {
    const date = new Date('2011-04-11');
    date.setHours(23);
    date.setMinutes(59);
    const hourToTest = singleHours(date);

    expect(hourToTest).toBe('RRRO');
  });

  it('Single Hours - Test 3', () => {
    const date = new Date('2011-04-11');
    date.setHours(2);
    date.setMinutes(4);
    const hourToTest = singleHours(date);

    expect(hourToTest).toBe('RROO');
  });

  it('Single Hours - Test 4', () => {
    const date = new Date('2011-04-11');
    date.setHours(8);
    date.setMinutes(23);
    const hourToTest = singleHours(date);

    expect(hourToTest).toBe('RRRO');
  });

  it('Single Hours - Test 5', () => {
    const date = new Date('2011-04-11');
    date.setHours(14);
    date.setMinutes(35);
    const hourToTest = singleHours(date);

    expect(hourToTest).toBe('RRRR');
  });
});

/**
 * Unit Tests for Five Hours
 * We put the hours to be sure to have the same time because there is an increment 
 * of the time
 */
describe('Five Hours', () => {
  it('Five Hours - Test 1', () => {
    const date = new Date('2011-04-11');
    date.setHours(0);
    date.setMinutes(0);
    const hourToTest = fiveHours(date);

    expect(hourToTest).toBe('OOOO');
  });

  it('Five Hours - Test 2', () => {
    const date = new Date('2011-04-11');
    date.setHours(23);
    date.setMinutes(59);
    const hourToTest = fiveHours(date);

    expect(hourToTest).toBe('RRRR');
  });

  it('Five Hours - Test 3', () => {
    const date = new Date('2011-04-11');
    date.setHours(2);
    date.setMinutes(4);
    const hourToTest = fiveHours(date);

    expect(hourToTest).toBe('OOOO');
  });

  it('Five Hours - Test 4', () => {
    const date = new Date('2011-04-11');
    date.setHours(8);
    date.setMinutes(23);
    const hourToTest = fiveHours(date);

    expect(hourToTest).toBe('ROOO');
  });

  it('Five Hours - Test 5', () => {
    const date = new Date('2011-04-11');
    date.setHours(16);
    date.setMinutes(35);
    const hourToTest = fiveHours(date);

    expect(hourToTest).toBe('RRRO');
  });
});

// Unit Tests for Seconds
describe('Seconds', () => {
  it('Seconds - Test 1', () => {
    const date = new Date('2011-04-11T00:00:00Z');
    const secondToTest = seconds(date);

    expect(secondToTest).toBe('Y');
  });

  it('Seconds - Test 2', () => {
    const date = new Date('2011-04-11T23:59:59Z');
    const secondToTest = seconds(date);

    expect(secondToTest).toBe('O');
  });
});

/**
 * Unit Tests for convert Digital Clock to Berlin Clock
 * We put the hours to be sure to have the same time because there is an increment 
 * of the time
 */
describe('From Digital Clock to Berlin Clock', () => {
  it('From Digital Clock to Berlin Clock - Test 1', () => {
    const date = new Date('2011-04-11T00:00:00Z');
    date.setHours(0);
    const berlinClockValue = digitalClockBerlinClockConvert(date);

    expect(berlinClockValue).toBe('YOOOOOOOOOOOOOOOOOOOOOOO');
  });

  it('From Digital Clock to Berlin Clock - Test 2', () => {
    const date = new Date('2011-04-11T23:59:59Z');
    date.setHours(23);
    const berlinClockValue = digitalClockBerlinClockConvert(date);

    expect(berlinClockValue).toBe('ORRRRRRROYYRYYRYYRYYYYYY');
  });

  it('From Digital Clock to Berlin Clock - Test 3', () => {
    const date = new Date('2011-04-11T16:50:06Z');
    date.setHours(16);
    const berlinClockValue = digitalClockBerlinClockConvert(date);

    expect(berlinClockValue).toBe('YRRROROOOYYRYYRYYRYOOOOO');
  });

  it('From Digital Clock to Berlin Clock - Test 4', () => {
    const date = new Date('2011-04-11T11:37:01Z');
    date.setHours(11);
    const berlinClockValue = digitalClockBerlinClockConvert(date);

    expect(berlinClockValue).toBe('ORROOROOOYYRYYRYOOOOYYOO');
  });
});

/**
 * Unit Tests for convert Berlin Clock to Digital Clock
 * We put the hours to be sure to have the same time because there is an increment 
 * of the time
 */
describe('From Berlin Clock to Digital Clock', () => {
  it('From Berlin Clock to Digital Clock - Test 1', () => {
    const berlinClockValue = 'YOOOOOOOOOOOOOOOOOOOOOOO';
    const digitalClockValue = berlinClockDigitalClockConvert(berlinClockValue);
    const seconds = digitalClockValue.split(':');

    expect(digitalClockValue).toBe(`0 : 0 :${seconds[2]}`);
  });

  it('From Berlin Clock to Digital Clock - Test 2', () => {
    const berlinClockValue = 'ORRRRRRROYYRYYRYYRYYYYYY';
    const digitalClockValue = berlinClockDigitalClockConvert(berlinClockValue);
    const seconds = digitalClockValue.split(':');

    expect(digitalClockValue).toBe(`23 : 59 :${seconds[2]}`);
  });

  it('From Berlin Clock to Digital Clock - Test 3', () => {
    const berlinClockValue = 'YRRROROOOYYRYYRYYRYOOOOO';
    const digitalClockValue = berlinClockDigitalClockConvert(berlinClockValue);
    const seconds = digitalClockValue.split(':');

    expect(digitalClockValue).toBe(`16 : 50 :${seconds[2]}`);
  });

  it('From Berlin Clock to Digital Clock - Test 4', () => {
    const berlinClockValue = 'ORROOROOOYYRYYRYOOOOYYOO';
    const digitalClockValue = berlinClockDigitalClockConvert(berlinClockValue);
    const seconds = digitalClockValue.split(':');

    expect(digitalClockValue).toBe(`11 : 37 :${seconds[2]}`);
  });
});
