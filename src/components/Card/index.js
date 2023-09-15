import { Box, Image,Badge, Button, Flex,Text, Center } from "@chakra-ui/react";
import { StarIcon } from '@chakra-ui/icons'
import styles from "./styles.module.css"
import { Link } from "react-router-dom";

import { useBasket } from "../../context/BasketContext";
import React from "react";

function Card({ item }) {
	const property={
		rating: 4,
	}
	const {addToBasket,items}=useBasket();
	const findBasketItem = items.find((basket_item) => basket_item._id === item._id); //o anda ürün sepettemi değilmi analayalım

	return (
		<div>
			<Box h={"530px"} mt={"15px"} border='1px' borderColor='gray.200' borderWidth="1px" borderRadius="lg" overflow="visible" p="3" >
				<Link to={`/product/${item._id}`}>
					<Box>
				
					<Image src={item.photos[0]} alt="product" loading="lazy"></Image></Box>
					<Box >
					
						
						
						<Box ml={"3px"} mt={"1"} textAlign={"start"} >
						<Badge borderRadius='full' px='2' color='tomato' mr={"3px"}>{item.marka}</Badge>
							{item.title}
						</Box>
						
					
						<Flex mt={"5px"}>
						
									<Text fontWeight={"semibold"} textAlign={"start"} fontSize={18} >
										{item.price} TL
								
										
										</Text>
										</Flex>
									
										
										<Box   display='flex' mt='2' textAlign={"start"}>
								{Array(5)
									.fill('')
									.map((_, i) => (
									<StarIcon
										key={i} 
										color={i < property.rating ? 'yellow.400' : 'gray.300'}
									/>
            ))}</Box>
					</Box>
		
				</Link>
				
				<Button className={styles.productbutton}
				
				mt={"20px"}
				colorScheme={findBasketItem ? "tomato":"creamm"} 
				color={findBasketItem ? "white":"white"}
				onClick={()=>addToBasket(item,findBasketItem)}
				
				>
				{
				findBasketItem ?'Remove from basket':'Add to Basket' //eklenmiş ise butonda "Remove from basket" bu yazsın,eklenmemiş ise "Buy Now " yazsın	
			} 
			</Button>
				
			</Box>
		</div>
	);
}

export default Card;
