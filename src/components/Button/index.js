import './Button.css'

const Button = (props) => {
  // children vai se referir ao conteúdo entre as tags Button, podendo ser um texto ou ima imagem, por exemplo
  return (
      <button className='button'>
        {props.children}
      </button>
  )
}

export default Button