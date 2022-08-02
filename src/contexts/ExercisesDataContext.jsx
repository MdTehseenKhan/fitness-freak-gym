import { createContext, useContext, useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { fetchData, exerciseOptions } from "../utils/fetchData"
const ExercisesContext = createContext()

export const ExercisesDataProvider = ({ children }) => {
  //
  // -------------------------------------------------------------------------------------------------
  // Home Page
  // -------------------------------------------------------------------------------------------------
  //
  const [loading, setLoading] = useState(false)

  const [search, setSearch] = useState("")
  const [bodyParts, setBodyParts] = useState([])

  const [bodyPart, setBodyPart] = useState("all")
  const [exercises, setExercises] = useState([])
  const [searchedExercises, setSearchedExercises] = useState([])

  const [currentPage, setCurrentPage] = useState(1)

  const exercisesPerPage = 10

  useEffect(() => {
    const getAllExercises = async () => {
      setLoading(true)

      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      )
      setExercises(exercisesData)
      setSearchedExercises(exercisesData)

      setLoading(false)
    }

    const getBodyParts = async () => {
      setLoading(true)

      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      )
      setBodyParts(["all", ...bodyPartsData])

      setLoading(false)
    }

    // getAllExercises()
    // getBodyParts()
    //
  }, [])

  useEffect(() => {
    const getExercisesByBodyParts = async () => {
      setLoading(true)

      if (bodyPart === "all") {
        setSearchedExercises(exercises)
        return
      }

      const exercisesDataByBodyParts = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
        exerciseOptions
      )
      setSearchedExercises(exercisesDataByBodyParts)

      setLoading(false)
    }
    // getExercisesByBodyParts()
  }, [bodyPart])

  //
  // -------------------------------------------------------------------------------------------------
  // ExerciseDetail Page
  // -------------------------------------------------------------------------------------------------
  //
  const { id } = useParams()
  const [exerciseDetail, setExerciseDetail] = useState({})

  useEffect(() => {
    const getExercisesDetail = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com"
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com"

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/${id}`
      )

      setExerciseDetail(exerciseDetailData)
    }
    // getExercisesDetail()
  }, [id])

  return (
    <ExercisesContext.Provider
      value={{
        loading,
        setLoading,
        //
        search,
        setSearch,
        //
        bodyParts,
        setBodyParts,
        //
        bodyPart,
        setBodyPart,
        //
        exercises,
        //
        searchedExercises,
        setSearchedExercises,
        //
        currentPage,
        setCurrentPage,
        //
        exercisesPerPage,
        //
        exerciseDetail,
      }}
    >
      {children}
    </ExercisesContext.Provider>
  )
}
export function useExercisesData() {
  return useContext(ExercisesContext)
}
