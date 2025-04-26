
const Hello = (props) => {
  return (
    <div>
      <p>Greetings {props.name}, you are now {props.age} years old.</p>
    </div>
  )
}

const Footer = (props) => {
  return (
    <div>
      Greeting app created by <a href={props.name}>Jimmir Miranda</a>
    </div>
  )
}

const App = () => {
  const github = 'https://github.com/Sugarylatics1'
  const nowDate = new Date()
  const a = 10
  const b = 20
  const sum = a + b
  const name = 'Jimmir'
  const age = 18
  const friends = [ {name: 'Peter', age: 4}, {name: 'John', age: 4}, {name: 'Mary', age: 4} ]

  console.log('Hello from component')
  return (
    <>
      <p>The values of a and b are {a} and {b}</p>
      <p>The sum of a and b is {sum}</p>
      <p>And the sum is {a + b}</p>
      <p>And it is now {nowDate.toString()}</p>
      <Hello name = {name} age = {age}/>
      <p>{friends[0].name} {friends[0].age}</p>
      <Footer name = {github}/>
    </>
  )
}

export default App