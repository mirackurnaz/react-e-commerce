import * as yup from "yup";

const editScheme = yup.object().shape({
	title: yup.string().required(),
	descrition: yup.string().min(5).required(),
	price: yup.string().required(),
    oldprice:yup.string().required(),
    marka:yup.string().required(),
});

export default editScheme;