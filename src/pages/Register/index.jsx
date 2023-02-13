import { useForm } from "react-hook-form";
import { Label } from "../../components/Label/styles";
import { ContainerForm } from "../../components/FormRegister/styles";
import { Input } from "../../components/Input/styles";
import { H2 } from "../../components/Titles/styles";
import { P } from "../../components/ErrorMessage/styles";
import { GrayButton } from "../../components/GrayButton/styles";
import { Button } from "../../components/Button/styles";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import { schemaRegister } from "../../Validations";
import { yupResolver } from "@hookform/resolvers/yup";
import "../../index.css";
// import "../Home/styles.css";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { signIn } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaRegister),
  });

  const buttonBack = () => {
    navigate("/login", { replace: true });
  };

  return (
    <div>
      <div className="headerRegister">
        <h1 className="logoKhRegister">Registre-se</h1>
        <GrayButton className="btnBack" onClick={() => buttonBack()}>
          Voltar
        </GrayButton>
      </div>
      <ContainerForm onSubmit={handleSubmit(signIn)}>
        <H2>Crie sua conta</H2>
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

        <Label htmlFor="password">Senha</Label>
        <Input
          type="password"
          id="password"
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />
        <P>{errors.password?.message}</P>

        <Label htmlFor="confirm-Password">Confirmar Senha</Label>
        <Input
          type="password"
          id="confirmPassword"
          placeholder="Digite novamente sua senha"
          {...register("confirmPassword")}
        />
        <P>{errors.confirmPassword?.message}</P>

        <Button type="submit">Cadastrar</Button>
      </ContainerForm>
    </div>
  );
};

export default Register;
