import { useContext } from "react"

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu"

import BodyPart from "./BodyPart"
import { useExercisesData } from "../contexts/ExercisesDataContext"

import LeftArrowIcon from "../assets/icons/left-arrow.png"
import RightArrowIcon from "../assets/icons/right-arrow.png"

const HorizontalScrollbar = () => {
  const { bodyParts } = useExercisesData()

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {bodyParts.map((item) => (
        <div key={item.id || item} title={item.id || item} className="m-10">
          <BodyPart item={item} />
        </div>
      ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar

function LeftArrow() {
  const { scrollPrev } = useContext(VisibilityContext)

  return (
    <div onClick={() => scrollPrev()} className="left-arrow">
      <img src={LeftArrowIcon} alt="left-arrow" />
    </div>
  )
}

function RightArrow() {
  const { scrollNext } = useContext(VisibilityContext)

  return (
    <div onClick={() => scrollNext()} className="right-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </div>
  )
}
