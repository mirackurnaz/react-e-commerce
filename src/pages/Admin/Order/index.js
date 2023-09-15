import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchOrders } from '../../../api'
import { Spinner,Flex, Heading } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

function Orders() {

  const {isLoading,isError,data,error}=useQuery(["admin:orders"], ()=> fetchOrders()) //bu key (["admin:orders"], ()=> fetchOrders()) çekilen data neyle yakalancak onun için
  
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

	if (isError) {
		return <div>Error: {error.message}</div>;
	}
  console.log(data);
  return (
    <div>
      <Heading color={"tomato"} mr={"110px"} fontSize={28}>Orders</Heading>
      <Table mt={"30px"} variant='simple'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>User</Th>
        <Th>Adress</Th>
        <Th isNumeric>Items</Th>
      </Tr>
      </Thead>
      <Tbody>
        {
          data.map((item)=>(
            <Tr key={item._id}>
              <Td>{item.user.email} </Td>
              <Td>{item.adress} </Td>
              <Td isNumeric>{item.items.length} </Td>
            </Tr>
          ))
        }
      </Tbody>
    </Table>
    </div>
  )
}

export default Orders