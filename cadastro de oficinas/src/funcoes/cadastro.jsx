import React, { useState } from 'react';
import "./cadastro.css"
function Cadastro(){
    const [nome, setNome] = useState ("");
    const [email, setEmail] = useState ("");
    const [senha, setSenha] = useState ("");

    const [erro, setErro] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();


    if (!nome || !email || !senha) {
      setErro('Preencha todos os campos!');
      return;
    }

    setErro('');
    

    alert('Formulário enviado com sucesso!');
    setNome('');
    setEmail('');
    setSenha('');
  };



    return(
        <div className="divDeCadastro">
            <h2>Cadastro de usuario</h2>
            <form className="formCadastro" onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input value={nome}
            onChange={(e) => setNome(e.target.value)} type="text" />
                </div>

                <div>
                    <label>Email:</label>
                    <input value={email}
            onChange={(e) => setEmail(e.target.value)} type="text" />
                </div>

                <div>
                    <label>Senha:</label>
                    <input value={senha}
            onChange={(e) => setSenha(e.target.value)} type="text" />
                </div>

                <button type = "submit" >Cadastrar</button>






            </form>
        </div>

    
    );

}
export default Cadastro;

