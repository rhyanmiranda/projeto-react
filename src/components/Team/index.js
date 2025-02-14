import './Team.css'
import PlayerCard from './../PlayerCard';

const Team = (props) => {
  return (
    // aplicando estilo através de variáveis JS, puxando de um objeto!
    // condicional no react -> se o time tiver mais de um player vai renderizar, se não, não renderiza nada
    (props.players.length > 0) ?
      <section className='team' style={{ backgroundColor: props.backgroundColor }}>
        <h3 style={{ color: props.textColor }}>{props.teamName}</h3>
        <div className='players'>
          {props.players.map(player => <PlayerCard key={player.nickname} nickname={player.nickname} role={player.role} icon={player.icon} />)}
        </div>
      </section>
    : ''
  )
}

export default Team