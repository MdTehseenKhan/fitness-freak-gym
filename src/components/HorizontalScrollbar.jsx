import { useContext } from "react"

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu"

import BodyPartComp from "./BodyPartComp"
import ExerciseCard from "./ExerciseCard"

import LeftArrowIcon from "../assets/icons/left-arrow.png"
import RightArrowIcon from "../assets/icons/right-arrow.png"

const HorizontalScrollbar = ({ data, isBodyParts }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <div key={item.id || item} title={item.id || item} className="m-10">
          {isBodyParts ? <BodyPartComp item={item} /> : <ExerciseCard exercise={item} />}
        </div>
      ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar

function LeftArrow() {
  const { scrollPrev } = useContext(VisibilityContext)

  return (
    <div onClick={() => scrollPrev()} className="left-arrow left-[calc(50%-50px)]">
      <img src={LeftArrowIcon} alt="left-arrow" />
    </div>
  )
}

function RightArrow() {
  const { scrollNext } = useContext(VisibilityContext)

  return (
    <div onClick={() => scrollNext()} className="right-arrow right-[calc(50%-50px)]">
      <img src={RightArrowIcon} alt="right-arrow" />
    </div>
  )
}
