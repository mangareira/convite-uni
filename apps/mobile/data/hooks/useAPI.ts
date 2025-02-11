import { useCallback } from "react"

const urlBase = process.env.EXPO_PUBLIC_API_URL

export default function useAPI() {
  const httpGet = useCallback(async (path: string) => {
    const uri = path.startsWith("/")  ? path : `/${path}`
    const urlComplete = `${urlBase}/${uri}`
    const res = await fetch(urlComplete)
    return extractData(res) 
  }, [])

  const httpPost = useCallback(async <T, D>(path: string, body: D) => {
    const uri = path.startsWith("/")  ? path : `${path}`
    const urlComplete = `http://localhost:4000/${uri}`
    
    try {
      const res = await fetch(urlComplete, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body:body ? JSON.stringify(body) : null
      })
      
      return extractData<T>(res)   
    } catch (error) {
      console.log(error);
      
    }
  }, [])

  function extractData<D>(response: Response) {
    let data: D

    try {
      data = <D>(response.json())
    } catch (error) {
      if(!response.ok) {
        throw new Error(`HTTP error ${response.status}`)
      }
      return null
    }
    if(!response.ok) throw data
    return data
  }

  return { httpGet, httpPost }
} 