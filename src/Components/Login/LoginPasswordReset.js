import React from 'react'
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
// import Error from '../Helper/Error';

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');
  const password = useForm();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');
    if (key) setKey(key);
    if (login) setLogin(login);

  }, []);

  async function handleSubmit() {

  }


  return (
    <div>
      <p>{key}</p>
      <p>{login}</p>
      <form onSubmit={handleSubmit}>
      <Input
        label="Nova Senha"
        type="password"
        name="password"
        {...password}
      /> 
      <Button>Resetar</Button>
      </form>
      {/* <Error error={error} /> */}
    </div>
  )
}

export default LoginPasswordReset