import { useRef, useState } from 'react'
import './App.css'
import Video from './components/Video';
import videojs from 'video.js'
import Home from './pages/Home';


const App = () => {
  const playerRef = useRef(null);
  const [link, setLink] = useState("http://localhost:3000/uploads/courses/4672ba00-e60a-11ef-9786-05728f5ab427/index.m3u8");


  const videoLink = "http://localhost:3000/uploads/courses/4672ba00-e60a-11ef-9786-05728f5ab427/index.m3u8"

  

  const videoJsOptions = {   
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: link,
      type: 'application/x-mpegURL'
    }]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };

  return (
    <>
      <Home setLink={setLink} />
      {link && <Video options={videoJsOptions} onReady={handlePlayerReady} />}
      
    </>
  );
}

export default App
