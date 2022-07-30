import { useState, useEffect } from "react"

import { exerciseOptions, fetchData } from "../utils/fetchData"

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  console.log(exercises)
  return (
    <div className="mt-12 p-5 lg:mt-28">
      <h3 className="text-3xl mb-12 font-semibold">Showing Results</h3>
      <div className="flex flex-row flex-wrap justify-center gap-12 lg:gap-28">
        {exercises?.map((exercise) => (
          <p>{exercise.name}</p>
        ))}
      </div>
    </div>
  )
}

export default Exercises
