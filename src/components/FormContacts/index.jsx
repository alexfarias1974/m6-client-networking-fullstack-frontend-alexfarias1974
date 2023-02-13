import { useContext } from "react";
import { schemaContact } from "../../Validations";
import { yupResolver } from "@hookform/resolvers/yup";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { ContactContext } from "../../contexts/ContactContext";
import { Label } from "../Label/styles";
import { ContainerForm } from "../FormRegister/styles";
import { Input } from "../Input/styles";
import { H2 } from "../Titles/styles"
import { P } from "../ErrorMessage/styles";
import { Button } from "../Button/styles";
import CardContact from "../CardContact";

const FormContact = () => {
  const { contactData, toHandleContactSubmit, logout } = useContext(ContactContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaContact),
  });

  return (
    <div>
      <ContainerForm onSubmit={handleSubmit(toHandleContactSubmit)}>
        <H2>Cadastre seu contato</H2>
        <Label htmlFor="name">Nome</Label>
        <Input
          type="text"
          id="name"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
        <P>{errors.name?.message}</P>

        <Label htmlFor="email">Email</Label>
        <Input
          type="text"
          id="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        <P>{errors.email?.message}</P>

        <Label htmlFor="tel">Contato</Label>
        <Input
          type="text"
          id="tel"
          placeholder="Digite aqui seu contato"
          {...register("tel")}
        />
        <P>{errors.tel?.message}</P>

        <Button type="submit">Cadastrar</Button>
      </ContainerForm>
      <CardContact />
    </div>
  );
};

export default FormContact;
