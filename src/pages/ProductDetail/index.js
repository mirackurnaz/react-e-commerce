import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "../../api";
import { useBasket, } from "../../context/BasketContext";
import ImageGallery from "react-image-gallery";

import { Grid,GridItem,Box, Text,Link,Spinner,Center,Image,Flex, Button,Card,Stack,CardBody,Heading,CardFooter } from "@chakra-ui/react";

	

function ProductDetail() {
	const { product_id } = useParams();
	const {addToBasket,items}=useBasket(); //sepete ürün ekleme

	
     
	const { isLoading, error, data } = useQuery(["product", product_id], () => {
		return fetchProduct(product_id);
	});
	if (isLoading) {
		return (
			<Flex justifyContent={"center"} alignItems={"center"} height={"100vh"}>
				<Spinner
					thickness="4px"
					speed="0,65s"
					emptyColor="gray.200"
					size={"xl"}
					color={"red.500"}
				/>
			</Flex>
		);
	}

	if (error) {
		return <div>Error: {error}</div>;
	}
	
	
    const findBasketItem = items.find((item) => item._id === product_id); //o anda ürün sepettemi değilmi analayalım
	return (
	<div>
		<Grid templateColumns='repeat(5, 1fr)' gap={0}>
			<GridItem w='770px' h='2' bg='tomato' />
			<GridItem w='400px' h='2' bg='green' />
			<GridItem w='250px' h='2' bg='papayawhip' />
			<GridItem w='200px' h='2' bg='pink' />
			<GridItem w='100px' h='2' bg='purple' />
			
			</Grid>
			<Grid templateColumns='repeat(2, 1fr)' gap={0}>
			<GridItem w={"850px"} height={"700px"} rowSpan={2} colSpan={1} border='1px'mt={"15px"} ml={"20px"} borderColor='gray.200' >
		<Center>
			
			<Card
			direction={{ base: 'column', sm: 'row' }}
			overflow='hidden'
			variant='outline'
			w={"1200px"}
			h={"500px"}
			mt={"80px"}
			>
				
				
			
			<Image

			ml={"150px"}
					src={data.photos}
					
				/>


				
			
			</Card></Center>
			</GridItem>
			<GridItem bg={"#F0F0F0"} w={"800px"} height={"700px"} rowSpan={2} colSpan={1} border='1px'mt={"15px"}  borderColor='gray.200' >
			
			<Stack >
    <Box  ml={"20px"}>
      <Heading textAlign={"start"}	 mt={"120px"} as={"h1"} fontSize={"22"}>{data.title}</Heading>
	  <Box textAlign={"start"} fontSize={20} >
			<Link  color="tomato">{data.marka} </Link></Box>
			<Box fontSize={32} mt={"20px"} textAlign={"start"}>{data.price} TL </Box>
			<Text textAlign={"start"}  mt="20px">{data.descrition}</Text>
			
			</Box>
			<Box ml={"20px"} textAlign={"start"} mt={"20px"}>
			<Button
			
			colorScheme={findBasketItem ? "red":"tomato"} 
			color={findBasketItem ? "white":"white"}
			onClick={()=>addToBasket(data,findBasketItem)}> 

			{
				findBasketItem ?'Remove from basket':'Add to Basket' //eklenmiş ise butonda "Remove from basket" bu yazsın,eklenmemiş ise "Buy Now " yazsın	
			} </Button>
			   </Box>
  </Stack>

  </GridItem>
  </Grid>
		</div>
	);
}

export default ProductDetail;
