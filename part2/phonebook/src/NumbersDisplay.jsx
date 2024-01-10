



const DeleteButton = ({handler, id, name}) => {
    return (
        <button onClick={() => handler(id, name)}>delete</button>
    )
}

const NumbersDisplay = ({allPeople, peopleToShow, deleteHandler}) => {
    return (
        <div>
            {allPeople.length === 0 ? <p>...</p> : 
            <div>
                <h2>Numbers</h2>
                {peopleToShow.map((person) => 
                <div key={person.id}>{person.name} {person.number} <DeleteButton handler={deleteHandler} id={person.id} name={person.name}/></div>)}
            </div>}
        </div>
    )
}

export default NumbersDisplay