const Detailed = ({ filteredData }) => {
  return (
    <div>
      <h1>{filteredData[0].name.common}</h1>
      <i>{filteredData[0].name.official}</i>
      <br />
      <p><b>Capital</b>: {filteredData[0].capital}<br />
        <b>Area</b>: {filteredData[0].area}</p>
      <br />
      <b>Languages:</b>
      <ul>
        {Object.keys(filteredData[0].languages).map(key => (<li key={filteredData[0].languages[key]}>{filteredData[0].languages[key]}</li>))}
      </ul>
      <br />
      <img src={filteredData[0].flags.png}></img>
    </div>)
}

const Results = ({ filteredData }) => {
  const numFilter = filteredData.length
  if (numFilter == 0) {
    return (
      <ul>
      </ul>)
  } else if (numFilter == 1) {
    return (<Detailed filteredData={filteredData} />)
  } else if (numFilter < 11) {
    return (
      <ul>
        {filteredData.map(e => (
          <li key={e.name.common}>
            {e.name.common}
          </li>))}
      </ul>)
  } else {
    return (
      <ul>
        <li>Too many matches, specify another filter</li>
      </ul>)
  }
}

export default Results