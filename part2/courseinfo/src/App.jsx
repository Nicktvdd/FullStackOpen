import React from 'react'

const Header = ({ course }) => {
  return (
    <h1>{course}</h1>)
}

const Total = ({ course }) => {
  const exercises = course.parts.map((part) => part.exercises);
  const totalExercises = exercises.reduce((acc, curr) => acc + curr, 0);

  return (
    <p>Number of exercises {totalExercises}</p>)
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>)
}

const Content = ({ parts }) => {
  return (<>
    <Part
      part={parts[0]}
    />
    <Part
      part={parts[1]}
    />
    <Part
      part={parts[2]}
    />
  </>)
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total course={course} />
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }
  return <Course course={course} />
}

export default App