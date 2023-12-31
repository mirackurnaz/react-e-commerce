import * as yup from "yup";

const validations = yup.object().shape({
	email: yup
		.string()
		.email("Geçerli bir email girim.")
        .required("Zorunlu alan"),
	password: yup
		.string()
		.min(6, "Parolanız en az 6 karakter olmalıdır")
		.required(),
	passwordConfirm: yup
		.string()
		.oneOf([yup.ref("password")], "Parolalar uyuşmuyor")
		.required(),
});

export default validations;
