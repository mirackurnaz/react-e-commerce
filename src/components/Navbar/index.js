import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import {SearchOutlined } from '@ant-design/icons';

import { Button,Box,Input } from "@chakra-ui/react";
import logoo from "./image-navbar/logoo.png"

import { useBasket } from "../../context/BasketContext";
import { useAuth } from "./../../context/AuthContext";
import { UserOutlined,UserAddOutlined} from '@ant-design/icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import Dropdownn from "./xxx";



function Navbar() {
	
	
		
	  
	const { loggedIn,user } = useAuth();
	const {items}=useBasket(); //SEPETE EKLEME

	return (
		
		<nav className={styles.nav}>
			
			<div className={styles.left}>
				<div className={styles.logo}>
				<Link to={"/"}>
					<img src={logoo} alt="resim"/>
					</Link>
				</div>
				<Box textAlign={"start"} mt={"15px"} ml={"350px"}>
							<Input 
							placeholder="Search for product, category or brand"
							width={"300px"}
							borderRadius={"0px 0px 0px 0px"}
							height={"45px"} ></Input>
							<Button height={"45px"} mb={"6px"} borderRadius={"0px 0px 0px 0px"} width={"45px"} colorScheme="tomato" ><SearchOutlined style={{color:"white"}} /></Button>
							</Box>
			</div>
		
			
			{!loggedIn && (
				<>
					<div className={styles.right}>
						<Link to={"/signup"}>
							<Button colorScheme={"tomato"}><UserAddOutlined /> Signup </Button>
						</Link>
						<Link to={"/signin"}>
							<Button colorScheme={"creamm"} variant='outline'
							
							><UserOutlined /> Login</Button> 
							
						</Link>
						
					</div>
					
				</>
				
			)}
			{loggedIn && (
				<>
				{
					items.length>0 && (
						<div className={styles.right}>
						<Link to="/basket">
							<Button  ml={"370px"} colorScheme="creamm" variant="outline">
							<FontAwesomeIcon icon={faCartShopping} style={{color: "#ff6305",}} />
								Basket({items.length})</Button>
						</Link>
						</div>
					)
				}
				
				
		
				<div className={styles.right}>
						<Dropdownn/>
					</div>
				
		
						
					

					
					
					
					
				</>
				
			)}
		
		</nav>
		
	);
	
}

export default Navbar;
