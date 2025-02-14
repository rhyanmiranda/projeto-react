import './PlayerCard.css'
// desestruturação das props
const PlayerCard = ({ icon, nickname, role }) => {
  return (
    <div className='player'>
      <div className='header'>
        <img src={icon} alt={nickname} />
      </div>
      <div className='footer'>
        <h4>{nickname}</h4>
        <h5>{role}</h5>
      </div>
    </div>
  )
}

export default PlayerCard