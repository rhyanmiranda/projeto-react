import './Dropdown.css'

const Dropdown = (props) => {
  return(
    <div className='dropdown'>
      <label>{props.label}</label>
      <select onChange={event => props.onChanged(event.target.value)} required={props.required} value={props.value}>
        <option value=""></option>
        {props.itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  )
}
//  key em um select/options deve ser um identificador único, de preferência id
// pois é usado para o REACT entender os comportamentos.
export default Dropdown