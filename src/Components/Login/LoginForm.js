import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Forms/Button';
import Input from '../Forms/Input';

const LoginForm = () => {
  return (
    <section>
      <h1>Login</h1>
      <form>
        <Input label="Usuário" type="text" name="username"/>
        <Input label="Senha" type="password" name="password"/>
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}

export default LoginForm