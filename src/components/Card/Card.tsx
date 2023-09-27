import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'


interface IProps{
  name?: string
  description?: string
  categories?: []
  image?: string
  badge?: string
}
export default class CardProduct extends React.Component<IProps> {
render(){

  const {name,badge,description,image} = this.props
  const customStyleParagraf: React.CSSProperties = {
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  };
  const customStyleTitle: React.CSSProperties ={
    display: "-webkit-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  }


  return(
    <Box rounded='lg' w='250px' bg='white' pos='relative'>
      <Image roundedTop='lg' w='full' h='180px' src={image} />
      <Box p={4}>
      <Heading style={customStyleTitle} fontSize='xl'>{name}</Heading>
      <Text
      style={customStyleParagraf}
      fontSize='sm' textAlign='justify'>{description}</Text>
      <Box mt={2} w='fit-content' border='1px solid gray' px={2} rounded='lg'>coklate</Box>
      </Box>
      <Text pos='absolute' top={-3} left='20' px={2} rounded='lg' color='white'
      bg={badge === 'NEW' ? 'green': 'blue.100'}
      >{badge}</Text>
    </Box>
  )
}
}