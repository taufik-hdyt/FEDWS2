import React from "react";
import {
  Center,
  Checkbox,
  GridItem,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { HiFilter } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown,MdOutlineKeyboardArrowUp } from "react-icons/md";


interface IData{
  name: string
  image: string
  category:  string
  description: string
  tag: string
}
interface IProps {
  data: IData[]
}
export default class Sidebar extends React.Component<IProps> {
state= {
  openCategory: false,
  openTag: false
}
  openCategory(e:boolean){
    this.setState({
    openCategory: e
    })
  }
  openTag(e:boolean){
    this.setState({
    openTag: e
    })
  }
  onSelect(e: string){
    alert(e)
  }

  render() {
    const data= this.props.data
    return (
      <GridItem p={8}>
        <HStack borderBottom="2px solid black" pb={4}>
          <Center bg="black" rounded="full" w="30px" h="30px">
            <HiFilter color="white" size={20} />
          </Center>
          <Heading as="h2" fontSize="2xl">
            Filter
          </Heading>
        </HStack>

        <InputGroup size="md" mt={4}>
          <Input borderColor="black" borderRight="none" placeholder="Search" />
          <InputRightAddon children={<BsSearch />} />
        </InputGroup>

        <HStack cursor='pointer' onClick={()=> this.openCategory(!this.state.openCategory)} align="center" justify="space-between" mt={10} pl="6">
          <Text fontSize="xl" fontWeight="semibold">
            Category
          </Text>
          {
            this.state.openCategory === true ? <MdOutlineKeyboardArrowDown size={25} /> : <MdOutlineKeyboardArrowUp size={25} />
          }
        </HStack>
        {
          this.state.openCategory === true &&
        <VStack align="start" pl={8} mt={2}>
          {
            data.map((e: IData)=> (
              <Checkbox value={e.category} onChange={()=> this.onSelect(e.category)} size="lg" colorScheme="green" >
              {e.category}
            </Checkbox>
            ))
          }
        </VStack>
        }

        <HStack cursor='pointer' align="center" justify="space-between" mt={10} pl="6" onClick={()=> this.openTag(!this.state.openTag)}

        >
          <Text fontSize="xl" fontWeight="semibold">
            Tag
          </Text>
          {
            this.state.openTag === true ? <MdOutlineKeyboardArrowDown size={25} /> : <MdOutlineKeyboardArrowUp size={25} />
          }

        </HStack>
        {
          this.state.openTag === true &&
        <VStack align="start" pl={8} mt={2}>
          {
            data?.map((e)=> (
              <Checkbox onChange={()=> this.onSelect(e.tag)} size="lg" colorScheme="green" defaultChecked>
              {e.tag}
            </Checkbox>
            ))
          }
        </VStack>
        }
      </GridItem>
    );
  }
}
