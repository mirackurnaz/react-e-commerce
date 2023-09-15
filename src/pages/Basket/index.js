import React, { useState, useRef } from "react";
import { postOrder } from "../../api";
import { useBasket } from '../../context/BasketContext'
import { Alert,Flex,AlertIcon,Text,Image,Button,Box,Card,Stack,CardBody,Heading,CardFooter,Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	FormControl,
	FormLabel,
	Input,
	Textarea,
	InputGroup,
	InputLeftAddon,
	Select,Grid
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons'
import {Link} from "react-router-dom"


function Basket() {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const initialRef =useRef(null)

    const {items,removeFromBasket,emptyBasket}=useBasket();
    const total = items.reduce((acc, obj) => acc + obj.price,0);
    console.log(items); 

    const [address, setAddress] = useState("");
    

	const handleSubmitForm = async () => {
		const itemIds = items.map((item) => item._id);
    console.log(itemIds);
		const input = {
			address,
			items: JSON.stringify(itemIds),
		};

    const response= await postOrder(input) //backende ekle siparişi
    console.log(response);
    
    emptyBasket(); //sepeti boşalt
    onClose(); //form penceresinide kapat

	};


  return (
    <Box p={5}>
        {items.length<1 && (
        <Alert  justifyContent='center' status='warning'>
            <AlertIcon />There are no items in your cart</Alert>
            )} 

            { items.length>0 && <>
            
                <ul>
						{items.map((item) => (
							<li key={item._id} style={{ marginBottom: 50 }}>
                            

								
                                    
								<Card
								direction={{ base: 'column', sm: 'row' }}
								overflow='hidden'
								variant='outline'
								
								>

								

								<Link to={`/product/${item._id}`}>
								<Image
									objectFit='cover'
									maxW={{ base: '100%', sm: '300px' }}
									src={item.photos[0]}
									alt={"basket item"}
									loading={"lazy"}
									
								/>
								 
								</Link>
								
								<Button
								ml="100px"
								colorScheme="red"
								w={"10px"}
								h={"30px"}
								onClick={()=>removeFromBasket(item._id)} >

								<DeleteIcon color="white" boxSize={4} />
								</Button>
								
								<Stack>
								<Link to={`/product/${item._id}`}>
									<CardBody>
									<Heading ml="70px" size='md'>{item.title}</Heading>
									</CardBody>
									</Link>
								
									
									<CardFooter>
									
									
									<Flex ml={"440px"} >
									<Text  color="red" opacity="0.5"  fontSize={20}  mt="5px" style={{textDecoration: 'line-through' } }>
										{item.oldprice} TL
										</Text>
									<Text color="teal" fontSize={28} ml="20px">
										{item.price} TL
								
										
										</Text>
										</Flex>

									</CardFooter>
								</Stack>
								</Card>
								
								<hr/>
                                
							</li>
						))}
					</ul>
					<Box mt={10}>
							<Button
									size='md'
										ml="440px"
									colorScheme={"orange"}
									onClick={onOpen}
									>Buy Now : {total} TL
										</Button>
					</Box>

          <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
						<ModalOverlay />
						<ModalContent>
							<ModalHeader>Order</ModalHeader>
							<ModalCloseButton />
							<ModalBody pb={6}>

              <FormControl >
								<FormLabel >E-mail</FormLabel>
								<Input 
                  ref={initialRef} //butona tıklanınca inputa focus ol
                  variant={"filled"}
									type="email"
                  
                 
                 
								/>
							</FormControl>

              <Grid templateColumns='repeat(2, 1fr)' gap={6} mt={4} >
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input variant={"filled"}  placeholder='Name'/>
            </FormControl>

            <FormControl>
              <FormLabel>Surname</FormLabel>
              <Input variant={"filled"} placeholder='Surname'  />
            </FormControl>
           </Grid>


            <Grid templateColumns='repeat(2, 1fr)' gap={6} mt={4}>
		        	<FormControl>
							<FormLabel >Phone</FormLabel>
							<InputGroup>
							<InputLeftAddon  children='+90' />
							<Input 
              variant={"filled"}
							type='number' 
							placeholder='Enter phone number'
             
							/>
							
							</InputGroup>
							</FormControl>

              <FormControl>
                <FormLabel htmlFor="city">City</FormLabel>
                <Select variant={"filled"} placeholder='Select city'>
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

                  </Grid>
								<FormControl mt={4}>
									<FormLabel>Address</FormLabel>
									<Textarea
										
										placeholder="Address"
										value={address}
										onChange={(e) => setAddress(e.target.value)}
                    variant={"filled"}
									/>
								</FormControl>
							</ModalBody>

							<ModalFooter>
								<Button colorScheme="orange" mr={3} onClick={handleSubmitForm} >
                To Order
								</Button>
								<Button onClick={onClose}>Cancel</Button>
							</ModalFooter>
						</ModalContent>
					</Modal>
            
            </>

            }
    </Box>                                                             
  )
}

export default Basket