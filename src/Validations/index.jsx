import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required("Campo obrigatório")
    .email("Email Inválido!"),
  password: yup
    .string()
    .required("Campo obrigatório"),
});

export const schemaRegister = yup.object({
  name: yup
    .string()
    .required("Campo obrigatório")
    .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, "Somente letras"),
  email: yup
    .string()
    .required("Campo obrigatório")
    .email("Email inválido"),
  contact: yup
    .string()
    .required("Adicione um número para contato"),
  password: yup
    .string()
    .required("Campo obrigatório.")
    .matches(
      /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
      "Sua senha deverá conter no mínimo 8 caracteres, pelo menos uma letra minúscula, uma maiúscula, um número e um caractere especial."
    ),
  confirmPassword: yup
    .string()
    .required("Campo obrigatório")
    .oneOf(
      [yup.ref("password"), null],
      "Esse campo deve possuir a mesma senha cadastrada no campo anterior"
    )
});

export const schemaContact = yup.object({
    name: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, "Somente letras"),
    email: yup
        .string()
        .required("Campo obrigatório")
        .email("Email inválido"),
    contact: yup
        .string()
        .required("Adicione um número para contato"),
  });
