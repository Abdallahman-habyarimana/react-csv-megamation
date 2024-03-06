import { Box, Grid, GridItem } from '@chakra-ui/react'
import ListOfWork from '../components/ListOfWork'
import useWorkOrder from '../hooks/useWorkOrder'
import FilterWork from '../components/FilterWork'



const Home = () => {
  const { demandes } = useWorkOrder()
  return (
    <Grid templateAreas={`"nav nav"
    "sidebar main"
    "sidebar main"`} >
      <GridItem area='nav' px={4}>
        navbar
      </GridItem>
      <GridItem area='sidebar'px={4}>
        sidebar
      </GridItem>
      <GridItem area='main' px={20}>
        <FilterWork />
        <ListOfWork demandes={demandes} />
      </GridItem>
    </Grid>
  )
}

export default Home