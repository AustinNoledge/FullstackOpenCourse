import React from 'react'
import ReactDOM from 'react-dom'

// 课程名称
const Header = (props) => {
  return (
    <p>This is {props.name}</p>
  )
}

// 章节以及练习数量
const Part = (props) => {
  return (
    <p>{props.name} {props.amount}</p>
  )
}

// 章节以及练习数量
const Content = (props) => {
  return (
    <div>
      <Part name={props.info[0].name} amount={props.info[0].amount}/>
      <Part name={props.info[1].name} amount={props.info[1].amount}/>
      <Part name={props.info[2].name} amount={props.info[2].amount}/>
    </div>
  )
}

// 练习总数
const Total = (props) => {
  return (
    <p>There are {props.info[0].amount+props.info[1].amount+props.info[2].amount} exercises in total</p>
  )
}

const App = () => {
  const course = "Fullstack Open Course 2020"
  const info = [
    {
      name: "Fundamentals of React",
      amount: 10,
    },
    {
      name: "Using props to pass data",
      amount: 7,
    },
    // {
    //   name: "State of a component",
    //   amount: 14,
    // },
    {
      name: "自定义一节课",
      amount: 20,
    },
  ]
  return (
    <div>
      <Header name={course} />
      <Content info={info}/>
      <Total info={info}/>
    </div>
  )
}

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     </div>
//   )
// }

ReactDOM.render(<App />, document.getElementById('root'))