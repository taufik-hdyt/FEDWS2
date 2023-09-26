import React from "react";
import CardProduct from "../components/Card/Card";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/SideBar/Sidebar";

export default class Home extends React.Component {
  render() {
    const dataDummy = [
      {
        name: "Produk 1",
        image:
          "https://micro-frontend-one.vercel.app/american-heritage-chocolate-vdx5hPQhXFk-unsplash.jpg",
        category: "cake",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, debitis!',
        tag: "NEW",
      },
      {
        name: "Produk 2",
        image:
          "https://micro-frontend-one.vercel.app/charles-chen-w2ZFjDnUL3w-unsplash.jpg",
        category: "chocolate",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, debitis!',
        tag: "FEATURED",
      },
      {
        name: "Produk 3",
        image:
          "https://micro-frontend-one.vercel.app/chocolate-cake-with-chocolate-sprinkles.jpg",
        category: "bread",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, debitis!',
        tag: "FAVORITE",
      },
    ];
    return (
      <React.Fragment>
        <Grid gridTemplateColumns="350px 1fr">
          <Sidebar data={dataDummy} />
          <GridItem p={8} h="100vh" bg="blue.200">
            <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={4}>
              {dataDummy.map((e) => (
                <CardProduct name={e.name} description={e.description} image={e.image} category={e.category}/>
              ))}
            </Grid>
          </GridItem>
        </Grid>
      </React.Fragment>
    );
  }
}
