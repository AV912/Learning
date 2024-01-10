

const PhonebookForm = ({handleSubmit, name, nameHandler, number, numberHandler}) => {
    return (
        <div>
            <h2>add a new</h2>
            <form onSubmit={handleSubmit}>
                <div> name: <input value={name} onChange={nameHandler}/></div>
                <div> number: <input value={number} onChange={numberHandler}></input></div>
                <div> 
                <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default PhonebookForm