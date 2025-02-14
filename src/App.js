import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

const App = () => {

  const teams = [
    {
      name: 'Fúria',
      icon: 'imagem da Fúria',
      backgroundColor: '#919191',
    },
    {
      name: 'Mibr',
      icon: 'imagem da Mibr',
      backgroundColor: '#787776',
    },
    {
      name: 'Fanatic',
      icon: 'imagem da Fanatic',
      backgroundColor: '#fa7123',
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
        backgroundColor={team.backgroundColor}
        players={players.filter(player => player.team === team.name)}
      />)}
    </div>
  )
}

export default App;
