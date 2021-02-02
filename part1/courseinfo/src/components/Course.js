import React from 'react'

const Header = ({ name }) => {
    return(
        <div><h1>{name}</h1></div>
    )
}

const Content = ({ parts }) => {
    return(
        <div>
            {parts.map(each => (
                <Part key={each.id} each={each} />
            ))}
        </div>
    )
}

// name exercises id
const Part = ({ each }) => {
    return(
        <p>{each.name} {each.exercises}</p>
    )
}

const Total = ({ parts }) => {
    const number = parts.reduce((total, {exercises}) => total + exercises, 0)
    // console.log(number);
    return(
        <div>
            <strong>
                Total of {number} exercises
            </strong>
        </div>
    )
}


// App
//   Course
//     Header
//     Content
//       Part
//       Part
//       ...
// ...

const EachCourse = ({ course }) => {
    const name = course.name
    const parts = course.parts

    return(
        <div>
            <Header name={name} />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
    )
}

const Course = ({ courses }) => {
    return(
        <div> 
            {courses.map(each => (
                <EachCourse key={each.id} course={each} />
            ))}
        </div>
    )
}

export default Course