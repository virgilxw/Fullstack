const Search = ({ query, queryChangeHandler}) => {
    return (
        <form onSubmit={() => null} >
            <span>find countries </span>
            <input value={query} onChange={queryChangeHandler} />
        </form>
    )
}

export default Search