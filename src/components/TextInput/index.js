import './TextInput.css'

const TextInput = (props) => {

  const placeholderModificado = `${props.placeholder}...`

  // Conforme o valor da variável muda, o Estado também muda e o React entender que deve renderizar novamente o componente
  const onTyping = (event) => {
    props.onChanged(event.target.value)
  }

  return (
    <div className='text-input'>
      <label>
        {props.label}
      </label>
      <input 
        value={props.value}
        onChange={onTyping} 
        required={props.required} 
        placeholder={placeholderModificado}/>
    </div>
  )
}

export default TextInput