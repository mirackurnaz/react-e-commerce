import React from "react";

import { fetchProductList } from "../../api";
import { useInfiniteQuery } from "@tanstack/react-query";
import 	Carousel from "./carousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Forms from "./form"
import { Grid,Image, Box,GridItem, Flex,Spinner, Button } from "@chakra-ui/react";

import Card from "../../components/Card";
function Products() {

	


	const {
		data,
		error,
		fetchNextPage,
		isFetching,
		isFetchingNextPage,
		status,
		hasNextPage,
	} = useInfiniteQuery(["products"], fetchProductList, {
		getNextPageParam: (lastGroup, allGroups) => {
			const morePagesExist = lastGroup.length === 12;

			if (!morePagesExist) {
				return;
			}
			return allGroups.length + 1;
		},
	});

	
	if (status === "loading") {
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

	if (status === "error") return "An error has occurred: " + error.message;

	console.log(data.pages);

	
	return (
		<div>
			<Grid templateColumns='repeat(5, 1fr)' gap={0}>
			<GridItem w='770px' h='2' bg='tomato' />
			<GridItem w='400px' h='2' bg='green' />
			<GridItem w='250px' h='2' bg='papayawhip' />
			<GridItem w='200px' h='2' bg='pink' />
			<GridItem w='70px' h='2' bg='purple' />
			
			</Grid>

			<Grid
  h='200px'
  templateRows='repeat(1, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}
> 

  <GridItem w={"250px"} height={"100%"} rowSpan={2} colSpan={1} border='1px'mt={"15px"} ml={"20px"} borderColor='gray.200' >
 
<div>

	<Forms/>

</div>
  </GridItem>
  
  <GridItem mr={"55px"} colSpan={4} textAlign={"center"} mt={"15px"} border='1px' borderColor='gray.200' height={"540px"}>
  
	<div><Carousel/></div>	
  </GridItem>
  
  <GridItem mr={"55px"} colSpan={4}  >
  <Grid templateColumns="repeat(4, 1fr)" gap={6}>
				

				{data.pages.map((group, i) => (
					<React.Fragment key={i}>
						{group.map((item) => (
							<Box w="100%" key={item._id}>
								<Card item={item} />
							</Box>
						))}
					</React.Fragment>
				))}
			</Grid>
			<Flex mt="10" justifyContent="center">
				<Button
					isLoading={isFetchingNextPage}
					onClick={() => {
						fetchNextPage();
					}}
					disabled={!hasNextPage || isFetchingNextPage}
				>
					{isFetchingNextPage
						? "Loading more..."
						: hasNextPage
						? "Load More"
						: "Nothing more to load"}
				</Button>
				<div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
			</Flex>
  </GridItem>
</Grid>
		</div>
	);
}

export default Products;
