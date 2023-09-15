import React from 'react'

import { postProduct } from '../../../api';
import { useMutation, useQueryClient} from '@tanstack/react-query'
import { Spinner,Flex, Heading,Box,FormControl,FormLabel,Input,Text,Textarea,Button, Center } from "@chakra-ui/react";
import {Formik,FieldArray} from "formik"
import validationSchema from "./validations" //validationSchema=editScheme karşılık gelir
import { message } from 'antd'; //güncelleme işlemi yapılırken yukardan mesaj versin alert gibi

function NewProduct() {

	const queryClient=useQueryClient();
	
	const newProductMutation=useMutation(postProduct,{
		onSuccess:()=>queryClient.invalidateQueries("admin:products")

	});
    const handleSubmit=async (values,bag)=>{  //values girilen değerler,bag form ile yapılabilcek foksiyonlar(örn:formu rsetlemek,validasyonları tekrar çalıştırmak gibi)
		console.log(values);
		message.loading({content:"Loading...",key:"product_update"});
		
		values.photos=JSON.stringify(values.photos)
		newProductMutation.mutate(values,{     //(record._id,{onSucses} hangi satırdaysan(record._id) ve onayladıysan onu sil({onSucses})
			onSuccess:()=>{
				console.log(" afdsf");

				message.success(
					{
						content:"Was Updated",
						key:"product_update",
						duration:3    //3 sn sonra kaybolsun
	
					}
				)
			}
		})
	}
  return (
    <div>
        <Heading mt={"20px"} color={"tomato"} mr={"50px"} fontSize={28}>New Product</Heading>

        <Formik 
        initialValues={
            {
                title:"",
                description:"",
                photos:[],
                price:"",
				
				
            }
        }
        // validationSchema={validationSchema}
        onSubmit={handleSubmit}
       
        >
           { 
           ({handleSubmit,touched,errors,handleChange,handleBlur,values,isSubmitting})=>

          {return (
						<>
							<Box>
								<Box margin={5} textAlign={"left"}>
									<form onSubmit={handleSubmit}>
										<FormControl mt={4}>
											<FormLabel>Title</FormLabel>
											<Input
												name="title"
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.title}
												disabled={isSubmitting}
												isInvalid={touched.title && errors.title}
											/>
											{touched.title && errors.title && (
												<Text color={"red"}>{errors.title}</Text>
											)}
										</FormControl>
										<FormControl mt={4}>
											<FormLabel>Description</FormLabel>
											<Textarea
												name="description"
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.description}
												disabled={isSubmitting}
												isInvalid={touched.description && errors.description}
											/>
											{touched.description && errors.description && (
												<Text color={"red"}>{errors.description}</Text>
											)}
										</FormControl>
										<FormControl mt={4}>
											<FormLabel>Price</FormLabel>
											<Input
												name="price"
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.price}
												disabled={isSubmitting}
												isInvalid={touched.price && errors.price}
											/>
											{touched.price && errors.price && (
												<Text color={"red"}>{errors.price}</Text>
											)}
										</FormControl>
										


                                       
                                       
										<FormControl>
											<FormLabel>Photos</FormLabel>
											<FieldArray                          //resim ekleme
												name="photos"
												render={(arrayHelpers) => (
													<>
														<div>
															
																		<Input
																			name={`photos`}
																			value={values.photos}
																			disabled={isSubmitting}
																			onChange={handleChange}
																			width={"3xl"}
																		/>
																		<Button
																			ml={4}
																			type={"button"}
																			colorScheme={"red"}
																			onClick={() => arrayHelpers.remove()}
																		>
																			Remove
																		</Button>
																	</div>
																
														

														<Button
															mt={5}
															onClick={() => arrayHelpers.push("")}
                                                            colorScheme='tomato'
                                                            variant={"outline"}
														>
															Add a Photo
														</Button>
													</>
												)}
											/>
										</FormControl>
										<Center>
										<Button
										
											mt={12}
											width={"250px"}
											type={"submit"}
											isLoading={isSubmitting}
                                            colorScheme='tomato'
										>
											Upload
										</Button>
										</Center>
									</form>
								</Box>
							</Box>
						</>
					);
}
           
           }
        </Formik>
        </div>
  )
}

export default NewProduct