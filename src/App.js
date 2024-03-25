import './App.scss'
import { Nav } from './Nav';
import { Gallery } from './Gallery';
import { Bio } from './Bio';
import { Video } from './Video';
import { Divider } from './Divider';
import neonlogo from './neonlogo.svg';

function App() {
  return (
    <div id="app">
      <div id="hero">
        <div id="hero-overlay"/>
        <h1 id="hero-text" className="monoton neon-blue">THE<br/> OPALITES</h1>
      </div>
      {/* <img id="hero-image" src={neonlogo}/> */}
      <Nav/>
      <div id="gallery-bio-container" className="flex mobile-stack mobile-reverse">
        <Gallery/>
        <Bio/>
      </div>
      <Divider/>
      <Video/>
    </div>
  )
}

export default App
