import React from 'react';

const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      {props.course.parts.map((part, index) => (
        <p key={index}>
          {part.name} {part.exercises}</p>
      ))}
    </div>
  );
};

const Total = (props) => {
  const exercises = props.course.parts.map((part) => part.exercises);
  const totalExercises = exercises.reduce((acc, curr) => acc + curr, 0);

  return (
    <div>
      <p>Number of exercises {totalExercises}</p>
    </div>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
