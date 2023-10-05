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
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header name={course} />
      <Content name={parts[0].name} exercises={parts[0].exercises} />
      <Content name={parts[1].name} exercises={parts[1].exercises} />
      <Content name={parts[2].name} exercises={parts[2].exercises} />
      <Total one={parts[0].exercises} two={parts[1].exercises} three={parts[2].exercises}/>
    </div>
  )
}

export default App