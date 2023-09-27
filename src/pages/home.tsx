import React from "react";
import CardProduct from "../components/Card/Card";
import {  Grid, GridItem, Skeleton } from "@chakra-ui/react";
import Sidebar from "../components/SideBar/Sidebar";
import axios from "axios";

// https://api.npoint.io/624c99ed50dcd45fb160

interface IData{
id: number,
name: string,
badge: string,
imageUrl: string,
categories: [],
description: string
}

export default class Home extends React.Component {
  state = {
    data : [],
  }

  async getData(){
      try {
        const response = await axios.get('https://api.npoint.io/624c99ed50dcd45fb160')
          this.setState({
            data: response.data,
          })
      } catch (error) {
        console.log(error)
      }
  }

  componentDidMount(): void {
    this.getData()
  }

  render() {

    const {data} = this.state

    // const dataDummy = [
    //   {
    //     name: "Donout",
    //     image:
    //       "https://micro-frontend-one.vercel.app/american-heritage-chocolate-vdx5hPQhXFk-unsplash.jpg",
    //     category: "cake",
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, debitis!',
    //     tag: "NEW",
    //   },
    //   {
    //     name: "Roti",
    //     image:
    //       "https://micro-frontend-one.vercel.app/charles-chen-w2ZFjDnUL3w-unsplash.jpg",
    //     category: "chocolate",
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, debitis!',
    //     tag: "FEATURED",
    //   },
    //   {
    //     name: "Kue",
    //     image:
    //       "https://micro-frontend-one.vercel.app/chocolate-cake-with-chocolate-sprinkles.jpg",
    //     category: "bread",
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, debitis!',
    //     tag: "FAVORITE",
    //   },
    //   {
    //     name: "Chocolate",
    //     image:
    //       "https://micro-frontend-one.vercel.app/chocolate-cake-with-chocolate-sprinkles.jpg",
    //     category: "chocolate",
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, debitis!',
    //     tag: "",
    //   },
    //   {
    //     name: "kick",
    //     image:
    //       "https://micro-frontend-one.vercel.app/chocolate-cake-with-chocolate-sprinkles.jpg",
    //     category: "brade",
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, debitis!',
    //     tag: "",
    //   },
    // ];
    return (
        <Grid gridTemplateColumns="350px 1fr">
          <Sidebar data={data} />
          <GridItem p={8} bg="blue.200">
              <Skeleton isLoaded>
            <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={4} rowGap={6}>
              {this.state.data?.map((e: IData,idx: number) => (
                <CardProduct badge={e.badge} key={idx} name={e.name} description={e.description} image={e.imageUrl}  />
              ))}
            </Grid>
          </Skeleton>
          </GridItem>
        </Grid>
    );
  }
}
