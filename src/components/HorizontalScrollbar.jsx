import { useContext } from "react"

import BodyPart from "./BodyPart"

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu"

import LeftArrowIcon from "../assets/icons/left-arrow.png"
import RightArrowIcon from "../assets/icons/right-arrow.png"

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <div key={item.id || item} title={item.id || item} className="m-10">
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
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
