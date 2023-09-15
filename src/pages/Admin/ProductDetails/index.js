import React from 'react'
import {useParams} from "react-router-dom" //göderilen id yi almak için useparamsı kullanmalıyım.
import { fetchProduct,updateProduct } from '../../../api';
import { useQuery } from '@tanstack/react-query'
import { Spinner,Flex, Heading,Box,FormControl,FormLabel,Input,Text,Textarea,Button } from "@chakra-ui/react";
import {Formik,FieldArray} from "formik"
import validationSchema from "./validations" //validationSchema=editScheme karşılık gelir
import { message } from 'antd'; //güncelleme işlemi yapılırken yukardan mesaj versin alert gibi
function ProductDetails() {

    const {product_id}=useParams(); //id'yi yaklayalım  ve sonra api.jsde backnde sorgu yapalım.bu sorguyu yapmıştık(fetchProduct)
   
    console.log(product_id);

    const { isLoading, isError, data, error } = useQuery(  //veri çekme işlemi 
		["admin:product", product_id],
		() => fetchProduct(product_id)
	);
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

    const handleSubmit=async (values,bag)=>{  //values girilen değerler,bag form ile yapılabilcek foksiyonlar(örn:formu rsetlemek,validasyonları tekrar çalıştırmak gibi)
        message.loading({content:"Loading...",key:"product_update"});
        try{
            await updateProduct(values,product_id)
            message.success(
                {
                    content:"Was Updated",
                    key:"product_update",
                    duration:3    //3 sn sonra kaybolsun

                }
            )
        }
        catch(e){
            message.error("Update Failed")
        }
    }
  return (
    <div>
        <Heading mt={"20px"} color={"tomato"} mr={"55px"} fontSize={28}>Product Edit</Heading>

        <Formik 
        initialValues={
            {
                title:data.title,
                descrition:data.descrition,
                photos:data.photos,
                price:data.price,
                marka:data.marka,
                oldprice:data.oldprice
            }
        }
        validationSchema={validationSchema}
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
												name="descrition"
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.descrition}
												disabled={isSubmitting}
												isInvalid={touched.descrition && errors.descrition}
											/>
											{touched.descrition && errors.descrition && (
												<Text color={"red"}>{errors.descrition}</Text>
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

                                        <FormControl mt={4}>
											<FormLabel>Old Price</FormLabel>
											<Input
												name="oldprice"
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.oldprice}
												disabled={isSubmitting}
												isInvalid={touched.oldprice && errors.oldprice}
											/>
											{touched.oldprice && errors.oldprice && (
												<Text color={"red"}>{errors.oldprice}</Text>
											)}
										</FormControl>

                                        <FormControl mt={4}>
											<FormLabel>Marka</FormLabel>
											<Input
												name="marka"
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.marka}
												disabled={isSubmitting}
												isInvalid={touched.marka && errors.marka}
											/>
											{touched.marka && errors.marka && (
												<Text color={"red"}>{errors.marka}</Text>
											)}
										</FormControl>
                                        
										<FormControl>
											<FormLabel>Photos</FormLabel>
											<FieldArray                          //resim ekleme
												name="photos"
												render={(arrayHelpers) => (
													<>
														<div>
															{values.photos &&
																values.photos.map((photo, index) => (
																	<div key={index}>
																		<Input
																			name={`photos.${index}`}
																			value={photo}
																			disabled={isSubmitting}
																			onChange={handleChange}
																			width={"3xl"}
																		/>
																		<Button
																			ml={4}
																			type={"button"}
																			colorScheme={"red"}
																			onClick={() => arrayHelpers.remove(index)}
																		>
																			Remove
																		</Button>
																	</div>
																))}
														</div>

														<Button
															mt={5}
															onClick={() => arrayHelpers.push("")}
                                                            colorScheme='orange'
                                                            variant={"outline"}
														>
															Add a Photo
														</Button>
													</>
												)}
											/>
										</FormControl>
										<Button
											mt={4}
											width={"full"}
											type={"submit"}
											isLoading={isSubmitting}
                                            colorScheme='orange'
										>
											Upload
										</Button>
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

export default ProductDetails

//1)inputu tasrlarken formiği kullandım