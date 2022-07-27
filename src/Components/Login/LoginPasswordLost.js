import React from 'react'
import useFetch from '../../Hooks/useFetch'
import useForm from '../../Hooks/useForm'
import Button from '../Forms/Button'
import Input from '../Forms/Input'

const LoginPasswordLost = () => {
  const email = useForm();
  const { data, loading, error, request } = useFetch();

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section>
      <h1 className="title">Perdeu a senha?</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Email / Usuário" type="text" name="login" {...email} />
        <Button>Enviar Email</Button>
      </form>
    </section>
  )
}

export default LoginPasswordLost