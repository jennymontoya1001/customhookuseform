import React from 'react';
import { useForm } from '../hooks/useForm';

export const Formulario = () => {

    const [values, handleInputChange, reset] = useForm({
        apellido_paterno: '',
        apellido_materno: '',
        nombre: '',
        username: '',
        password: ''
    });

    const {apellido_paterno,  apellido_materno, nombre, username, password} = values;

    const handleSubmit = e =>{
        e.preventDefault();
    }

    return (
        <div className="Registro py-5 container text-center">
            <form className="form-signin" onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 font-weight-normal">
                    Formulario
                </h1>
                <input
                    type="text"
                    placeholder="Apellido paterno"
                    name="apellido_paterno"
                    className="form-control"
                    autoComplete="off"
                    value={apellido_paterno}
                    onChange={handleInputChange}
                />
                <br />
                <input
                    type="text"
                    placeholder="Apellido materno"
                    name="apellido_materno"
                    className="form-control"
                    autoComplete="off"
                    required
                    value={apellido_materno}
                    onChange={handleInputChange}
                />
                <br />
                <input
                    type="text"
                    name="nombre"
                    className="form-control"
                    placeholder="nombre"
                    required
                    value={nombre}
                    onChange={handleInputChange}
                />
                <br />
                <input
                    type="email"
                    name="username"
                    className="form-control"
                    placeholder="Email"
                    required
                    value={username}
                    onChange={handleInputChange}
                />
                <br />
                <input
                    type="Password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={handleInputChange}
                />
                <br />
                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-1"
                >
                    Register
                </button>
                <br />

            </form>
        </div>
    )
}
