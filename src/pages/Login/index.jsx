import { useForm } from "react-hook-form";
import { FormLogin } from "../../components/FormLogin";
import { Label } from "../../components/Label/styles";
import { Button } from "../../components/Button/styles";
import { Input } from "../../components/Input/styles";
import { P } from "../../components/ErrorMessage/styles";
import { H2 } from "../../components/Titles/styles";
import { schema as schemaLogin } from "../../Validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import "../../index.css";
// import "./styles.css";

const Login = () => {
  const { toRegister, loginData } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });

  return (
    <div>
      <h1 className="logoKhLogin">Client Networking</h1>
      <FormLogin onSubmit={handleSubmit(loginData)}>
        <H2>Login</H2>

        <Label htmlFor="email">Email</Label>

        <Input
          type="text"
          id="email"
          placeholder="Digite seu email"
          {...register("email")}
        />
        <P>{errors.email?.message}</P>

        <Label htmlFor="password">Senha</Label>
        <Input
          type="password"
          id="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        <P>{errors.password?.message}</P>

        <Button type="submit">Entrar</Button>
        <p className="pMsgReg">Ainda não possui uma conta?</p>

        <button
          className="buttonToRegister"
          onClick={() => toRegister()}
          type="submit"
        >
          Cadastre-se
        </button>
      </FormLogin>
    </div>
  );
};

export default Login;
