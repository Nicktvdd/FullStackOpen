const Header = (props) => {
  console.log(props)
  return(
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return(
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  const exerciseTotal = props.one + props.two+props.three;
  return(
    <div>
      <p>Number of exercises {exerciseTotal}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14}

  return (
    <div>
      <Header name={course} />
      <Content name={part1.name} exercises={part1.exercises} />
      <Content name={part2.name} exercises={part2.exercises} />
      <Content name={part3.name} exercises={part3.exercises} />
      <Total one={part1.exercises} two={part2.exercises} three={part3.exercises}/>
    </div>
  )
}

export default App