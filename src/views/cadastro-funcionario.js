import React from 'react';

import Stack from '@mui/material/Stack';

import Card from '../components/card';
import FormGroup from '../components/form-group';

import { mensagemSucesso } from '../components/toastr';

class CadastroFuncionario extends React.Component {
  state = {
    nome: '',
    email: '',
    telefone: '',
    cpf: '',
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    estado: '',
    cidade: ''
  };

  cadastrar = () => {
    mensagemSucesso(`Usuário ${this.state.nome} cadastrado com sucesso!`);
  };

  cancelar = () => {};

  render() {
    return (
      <div className='container'>
        <Card title='Cadastro de Funcionário'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='bs-component'>
                <FormGroup label='Nome: *' htmlFor='inputNome'>
                  <input
                    type='text'
                    id='inputNome'
                    value={this.state.nome}
                    className='form-control'
                    name='nome'
                    onChange={(e) => this.setState({ nome: e.target.value })}
                  />
                </FormGroup>
                <FormGroup label='Email: *' htmlFor='inputEmail'>
                  <input
                    type='email'
                    id='inputEmail'
                    value={this.state.email}
                    className='form-control'
                    name='email'
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </FormGroup>
                <FormGroup label='Telefone: *' htmlFor='inputTelefone'>
                  <input
                    type='number'
                    id='inputTelefone'
                    value={this.state.telefone}
                    className='form-control'
                    name='telefone'
                    onChange={(e) => this.setState({ telefone: e.target.value })}
                  />
                </FormGroup>
                <FormGroup label='CPF: *' htmlFor='inputCPF'>
                  <input
                    type='number'
                    id='inputCPF'
                    value={this.state.cpf}
                    className='form-control'
                    name='cpf'
                    onChange={(e) =>
                      this.setState({ cpf: e.target.value })
                    }
                  />
                </FormGroup>
                <FormGroup label='CEP: *' htmlFor='inputCEP'>
                  <input
                    type='number'
                    id='inputCEP'
                    value={this.state.cep}
                    className='form-control'
                    name='cep'
                    onChange={(e) =>
                      this.setState({ cep: e.target.value })
                    }
                  />
                </FormGroup>
                <FormGroup label='Logradouro: *' htmlFor='inputLogradouro'>
                  <input
                    type='text'
                    id='inputLogradouro'
                    value={this.state.cpf}
                    className='form-control'
                    name='logradouro'
                    onChange={(e) =>
                      this.setState({ logradouro: e.target.value })
                    }
                  />
                </FormGroup>
                <Stack spacing={1} padding={1} direction='row'>
                  <button
                    onClick={this.cadastrar}
                    type='button'
                    className='btn btn-success'
                  >
                    Salvar
                  </button>
                  <button
                    onClick={this.cancelar}
                    type='button'
                    className='btn btn-danger'
                  >
                    Cancelar
                  </button>
                </Stack>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default CadastroFuncionario;
