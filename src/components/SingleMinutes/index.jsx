import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

import Row from '../Row'
import { LargeLed } from '../Leds'

const getLastDigit = number => parseInt(number % 5)

const between = max => number => min => number >= min && number <= max

const getLedsFromTime = time => {
  const minute = getLastDigit(time.getMinutes())

  const betweenFourAnd = between(4)(minute)

  return [
    betweenFourAnd(1),
    betweenFourAnd(2),
    betweenFourAnd(3),
    betweenFourAnd(4),
  ]
}

const Led = styled(LargeLed)`
  background-color: ${({ active }) => (active ? 'yellow' : 'black')};
`
/**
 * 
 * @param {*} time : current time
 * @returns Single Minute Blocks
 */
const SingleMinute = ({ time }) => (
  <Row>{getLedsFromTime(time).map((active, index) => <Led key={index} active={active} />)}</Row>
)

SingleMinute.protoTypes = {
  time: PropTypes.object
};

export default SingleMinute
