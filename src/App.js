import Routess from "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import ProtectedRoute from "./pages/ProtectedRoute";

import ErrorPage from "./pages/errorPage";
import Products from "./pages/Products/index";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import Profile from "./pages/Profile";
import ProductDetail from "./pages/ProductDetail";
import Basket from "./pages/Basket";
import AdminHome from "./pages/Admin/Home";
import Orders from "./pages/Admin/Order/index";
import AdminProducts from "./pages/Admin/Products/index";
import ProtectedAdmin from "./pages/Admin/Products/ProtectedAdmin";
import ProductDetails from "./pages/Admin/ProductDetails/index";
import NewProduct from "./pages/Admin/Products/new"



function App() {
	
		
	  
	return (
		
		<div className="App">
			<Navbar />
			<div className={Routess}>
				<Routes>
					<Route path="/" element={<Products />} />
					<Route path="/product/:product_id" element={<ProductDetail />} /> 
					<Route path="/signin" element={<Signin />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/basket" element={<Basket />} />
					<Route element={<ProtectedRoute />}>
						<Route path="/profile" element={<Profile />} />
					</Route>
					<Route element={<ProtectedAdmin />}>
						{/* https://www.robinwieruch.de/react-router-nested-routes/ */}
						<Route index path="/admin" element={<AdminHome />} />
						<Route path="/admin/orders" element={<Orders />} />
						<Route path="/admin/products" element={<AdminProducts />} />
						
					
					<Route
							path="/admin/products/:product_id"      //admin tarafından düzenle butonuna basınca productu düznleyeceğimiz yer(açılcak sayfa)
							element={<ProductDetails/>}
						/>
						<Route path="/admin/products/new" element={<NewProduct />} />
						</Route>
							
					
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</div>
		</div>
	);
	
}

export default App;

//admin de =>admin={true}  propu verme sebebimiz normal kullanıcılarında admin paneline erişimini engellemek.bunuda ProtectedRoute.js yerine giderek yapalım