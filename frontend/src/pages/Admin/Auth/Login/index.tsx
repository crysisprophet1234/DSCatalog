import { Link } from 'react-router-dom';
import ButtonIcon from 'components/ButtonIcon';

import './Login.css';
import { useForm } from 'react-hook-form';
import { requestBackendLogin } from 'utils/requests';
import { useState } from 'react';

type FormData = {

    username: string;
    password: string;

}

const Login = () => {

    const [hasError, setHasError] = useState(false);

    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit = (formData: FormData) => {

        requestBackendLogin(formData)
            .then(response => {
                setHasError(false);
                console.log('sucesso!', response);
            })
            .catch(err => {
                setHasError(true);
                console.log(err);
            })

    }

    return (

        <div className="base-card login-card">

            <h1>LOGIN</h1>

            {hasError &&

                <div className="alert alert-danger" role="alert" style={{ textAlign: 'center' }}>
                    Usuário ou senha incorretos.
                    <br />
                    <a href="/admin/auth/recover" className="alert-link">Esqueceu sua senha?</a>
                </div>

            }

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="mb-4">

                    <input
                        {...register("username")}
                        type="text"
                        className="form-control base-input"
                        placeholder="Email"
                        name="username"
                    />

                </div>

                <div className="mb-2">

                    <input
                        {...register("password")}
                        type="password"
                        className="form-control base-input "
                        placeholder="Password"
                        name="password"
                    />

                </div>

                <Link to="/admin/auth/recover" className="login-link-recover">
                    Esqueci a senha
                </Link>

                <div className="login-submit">
                    <ButtonIcon text="Fazer login" />
                </div>

                <div className="signup-container">

                    <span className="not-registered">Não tem Cadastro?</span>
                    <Link to="/admin/auth/register" className="login-link-register">
                        CADASTRAR
                    </Link>

                </div>

            </form>

        </div>

    );
};


export default Login;
