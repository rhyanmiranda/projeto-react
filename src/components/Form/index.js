import TextInput from '../TextInput'
import Dropdown from './../Dropdown'
import './Form.css'
import Button from './../Button/index';
import { useState } from 'react';

const Form = (props) => {
  
  //ESTADO DO REACT => CONFORME A VARIÁVEL MUDA O VALOR, O ESTADO MUDA E O REACT RENDERIZA NOVAMENTE O COMPONENTE EM TELA
  //RETORNA UM ARRAY COM UMA VARIÁVEL COM O VALOR E UMA FUNÇÃO PARA A ALTERAÇÃO DESSE VALOR
  // Hooks 

  const [nickname, setNickname] = useState('')
  const [role, setRole] = useState('')   //role = função, papel
  const [team,setTeam] = useState('') 
  const [icon,setIcon] = useState('') 

  const onSave = (event) => {
    event.preventDefault()
    props.onPlayerAdd({
      nickname,
      role,
      icon,
      team
    })
    setNickname('')
    setRole('')
    setIcon('')
    setTeam('')
  }

  return (
    <section className='form'>
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar uma carta do membro</h2>
        
        <TextInput 
          required={true} 
          label='Apelido' 
          placeholder='Digite seu apelido' 
          value={nickname}
          onChanged={value => setNickname(value)}
        />
        <TextInput 
          label='Função' 
          placeholder='Digite sua função' 
          value={role}
          onChanged={value => setRole(value)}
        />
        <TextInput 
          label='Imagem' 
          placeholder='Digite a URL da imagem' 
          value={icon}
          onChanged={value => setIcon(value)}
        />
        <Dropdown 
          required={true} 
          label='Time' itens={props.teams}
          value={team}
          onChanged={value => setTeam(value)}
        />
        <Button>
          Criar Player
        </Button>
      </form>
    </section>
  )
}

export default Form