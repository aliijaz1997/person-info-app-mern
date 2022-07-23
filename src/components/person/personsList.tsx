import { Box, TextField } from "@mui/material"
import React from "react"
import { Person } from "../types/person"
import { PersonCard } from "./personCard"

interface Props {
  persons: Person[]
}
export function PersonsList({ persons }: Props) {
  const [search, setSearch] = React.useState("")

  const handleOnchangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  const filteredPersons = React.useMemo(() => {
    if (!search.length) return persons
    return persons.filter(
      p =>
        p.firstName.toLowerCase().includes(search.toLowerCase()) ||
        p.lastName.toLowerCase().includes(search.toLowerCase()) ||
        p.profession.toLowerCase().includes(search.toLowerCase())
    )
  }, [search, persons])
  return (
    <Box sx={{ p: "5px" }}>
      <TextField
        label="Search for the Persons"
        variant="outlined"
        value={search}
        fullWidth
        sx={{ mt: "15px" }}
        onChange={handleOnchangeInput}
      />
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          pt: "10px"
        }}
      >
        {filteredPersons.length
          ? filteredPersons.map(person => {
              return <PersonCard key={person._id} person={person} />
            })
          : "There is No data available"}
      </Box>
    </Box>
  )
}
