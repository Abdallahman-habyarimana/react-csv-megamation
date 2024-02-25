import axios from 'axios'
import { useEffect, useState } from 'react'

const App = () => {
  const [demandes, setDemandes] = useState([])
  useEffect(() => {
    const response = axios.get('http://localhost:8000/demandes').then((res) => console.log(res))
    console.log(response);
  }, [])
  return (
    <div>
      hello world
    </div>
  )
}

export default App