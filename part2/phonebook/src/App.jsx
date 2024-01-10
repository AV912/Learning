import { useState, useEffect} from 'react'
import SearchFilter from './SearchFilter'
import PhonebookForm from './PhonebookForm'
import NumbersDisplay from './NumbersDisplay'
import PhonebookService from './services/PhonebookService'


const Notification = ({ message, type}) => {
  if (message === null) {
    return null
  }

  const errorStyle = {
    color: "red",
    background: "lightgrey",
    fontSize: "20px",
    borderStyle: "solid",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px"
  }

  const correctStyle = {
    color: "green",
    background: "lightgrey",
    fontSize: "20px",
    borderStyle: "solid",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px"
  }

  const notiStyle = type === "error" ? errorStyle : correctStyle

  return (
    <div style={notiStyle}>
      {message}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [showNotification, setShowNotification] = useState(null)
  const [notiType, setNotiType] = useState("success")

  const handleSubmitPerson = (event) => {
    event.preventDefault()
    console.log("button to submit pressed")
    //console.log(persons.some(element => element.name === newName))
    if (persons.some(element => element.name === newName)) {
      if (window.confirm(`${newName} is already added to phonebook would you like to replace the number?`)) {
        //update user with new number
        const updatee = persons.find(person => person.name === newName)
        console.log("updatee id " + updatee.id)
        const changedPerson = {...updatee, number: newNumber}
        PhonebookService.updatePerson(updatee.id, changedPerson)
                        .then( 
                          setPersons(persons.map(person => person.id === updatee.id ? changedPerson : person))
                        )
                        .then(result => {
                          setNotiType("success")
                          setShowNotification("Updated " + changedPerson.name)
                          setTimeout(() => {
                            setShowNotification(null)
                          }, 5000)
                          
                        })
                        .catch(error => {
                          setNotiType("error")
                          setShowNotification("Information of " + changedPerson.name + " has already been removed from the server")
                          setTimeout(()=> {
                            setShowNotification(null)
                          }, 5000)

                        })
        
      }
    } else if (persons.some(element => element.number === newNumber)) {
      window.alert("Phone number " + newNumber + " is already in the phonebook, please check your phone number again")
    }
    else {

      const newPerson = {
        name: newName,
        number: newNumber
      }
      PhonebookService.addPerson(newPerson)
                      .then(returnedPerson => {setPersons(persons.concat(returnedPerson))})
                      .then(result => {
                        setNotiType("success")
                        setShowNotification("Added " + newPerson.name)
                        setTimeout(() => {
                          setShowNotification(null)
                        }, 5000)
                        
                      })
    }
    
  }

  const handleChangeName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)

  }

  const handleChangeNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleChangeSearch = (event) => {
    console.log(event.target.value)
    setNewSearch(event.target.value)
  }

  const handleDeletePerson = (id, name) => {
    if (window.confirm("Delete " + name + "?")) {
      console.log("deleting person with id " + id)
      PhonebookService.deletePerson(id)
                    .then(setPersons(persons.filter(person => person.id != id)))
    }
    
  }

  useEffect(() => {
    console.log("effect first run")
    PhonebookService.getAllPeople().then(returnedPeople => {setPersons(returnedPeople)})
    console.log("effect should be done")
  }, [])

  const peopleToShow = newSearch === "" ? persons : persons.filter((person) => person.name.toLowerCase().includes(newSearch.toLowerCase()))
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={showNotification} type={notiType}/>
      <SearchFilter value={newSearch} handleSearch={handleChangeSearch} />
      <PhonebookForm handleSubmit={handleSubmitPerson} name={newName} nameHandler={handleChangeName} number={newNumber} numberHandler={handleChangeNumber}/>
      <NumbersDisplay allPeople={persons} peopleToShow={peopleToShow} deleteHandler={handleDeletePerson}/>
    </div>
  )
}

export default App