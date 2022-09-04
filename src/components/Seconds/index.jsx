import styled from 'styled-components'

export default styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: ${({ time }) => (time.getSeconds() % 2 ? 'black' : 'red')};
`
