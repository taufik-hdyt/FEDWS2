import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'


interface IProps{
  name?: string
  description?: string
  category?: string
  image?: string
}
export default class CardProduct extends React.Component<IProps> {

render(){
  return(
    <Box rounded='lg' w='250px' bg='white' h='330px'>
      <Image roundedTop='lg' w='full' h='180px' src={this.props.image} />
      <Box p={4}>
      <Heading fontSize='xl'>{this.props.name}</Heading>
      <Text fontSize='sm' textAlign='justify'>{this.props.description}</Text>
      <Box mt={2} w='fit-content' border='1px solid gray' px={2} rounded='lg'>{this.props.category}</Box>
      </Box>
    </Box>
  )
}
}