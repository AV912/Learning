const Header = ({ name }) => <h2>{name}</h2>

const Total = ({ parts }) => {
  let total = parts.reduce((sum, part) => sum + part.exercises, 0)
  console.log(total)
  return (
    <div>
      <p><b>total of {total} exercises</b></p>
    </div>
  )
}

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <div>
    {parts.map((part) => 
      (<Part key={part.id} part={part}/>)
      )}
  </div>

const Course = ({course}) => {
  console.log("in course parts ", course.parts)
  return (
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts}></Content>
      <Total parts={course.parts}/>
    </div>
  )
}

export default Course