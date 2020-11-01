import './App.css';
import VideoCollection from './components/videoCollection/VideoCollection';

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <VideoCollection />
      </div>
    </div>
  );
}

export default App;
