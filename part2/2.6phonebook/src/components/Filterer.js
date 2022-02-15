const Filterer = ({ filterString, setFilter }) => {
    return (<form>
        filter shown with <input value={filterString} onChange={(e) => setFilter(e.target.value)}></input>
    </form>)
}

export default Filterer