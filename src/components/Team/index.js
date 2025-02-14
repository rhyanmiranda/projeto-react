import './Team.css'
import PlayerCard from './../PlayerCard';

const Team = (props) => {
  return (
    // aplicando estilo através de variáveis JS, puxando de um objeto! => style={{ backgroundColor: props.backgroundColor }}
    // condicional no react -> se o time tiver mais de um player vai renderizar, se não, não renderiza nada
    (props.players.length > 0) ?
      <section className='team'>
        <div className='team-icon-name'>
          <img src={props.icon} alt={props.teamName} />
          <h3>{props.teamName}</h3>
        </div>
        <div className='players'>
          {props.players.map(player => <PlayerCard key={player.nickname} nickname={player.nickname} role={player.role} icon={player.icon} />)}
        </div>
      </section>
    : ''
  )
}

export default Team