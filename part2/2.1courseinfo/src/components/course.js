import React from 'react';

const Header = ({ data }) => {
    return <h2>{data.name}</h2>
}

const Line = ({ data }) => {
    return (<li>{data.name} {data.exercises}</li>)
}

const Total = ({ data }) => {
    const sum = data.parts.reduce(
        (prevValue, currentValue) => prevValue + currentValue.exercises, 0
    )

    return (
        <p><b>Total of {sum} Exercises</b></p>
    )
}

const Cirr = ({ data }) => {

    return (
        <div>
            <Header data={data} />
            <ul>
                {data.parts.map(line =>
                    <Line key={"line_" + line.id} data={line} />
                )}
            </ul>
            <Total data={data} />
        </div>
    )
}

const Cirrlist = () => {
    const course = [
        {
            name: 'Half Stack application development',
            id: 1,
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
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]

    return course.map(cirr => <Cirr key={"cirr" + cirr.id} data={cirr} />)
}

export default Cirrlist