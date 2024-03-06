
import { Button, Link, Flex, HStack, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'


const FilterWork = () => {
    const navigate = useNavigate()
  return (
    <Flex justifyContent='space-between'>
        <HStack>
            <Menu>
                <MenuButton as={Button} rightIcon={<BsChevronDown />}>Nature</MenuButton>
                <MenuList>
                    <MenuItem>1</MenuItem>
                    <MenuItem>2</MenuItem>
                    <MenuItem>3</MenuItem>
                </MenuList>
            </Menu>
            <Menu>
                <MenuButton as={Button} rightIcon={<BsChevronDown />}> Trie: Priorite</MenuButton>
                <MenuList>
                    <MenuItem>Priorite</MenuItem>
                    <MenuItem>Status</MenuItem>
                    <MenuItem>Date Cree</MenuItem>
                </MenuList>
            </Menu>
        </HStack>
        <Button type='button' as={Link} onClick={() => navigate('/nouveau')}>Nouveau commande</Button>
    </Flex>
  )
}

export default FilterWork