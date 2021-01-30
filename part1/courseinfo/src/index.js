import React from 'react'
import ReactDOM from 'react-dom'

// 课程名称
const Header = (props) => {
  return (
    <h1>This is {props.name}</h1>
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
    {
      name: "State of a component",
      amount: 14,
    },
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

ReactDOM.render(<App />, document.getElementById('root'))