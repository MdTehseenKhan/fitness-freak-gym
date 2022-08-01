import { useExercisesData } from "../contexts/ExercisesDataContext"
import ExerciseCard from "./ExerciseCard"
import Pagination from "./Pagination"

const Exercises = () => {
  const { searchedExercises } = useExercisesData()

  return (
    <div className="mt-12 p-5 lg:mt-28">
      <h3 className="text-3xl mb-12 font-semibold dark:text-gray-100">
        Showing Results
      </h3>

      <div className="flex flex-row flex-wrap justify-center gap-12 lg:gap-28">
        {searchedExercises &&
          searchedExercises?.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
      </div>

      <div className="pagination mt-24 flex items-center">
        {
          // searchedExercises.length > 9 &&
          <Pagination />
        }
      </div>
    </div>
  )
}

export default Exercises
