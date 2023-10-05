import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'
import miImagen from '../../public/logo_small_icon_only.png';

const Navbar = () => {
    return (
            <Flex>
                <Box p='4'>
                    {/* brand */}
                    <h1>C.F.T STORE</h1>
                </Box>
                <Spacer />
                <Box>
                    <Menu>
                        <MenuButton>
                            Categorias
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Reeles</MenuItem>
                            <MenuItem>Cañas</MenuItem>
                            <MenuItem>Señuelos</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Spacer />
                <Box p='4'>
                    {/* carrito */}
                    <CartWidget />
                </Box>
            </Flex>
    )
}

export default Navbar