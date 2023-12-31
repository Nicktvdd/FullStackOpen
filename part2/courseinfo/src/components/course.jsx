import React from 'react'

const Header = ({ course }) => {
    return (
      <h1>{course}</h1>)
  }
  
  const Total = ({ course }) => {
    const exercises = course.parts.map((part) => part.exercises);
    const totalExercises = exercises.reduce((acc, curr) => acc + curr, 0);
  
    return (
      <p><b>Number of exercises {totalExercises}</b></p>)
  }
  
  const Part = ({ part }) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>)
  }
  
  const Content = ({ parts }) => {
    return (
      <div>
        {parts.map((part, index) => (
          <Part key={index} part={parts[index]} />
        ))}
      </div>
    )
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

  export default Course