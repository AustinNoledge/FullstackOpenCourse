import React, { useEffect, useState } from 'react'
import Search from './components/Search.js'
// import Results from './components/Results.js'
import axios from 'axios'
import Results from './components/Results.js'

const App = () => {
  // 定义全局变量
  const [ keyword, setKeyword ] = useState("")
  const [ countries, setCountries ] = useState([])
  const [ weather, setWeather ] = useState([])

  const changeKeyword = (event) => {
      setKeyword(event.target.value)
  }

  // 通过API获取所有数据
  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        console.log("start fetching countries' data")
        setCountries(response.data)
        console.log("finish fetching countries' data")
      })
  }, [])

  return(
    <div>
      <Search keyword={keyword} changeKeyword={changeKeyword} />
      <Results countries={countries} keyword={keyword} setKeyword={setKeyword} />
    </div>
  )
}

export default App