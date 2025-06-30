import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
  if (good + neutral + bad == 0 ){
    return (
      <>
      <p>No feedback given</p>
      </>
    )
  }
  return (
    <>
      <StatisticLine name={"Good"} value={good}/>
      <StatisticLine name={"Neutral"} value={neutral}/>
      <StatisticLine name={"Bad"} value={bad}/>
      <StatisticLine name={"All"} value={good + neutral + bad}/>
      <StatisticLine name={"Average"} value={(good + (bad * -1))/(good + neutral + bad)}/>
      <StatisticLine name={"Positive"} value={(good * 100)/(good + neutral + bad)}/>
    </>

  )
}

const Button = ({goodClick, badClick, neutralClick}) => {
  
  return (
    <>
    <ButtonClick onClickValue={goodClick} text={'Good'}/>
    <ButtonClick onClickValue={neutralClick} text={'Neutral'}/>
    <ButtonClick onClickValue={badClick} text={'Bad'}/>
    </>
  )
}

const StatisticLine = ({name, value}) => {
    return (
      <>
        <p>{name}: {value}</p>
      </>
    )
}

const ButtonClick = ({onClickValue, text}) => {
  return (
    <>
    <button onClick={onClickValue}>{text}</button>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  // make statistics list with only text and value
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const setGoodClick = () => {setGood(good + 1)}
  const setNeutralClick = () => {setNeutral(neutral + 1)}
  const setBadClick = () => {setBad(bad + 1)}
  
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button goodClick={setGoodClick} neutralClick={setNeutralClick} badClick={setBadClick}/>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App