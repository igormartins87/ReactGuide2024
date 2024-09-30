import Player from './components/Player.jsx';
import DesafioTempo from './components/TimeChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <DesafioTempo tile="Easy" targetTime={1}/>
        <DesafioTempo tile=" Not Easy" targetTime={5}/>
        <DesafioTempo tile=" Getting tough" targetTime={10}/>
        <DesafioTempo tile=" Pros only" targetTime={15}/>
      </div>
    </>
  );
}

export default App;
