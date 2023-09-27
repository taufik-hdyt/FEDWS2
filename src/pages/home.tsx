import React from "react";
import CardProduct from "../components/Card/Card";
import {  Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/SideBar/Sidebar";

export default class Home extends React.Component {
  render() {
    const dataDummy = [
      {
        name: "Donout",
        image:
          "https://micro-frontend-one.vercel.app/american-heritage-chocolate-vdx5hPQhXFk-unsplash.jpg",
        category: "cake",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, debitis!',
        tag: "NEW",
      },
      {
        name: "Brownis",
        image:
          "https://micro-frontend-one.vercel.app/charles-chen-w2ZFjDnUL3w-unsplash.jpg",
        category: "chocolate",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, debitis!',
        tag: "FEATURED",
      },
      {
        name: "Kue",
        image:
          "https://micro-frontend-one.vercel.app/chocolate-cake-with-chocolate-sprinkles.jpg",
        category: "bread",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, debitis!',
        tag: "FAVORITE",
      },
      {
        name: "Chocolate",
        image:
          "https://micro-frontend-one.vercel.app/chocolate-cake-with-chocolate-sprinkles.jpg",
        category: "chocolate",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, debitis!',
        tag: "FAVORITE",
      },
    ];
    return (
        <Grid gridTemplateColumns="350px 1fr">
          <Sidebar data={dataDummy} />
          <GridItem p={8} bg="blue.200">
            <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={4}>
              {dataDummy.map((e) => (
                <CardProduct name={e.name} description={e.description} image={e.image} category={e.category} tag={e.tag}/>
              ))}
            </Grid>
          </GridItem>
        </Grid>
    );
  }
}
