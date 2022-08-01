import { createContext, useContext, useState, useEffect } from "react"

import { fetchData, exerciseOptions } from "../utils/fetchData"
const ExercisesContext = createContext()

export const ExercisesDataProvider = ({ children }) => {
  const [search, setSearch] = useState("")
  const [bodyParts, setBodyParts] = useState([])

  const [bodyPart, setBodyPart] = useState("all")
  const [exercises, setExercises] = useState([])
  const [searchedExercises, setSearchedExercises] = useState([])

  const [currentPage, setCurrentPage] = useState(1)

  const exercisesPerPage = 10

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

  useEffect(() => {
    const getExercisesByBodyParts = async () => {
      if (bodyPart === "all") {
        setSearchedExercises(exercises)
        return
      }

      const exercisesDataByBodyParts = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
        exerciseOptions
      )
      setSearchedExercises(exercisesDataByBodyParts)
    }
    // getExercisesByBodyParts()
  }, [bodyPart])

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
        currentPage,
        setCurrentPage,
        exercisesPerPage,
      }}
    >
      {children}
    </ExercisesContext.Provider>
  )
}
export function useExercisesData() {
  return useContext(ExercisesContext)
}
