import { Link, useHistory } from 'react-router-dom';
import ButtonIcon from 'components/ButtonIcon';

import './Login.css';
import { useForm } from 'react-hook-form';
import { getTokenData, requestBackendLogin, saveAuthData } from 'utils/requests';
import { useState, useContext } from 'react';
import { AuthContext } from 'AuthContext';

type FormData = {

    username: string;
    password: string;

}

const Login = () => {

    const  { setAuthContextData } = useContext(AuthContext);

    const [hasError, setHasError] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const history = useHistory();

    const onSubmit = (formData: FormData) => {

        requestBackendLogin(formData)
            .then(response => {
                saveAuthData(response.data);
                setAuthContextData({
                    authenticated: true,
                    tokenData: getTokenData()
                })
                setHasError(false);

                history.push('/admin');
            })
            .catch(err => {
                setHasError(true);
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
                        {...register("username", {
                            required: 'Campo obrigatório',
                            pattern: {
                                value: (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i),
                                message: 'Email inválido'
                            }
                        })}
                        type="text"
                        className={`form-control base-input ${errors.username ? 'is-invalid' : ''}`}
                        placeholder="Email"
                        name="username"
                    />
                    <div className="invalid-feedback d-block">
                        {errors.username?.message}
                    </div>

                </div>

                <div className="mb-2">

                    <input
                        {...register("password", {
                            required: 'Campo obrigatório'
                        })}
                        type="password"
                        className={`form-control base-input ${errors.password ? 'is-invalid' : ''}`}
                        placeholder="Password"
                        name="password"
                    />
                    <div className="invalid-feedback d-block">
                        {errors.password?.message}
                    </div>

                </div>

                <Link to="/admin/auth/recover" className="login-link-recover">
                    Esqueci a senha
                </Link>

                <div className="login-submit">
                    <ButtonIcon text="Fazer login" />
                </div>

                <div className="signup-container">

                    <span className="not-registered">Não tem Cadastro?</span>
                    <Link to="/admin/auth/signup" className="login-link-register">
                        CADASTRAR
                    </Link>

                </div>

            </form>

        </div>

    );
};


export default Login;
