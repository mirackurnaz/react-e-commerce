import React from "react";

import { Link, useNavigate } from "react-router-dom";

import {
	Flex,
	Box,
	Heading,
	FormControl,
	FormLabel,
	Input,
	Button,InputRightElement,
	Alert,
	Grid,GridItem,InputGroup,InputLeftAddon,
} from "@chakra-ui/react";
import { useFormik } from "formik";

import validationSchema from "./validations";
import { fetchLogin } from "./../../../api";
import { useAuth } from "./../../../context/AuthContext";
import { ViewIcon,ViewOffIcon } from '@chakra-ui/icons'

function Signin() {

	
	const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)


	let navigate = useNavigate();
	const { login } = useAuth();

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
			
		},
		validationSchema,
		onSubmit: async (values, bag) => {
			try {
				const loginResponse = await fetchLogin({
					email: values.email,
					password: values.password,
					
				});
				login(loginResponse);
				navigate("../profile");
				 console.log(loginResponse);
			} catch (error) {
				bag.setErrors({ general: error.response.data.message });
			}
		},
	});
	return (
		<div>
			<Grid templateColumns='repeat(5, 1fr)' gap={0}>
			<GridItem w='770px' h='2' bg='tomato' />
			<GridItem w='400px' h='2' bg='green' />
			<GridItem w='250px' h='2' bg='papayawhip' />
			<GridItem w='200px' h='2' bg='pink' />
			<GridItem w='100px' h='2' bg='purple' />
			
			</Grid>
			<Flex mt={"100px"} align={"center"} width={"full"} justifyContent={"center"}>
				<Box pt={10} width="300px">
					<Box textAlign={"center"}>
						<Heading>Sign İn</Heading>
					</Box>
					<Box my={5}>
						{formik.errors.general && (
							<Alert status="error">{formik.errors.general}</Alert>
						)}
					</Box>
					<Box my={5} textAlign={"left"}>
						<form onSubmit={formik.handleSubmit}>
							<FormControl isRequired>
								<FormLabel >E-mail</FormLabel>
								<Input 
									name="email"
									type="email"
									onChange={formik.handleChange}
									onBlur={formik.onBlur}
									variant="filled"
									value={formik.values.email}
									isInvalid={formik.touched.email && formik.errors.email}
								/>
							</FormControl>

							<FormControl mt={4} isRequired>
								<FormLabel>Password</FormLabel>
								<InputGroup size='md'>
								<Input
									
									name="password"
									pr='4.5rem'
									type={show ? 'text' : 'password'}
									onChange={formik.handleChange}
									onBlur={formik.onBlur}
									variant="filled"
									value={formik.values.password}
									isInvalid={formik.touched.password && formik.errors.password}
								/>
								 <InputRightElement width='4.5rem'>
                               <Button h='1.75rem' size='sm' onClick={handleClick}>
							   {show ? <ViewOffIcon/> : <ViewIcon/>}
                                </Button>
                               </InputRightElement>
                                </InputGroup>
							</FormControl>
							
							<Button 
							colorScheme="tomato" mt={4} width={"full"} type={"submit"}
							>
									Login
							</Button>
						</form>
					</Box>
				</Box>
			</Flex>
			
		</div>
	);
}

export default Signin;
