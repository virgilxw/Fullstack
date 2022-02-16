import DetailButton from "./DetailButton";

const Results = ({ filteredData }) => {
  
  const numFilter = filteredData.length
  if (numFilter === 0) {
    return (
      <ul>
      </ul>)
  } else if (numFilter < 11) {
    return (
      <ul>
        {filteredData.map(e => (
          <li key={e.name.common}>
            {e.name.common} <DetailButton countryData={e}/>
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