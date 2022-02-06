import React from 'react'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <p>{props.parts.exercises}: {props.parts.name}</p>
  )
}

const Total = (props) => {

  let tot = 0

  props.parts.forEach(element => tot += element.exercises);

  return (
    <p>Number of exercises: {tot}</p>
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
      <Header course={course} />
      <Content parts={parts[0]} />
      <Content parts={parts[1]} />
      <Content parts={parts[2]} />
      <Total parts={parts} />
    </div>
  )
}

export default App