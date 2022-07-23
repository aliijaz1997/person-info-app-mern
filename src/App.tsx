import React from "react"
import { Route, Routes } from "react-router-dom"
import { PersonsApis } from "./components/agent/agent"
import { Layout } from "./components/layout/layout"
import { PersonsList } from "./components/person/personsList"
import { Person } from "./components/types/person"

function App() {
  const { list, create } = PersonsApis
  const [persons, setPersons] = React.useState<Person[]>([])

  React.useEffect(() => {
    list().then(res => {
      setPersons(res)
    })
  }, [])

  const handleAddPerson = () => {}
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<PersonsList persons={persons} />} />
        {/* <Route path="/create" component={CreateExercise} /> */}
      </Routes>
    </Layout>
  )
}

export default App
