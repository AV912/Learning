

const SearchFilter = ({value, handleSearch}) => {
    return (
        <form> 
            <div> filter shown with <input value={value} onChange={handleSearch} /> </div>
        </form>
    )
}

export default SearchFilter