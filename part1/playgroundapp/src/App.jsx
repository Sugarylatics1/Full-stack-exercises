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


const App = () => {
  const [ counter, setCounter ] = useState(0)
  const name = 'Peter'
  const age = 10
  console.log('rendering...', counter)
  const setToZero = () => setCounter(0)
  const increaseByOne = () => setCounter(counter + 1)

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      {counter}

      <p>
        <button onClick={increaseByOne}>
          plus
        </button>
        <button onClick={setToZero}>
          zero
        </button>
      </p>
      
        
      
    </div>
  )
}

export default App