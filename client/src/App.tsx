import { Routes, Route} from 'react-router-dom'
import { Box, Spinner } from '@chakra-ui/react'
import Home from './pages/Home'
import Login from './pages/Login'
import Work from './pages/Work'
import Navbar from './components/Navbar'
import useWorkOrder from './hooks/useWorkOrder'
import WorkOrderDetails from './pages/WorkOrderDetails'
import AddNewWork from './components/AddNewWork'


const App = () => {
  const { isLoading } = useWorkOrder()
  return (

    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="demandes/:id" element={<WorkOrderDetails />} />
      <Route path="nouveau" element={<AddNewWork />} />
    </Routes>
    
  )
}

export default App