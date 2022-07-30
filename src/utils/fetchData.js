export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6e9ff07901msh673a1d6e724883fp1cb764jsne8b59e78477c",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
}

export const fetchData = async (url, options) => {
  const res = await fetch(url, options)
  const data = await res.json()

  return data
}
