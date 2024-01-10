

const SearchBar = ({country, changeHandler}) => {
    return (
        <form> 
            <div>find countries <input value={country} onChange={changeHandler}></input></div> 
        </form>
        
    )
}

export default SearchBar