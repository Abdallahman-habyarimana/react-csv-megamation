
import { Box, HStack, List, ListItem, Text } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom'
import useWorkOrder from '../hooks/useWorkOrder'

const WorkOrderDetails = () => {
    const { id } = useParams()
  
    return (
    <Box>
        <List>
            <ListItem>
                <HStack>
                    <Text>Numero</Text>
                    <Text>101010</Text>
                </HStack>
            </ListItem>
            <ListItem>
                <HStack>
                    <Text>Numero</Text>
                    <Text>101010</Text>
                </HStack>
            </ListItem>
            <ListItem>
                <HStack>
                    <Text>Numero</Text>
                    <Text>101010</Text>
                </HStack>
            </ListItem>
            <ListItem>
                <HStack>
                    <Text>Numero</Text>
                    <Text>101010</Text>
                </HStack>
            </ListItem>
            <ListItem>
                <HStack>
                    <Text>Numero</Text>
                    <Text>101010</Text>
                </HStack>
            </ListItem>
            <ListItem>
                <HStack>
                    <Text>Numero</Text>
                    <Text>101010</Text>
                </HStack>
            </ListItem>
            <ListItem>
                <HStack>
                    <Text>Numero</Text>
                    <Text>101010</Text>
                </HStack>
            </ListItem>
            <ListItem>
                <HStack>
                    <Text>Numero</Text>
                    <Text>101010</Text>
                </HStack>
            </ListItem>
            <ListItem>
                <HStack>
                    <Text>Numero</Text>
                    <Text>101010</Text>
                </HStack>
            </ListItem>
            <ListItem>
                <HStack>
                    <Text>Numero</Text>
                    <Text>101010</Text>
                </HStack>
            </ListItem>
            <ListItem>
                <HStack>
                    <Text>Numero</Text>
                    <Text>101010</Text>
                </HStack>
            </ListItem>
            <ListItem>
                <HStack>
                    <Text>Numero</Text>
                    <Text>101010</Text>
                </HStack>
            </ListItem>
            <ListItem>
                <HStack>
                    <Text>Numero</Text>
                    <Text>101010</Text>
                </HStack>
            </ListItem>
            <ListItem>
                <HStack>
                    <Text>Numero</Text>
                    <Text>101010</Text>
                </HStack>
            </ListItem>
            <ListItem>
                <HStack>
                    <Text>Numero</Text>
                    <Text>101010</Text>
                </HStack>
            </ListItem>
            <ListItem>
                <HStack>
                    <Text>Numero</Text>
                    <Text>101010</Text>
                </HStack>
            </ListItem>
            
        </List>
    </Box>
  )
}

export default WorkOrderDetails