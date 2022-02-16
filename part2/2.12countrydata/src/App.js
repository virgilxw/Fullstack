import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from "./components/Search"
import Results from "./components/Results"

const App = () => {

  const [query, changeQuery] = useState("")
  const [rawData, changeRaw] = useState([])
  const [filteredData, changeFilter] = useState([])

  const queryChangeHandler = (queryEle) => {
    changeQuery(queryEle.target.value)
    changeFilter(rawData.filter(e => e.name.common.toLowerCase().includes(queryEle.target.value.toLowerCase())))
  }
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        changeRaw(response.data)
      })
  }, [])

  return (
    <div>
      <Search query={query} queryChangeHandler={queryChangeHandler} />
      <Results filteredData={filteredData} />
    </div>
  );
}

export default App;
