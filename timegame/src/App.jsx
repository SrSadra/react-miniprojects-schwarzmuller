
import "./index.css"
import Player from './components/Player';
import TimerChallenge from "./components/TimerChallenge";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title={"easy"} targetTime={1}/>
        <TimerChallenge title={"hard"} targetTime={5}/>
        <TimerChallenge title={"pros"} targetTime={20}/>
      </div>
    </>
  );
}

export default App;

