import { useState, useEffect } from "react"

const ThemeMode = () => {
  const [theme, setTheme] = useState("light")
  const themeOpposite = theme === "dark" ? "light" : "dark"

  useEffect(() => {
    const root = window.document.documentElement.classList

    root.add(theme)
    root.remove(themeOpposite)

    console.log(root)
  }, [theme])

  return (
    <div className="p-2 text-2xl">
      <button
        onClick={() =>
          setTheme((theme) => (theme === "dark" ? "light" : "dark"))
        }
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
    </div>
  )
}

export default ThemeMode
