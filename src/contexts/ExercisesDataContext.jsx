import { createContext, useContext, useState, useEffect } from "react"

import { fetchData, exerciseOptions } from "../utils/fetchData"
const ExercisesContext = createContext()

export const ExercisesDataProvider = ({ children }) => {
  const [search, setSearch] = useState("")
  const [bodyParts, setBodyParts] = useState([])

  const [bodyPart, setBodyPart] = useState("all")
  const [exercises, setExercises] = useState([])
  const [searchedExercises, setSearchedExercises] = useState([])

  useEffect(() => {
    const getAllExercises = async () => {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      )
      setExercises(exercisesData)
      setSearchedExercises(exercisesData)
    }

    const getBodyParts = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      )
      setBodyParts(["all", ...bodyPartsData])
    }

    // getAllExercises()
    // getBodyParts()
    //
  }, [])

  return (
    <ExercisesContext.Provider
      value={{
        search,
        setSearch,
        bodyParts,
        setBodyParts,
        bodyPart,
        setBodyPart,
        exercises,
        searchedExercises,
        setSearchedExercises,
      }}
    >
      {children}
    </ExercisesContext.Provider>
  )
}
export function useExercisesData() {
  return useContext(ExercisesContext)
}
