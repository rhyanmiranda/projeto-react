import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

const App = () => {

  const teams = [
    {
      name: 'Fúria',
      icon: 'https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png',
    },
    {
      name: 'Mibr',
      icon: 'https://s3.glbimg.com/v1/AUTH_08fb001c60b847468664307c11fa9dc9/public/2021/7/hO4KxL8AV8T4tQNcWZFm.png',
    },
    {
      name: 'Fanatic',
      icon: 'https://upload.wikimedia.org/wikipedia/pt/f/f0/Fnatic_logo.png',
    }
  ]

  const [players, setPlayers] = useState([])

  const onNewPlayer = (player) => {
    setPlayers([...players, player])
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)} onPlayerAdd={player => onNewPlayer(player)} />

      {teams.map(team => <Team
        key={team.name}
        teamName={team.name}
        icon={team.icon}
        players={players.filter(player => player.team === team.name)}
      />)}
    </div>
  )
}

export default App;
