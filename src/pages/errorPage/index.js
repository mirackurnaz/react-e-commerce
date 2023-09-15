import React from "react";
import { Alert,AlertIcon,AlertTitle } from "@chakra-ui/react";
function ErrorPage() {
	return (
	<div>
		
	<Alert 
	status='error'
	justifyContent='center'
	>
	<AlertIcon />
	<AlertTitle>Error 404</AlertTitle>
		
  </Alert>
  
  </div>
  )
}

export default ErrorPage;
