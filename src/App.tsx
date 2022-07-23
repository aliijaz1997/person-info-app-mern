import React from "react"
import { PersonsApis } from "./components/agent"
import { Person } from "./components/types/person"

function App() {
  const { list, create } = PersonsApis
  const [persons, setPersons] = React.useState<Person[]>([])

  React.useEffect(() => {
    list().then(res => {
      setPersons(res)
    })
  }, [])

  return <div>Hello World</div>
}

export default App
