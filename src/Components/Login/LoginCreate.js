import React from 'react'
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  function handleSubmit(event) {
    event.preventDefault();
    // const response = await fetch()
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username}/>
        <Input label="Email" type="email" name="email" {...email}/>
        <Input label="Senha" type="password" name="password" {...password} autoComplete="true"/>
        <Button>Cadastrar</Button>
      </form>
    </section>
  )
}

export default LoginCreate