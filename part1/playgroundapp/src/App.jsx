import {useState} from 'react'

const Hello = ({name, age}) => {
  //const {name, age} = props
  const bornYear = () => new Date().getFullYear() - age  
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you are probably born in {bornYear()}</p>
    </div>
  )
}

const Display = (props) => {
  return( 
  <>
    {props.counter}
  </>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0)
  const name = 'Peter'
  const age = 10
  console.log('rendering...', counter)
  const setToZero = () => setCounter(0)
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <p><Display counter={counter}/></p>
      
      <Button onClick={setToZero} text='Set to Zero'/>
      <Button onClick={increaseByOne} text='Increase Value by 1'/>
      <Button onClick={decreaseByOne} text='Decrease Value by 1'/>
    </div>
  )
}

export default App