import React from 'react'
import { Badge, Box, Divider, Flex } from '@chakra-ui/react'
import miImagen from '../../public/shopping-cart.png';




const CartWidget = () => {

    return (
        <Flex>
            <Box>
                <img src={miImagen} alt="" style={{ maxWidth: '30px', maxHeight: '30px' }} />
            </Box>
            <Divider />
            <Box>
                <Badge>7</Badge>
            </Box>
        </Flex>
    )
}

export default CartWidget