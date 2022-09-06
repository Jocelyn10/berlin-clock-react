import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

import Row from '../Row'
import { SmallLed } from '../Leds'

const getLedsFromTime = time => {
  const leds = parseInt(time.getMinutes() / 5)
  return Array(11)
    .fill(false)
    .map((_, index) => index < leds)
}

const isThird = index => index !== 0 && ((index + 1) % 3) === 0

const Led = styled(SmallLed)`
  background-color: ${({ active, isThird }) =>
    active ? (isThird ? 'red' : 'yellow') : 'black'};
`

/**
 * 
 * @param {*} time : current time
 * @returns Five Minute Blocks
 */
const FiveMinute = ({ time }) => (
  <Row>
    {getLedsFromTime(time).map((active, index) => (
      <Led key={index} active={active} isThird={isThird(index)} />
    ))}
  </Row>
)

FiveMinute.protoTypes = {
  time: PropTypes.object
};

export default FiveMinute
