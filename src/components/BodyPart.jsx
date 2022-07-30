import Icon from "../assets/icons/gym.png"

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <button
      className="flex flex-col items-center justify-center transition hover:scale-105 bg-gray-100 rounded-b-lg w-[270px] h-[280px] gap-y-12 shadow-lg border-solid border-indigo-700 dark:border-indigo-500 dark:bg-gray-700"
      style={{
        borderTopWidth: bodyPart === item ? "5px" : "",
      }}
      onClick={() => {
        setBodyPart(item)
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" })
      }}
    >
      <img src={Icon} alt="dumbell" className="w-10 h-10" />
      <span className="text-xl capitalize font-semibold text-slate-900 dark:text-white">
        {item}
      </span>
    </button>
  )
}

export default BodyPart
