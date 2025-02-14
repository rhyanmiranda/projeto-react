import './PlayerCard.css'
// desestruturação de props
const PlayerCard = ({ icon, nickname, role }) => {
  return (
    <div className='player'>
      <img src={icon} alt={nickname} />
      <h4>{nickname}</h4>
      <h5>{role}</h5>
    </div>
  )
}

export default PlayerCard