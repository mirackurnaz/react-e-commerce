import React from "react";

import { useNavigate } from "react-router-dom";

import {
	Flex,
	Box,
	Heading,
	FormControl,
	FormLabel,
	Input,
	Button,
	Alert,InputRightElement,
	Select,InputGroup,InputLeftAddon,Grid,GridItem
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { ViewIcon,ViewOffIcon } from '@chakra-ui/icons'

import validationSchema from "./validations";
import { fetchRegister } from "./../../../api";
import { useAuth } from "./../../../context/AuthContext";

function Signup() {

	const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)


	let navigate = useNavigate();
	const { login } = useAuth();

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
			passwordConfirm: "",
			phone:""
		},
		validationSchema,
		onSubmit: async (values, bag) => {
			try {
				const registerResponse = await fetchRegister({
					email: values.email,
					password: values.password,
					gender:values.gender,
					city:values.city,
				});
				login(registerResponse);
				navigate("../profile");
				// console.log(registerResponse);
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
			<Flex align={"center"} width={"full"} justifyContent={"center"}>
				<Box pt={10} width="300px">
					<Box textAlign={"center"}>
						<Heading>Sign Up</Heading>
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

							<FormControl mt={4} isRequired>
								<FormLabel>Password Confirm</FormLabel>
								<InputGroup size='md'>

								<Input
									pr='4.5rem'
									type={show ? 'text' : 'password'}
									variant="filled"
									name="passwordConfirm"
									onChange={formik.handleChange}
									onBlur={formik.onBlur}
									value={formik.values.passwordConfirm}
									isInvalid={
										formik.touched.passwordConfirm &&
										formik.errors.passwordConfirm
									}
								/>
								 <InputRightElement width='4.5rem'>
                               <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? <ViewOffIcon/> : <ViewIcon/>}
                                </Button>
                               </InputRightElement>
                                </InputGroup>
							</FormControl>

						<FormControl isRequired>
							<FormLabel >Phone</FormLabel>
							<InputGroup variant="filled">
							<InputLeftAddon children='+90' />
							<Input 
							
							name="phone"
							onChange={formik.handleChange}
							value={formik.values.phone}
							onBlur={formik.handleBlur}
							variant="filled"
							type='number' 
							placeholder='Enter phone number'
							isInvalid={formik.errors.phone && formik.touched.phone}
							
							/>
							
							</InputGroup>
							</FormControl>
						<FormControl isRequired>
							<FormLabel>Gender</FormLabel>
							<Select
							variant="filled"
							placeholder='Select gender'
							name="gender">
							<option value='1'>Male</option>
							<option value='2'>Female</option>
							
                  </Select>
                  </FormControl>
				  <FormControl isRequired>
                <FormLabel htmlFor="city">City</FormLabel>
                <Select  variant="filled" placeholder='Select city'>
                <option value="0">------</option>
                <option value="1">Adana</option>
                <option value="2">Adıyaman</option>
                <option value="3">Afyonkarahisar</option>
                <option value="4">Ağrı</option>
                <option value="5">Amasya</option>
                <option value="6">Ankara</option>
                <option value="7">Antalya</option>
                <option value="8">Artvin</option>
                <option value="9">Aydın</option>
                <option value="10">Balıkesir</option>
                <option value="11">Bilecik</option>
                <option value="12">Bingöl</option>
                <option value="13">Bitlis</option>
                <option value="14">Bolu</option>
                <option value="15">Burdur</option>
                <option value="16">Bursa</option>
                <option value="17">Çanakkale</option>
                <option value="18">Çankırı</option>
                <option value="19">Çorum</option>
                <option value="20">Denizli</option>
                <option value="21">Diyarbakır</option>
                <option value="22">Edirne</option>
                <option value="23">Elazığ</option>
                <option value="24">Erzincan</option>
                <option value="25">Erzurum</option>
                <option value="26">Eskişehir</option>
                <option value="27">Gaziantep</option>
                <option value="28">Giresun</option>
                <option value="29">Gümüşhane</option>
                <option value="30">Hakkâri</option>
                <option value="31">Hatay</option>
                <option value="32">Isparta</option>
                <option value="33">Mersin</option>
                <option value="34">İstanbul</option>
                <option value="35">İzmir</option>
                <option value="36">Kars</option>
                <option value="37">Kastamonu</option>
                <option value="38">Kayseri</option>
                <option value="39">Kırklareli</option>
                <option value="40">Kırşehir</option>
                <option value="41">Kocaeli</option>
                <option value="42">Konya</option>
                <option value="43">Kütahya</option>
                <option value="44">Malatya</option>
                <option value="45">Manisa</option>
                <option value="46">Kahramanmaraş</option>
                <option value="47">Mardin</option>
                <option value="48">Muğla</option>
                <option value="49">Muş</option>
                <option value="50">Nevşehir</option>
                <option value="51">Niğde</option>
                <option value="52">Ordu</option>
                <option value="53">Rize</option>
                <option value="54">Sakarya</option>
                <option value="55">Samsun</option>
                <option value="56">Siirt</option>
                <option value="57">Sinop</option>
                <option value="58">Sivas</option>
                <option value="59">Tekirdağ</option>
                <option value="60">Tokat</option>
                <option value="61">Trabzon</option>
                <option value="62">Tunceli</option>
                <option value="63">Şanlıurfa</option>
                <option value="64">Uşak</option>
                <option value="65">Van</option>
                <option value="66">Yozgat</option>
                <option value="67">Zonguldak</option>
                <option value="68">Aksaray</option>
                <option value="69">Bayburt</option>
                <option value="70">Karaman</option>
                <option value="71">Kırıkkale</option>
                <option value="72">Batman</option>
                <option value="73">Şırnak</option>
                <option value="74">Bartın</option>
                <option value="75">Ardahan</option>
                <option value="76">Iğdır</option>
                <option value="77">Yalova</option>
                <option value="78">Karabük</option>
                <option value="79">Kilis</option>
                <option value="80">Osmaniye</option>
                <option value="81">Düzce</option>
                    
                  </Select>
                  </FormControl>
							<Button colorScheme="tomato" mt={4} width={"full"} type={"submit"}>
								Sign Up
							</Button>
						</form>
					</Box>
				</Box>
			</Flex>
		</div>
	);
}

export default Signup;
