import React, {useState, useEffect} from "react"
import styled from 'styled-components'
import './styles.css'

import Seconds from './components/Seconds'
import SingleHours from './components/SingleHours'
import FiveHours from './components/FiveHours'
import SingleMinutes from './components/SingleMinutes'
import FiveMinutes from './components/FiveMinutes'
import Clock from './components/Clock'

const App = () =>  {
  const [dateNow, setDateNow] = useState(new Date());

  useEffect(() => {

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setDateNow(new Date())
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [dateNow]);

  /*
  static Clock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  ` */
    return (
      <div className="App">
        <h1>Berlin Clock</h1>
        <>
          <Seconds time={this.state.now} />
          <FiveHours time={this.state.now} />
          <SingleHours time={this.state.now} />
          <FiveMinutes time={this.state.now} />
          <SingleMinutes time={this.state.now} />
          <Clock time={this.state.now} />
        </>
      </div>
    )
}

export default App
