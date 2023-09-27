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
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

interface IData {
  name: string;
  image: string;
  categories: string;
  description: string;
  badge: string;
}
interface IProps {
  data: IData[];
}

export default class Sidebar extends React.Component<IProps> {
  state = {
    opencategories: false,
    openTag: false,
    selectedValue: [],
    checkedValue: []
  };

  opencategories(e: boolean) {
    this.setState({
      opencategories: e,
    });
  }
  openTag(e: boolean) {
    this.setState({
      openTag: e,
    });
  }

  onSelect(e: string) {
    alert(e);
    this.setState({
      selectedValue: e,
    });
  }

  onSearch() {
    alert(this.state.selectedValue);
  }

  // handleCheck(e: React.ChangeEvent<HTMLInputElement>){
  //   const {checkedValue} = this.state
  //   const {name,checked} = e.target
  //   if (checked && !checkedValue.includes(name)) {
  //     this.setState({ checkedValue: [...checkedValue, name] });
  //   } else if (!checked) {
  //     this.setState({ checkedValue: checkedValue.filter((n) => n !== name) });
  //   }
  // }

  render() {
    const data = this.props.data;

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
          <InputRightAddon
            onClick={() => this.onSearch()}
            bg="linear-gradient(to right,gray, white)"
            children={<BsSearch />}
          />
        </InputGroup>

        <HStack
          cursor="pointer"
          onClick={() => this.opencategories(!this.state.opencategories)}
          align="center"
          justify="space-between"
          mt={10}
          pl="6"
        >
          <Text fontSize="xl" fontWeight="semibold">
            categories
          </Text>
          {this.state.opencategories === true ? (
            <MdOutlineKeyboardArrowDown size={25} />
          ) : (
            <MdOutlineKeyboardArrowUp size={25} />
          )}
        </HStack>
        {this.state.opencategories === true && (
          <VStack align="start" pl={8} mt={2}>
            {data.map((e: IData) => (
              <Checkbox
                value={e.categories}
                onChange={() => this.onSelect(e.categories)}
                size="lg"
                colorScheme="green"
              >
                {e.categories}
              </Checkbox>
            ))}
          </VStack>
        )}

        <HStack
          cursor="pointer"
          align="center"
          justify="space-between"
          mt={10}
          pl="6"
          onClick={() => this.openTag(!this.state.openTag)}
        >
          <Text fontSize="xl" fontWeight="semibold">
            Tag
          </Text>
          {this.state.openTag === true ? (
            <MdOutlineKeyboardArrowDown size={25} />
          ) : (
            <MdOutlineKeyboardArrowUp size={25} />
          )}
        </HStack>
        {this.state.openTag === true && (
          <VStack align="start" pl={8} mt={2}>
            {data?.map((e) => (
              <HStack>
                {e.badge !== "" && (
                  <Checkbox
                    onChange={() => this.onSelect(e.badge)}
                    size="lg"
                    colorScheme="purple"
                  />
                )}

                <Text
                  px={2}
                  rounded="lg"
                  color="white"
                  bg={
                    e.badge === "NEW"
                      ? "green"
                      : e.badge === "FAVORITE"
                      ? "red"
                      : e.badge === "FEATURED"
                      ? "blue"
                      : ""
                  }
                >
                  {e.badge}
                </Text>
              </HStack>
            ))}
          </VStack>
        )}
      </GridItem>
    );
  }
}
