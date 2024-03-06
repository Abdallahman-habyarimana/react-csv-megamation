
import {Table, Thead, Th, Tr, Tbody, Td, Icon } from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { Demande } from '../services/demandeService';

interface Props {
    demandes: Demande[]
}

const ListOfWork = ({ demandes }: Props) => {
  return (
    <Table>
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>Demande</Th>
            <Th>Building</Th>
            <Th>Status</Th>
            <Th>Cree Par</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            demandes.map(demande => (
              <Tr key={demande._id}>
                <Td>
                  <Link to={`/demandes/${demande._id}`}>{demande._id}</Link>
                </Td>
                <Td>{demande.title}</Td>
                <Td>{demande.building}</Td>
                <Td>{demande.status}</Td>
                <Td>{demande.submittedBy}</Td>
                <Td>
                  <Link to={`/demandes/${demande._id}`}>
                    <Icon as={FaArrowRight}/>
                  </Link>
                </Td>
              </Tr>
            ))
          }
        </Tbody>
      </Table>
  )
}

export default ListOfWork