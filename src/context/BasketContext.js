import { useState, createContext, useContext, useEffect } from "react";


const defaultBasket=JSON.parse(localStorage.getItem("basket")) || []

const BasketContext = createContext();

const BasketProvider = ({ children }) => {
	const [items, setItems] = useState(defaultBasket);

	const addToBasket = (data, findBasketItem) => {
		if (!findBasketItem) {
			return setItems((prev) => [...prev, data]);
		}

		const filtered = items.filter((item) => item._id !== findBasketItem._id); /// sepetten kaldır butonuna basınca sil  ,
		setItems(filtered);                                                        ///
	};

	useEffect(()=>{     //her sepete atıldığında
		localStorage.setItem("basket",JSON.stringify(items)) //itemsı basket keyine yaz
	},[items])

	const removeFromBasket=(item_id)=>{
		const filtered = items.filter((item) => item._id !== item_id); /// sepetin içindeki sil butonu ile sepettin içindeyken kaldırma ,
		setItems(filtered);  
	}
	const emptyBasket=()=>setItems([]); //sipariş verildiğinde sepeti boşalt
	const values = {
		items,
		setItems,
		addToBasket,removeFromBasket,emptyBasket
	};
	return (
		<BasketContext.Provider value={values}>{children}</BasketContext.Provider>
	);
};

const useBasket = () => useContext(BasketContext);

export { BasketProvider, useBasket };

