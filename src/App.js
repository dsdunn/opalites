import './App.scss'
import { Nav } from './Nav';
import { Gallery } from './Gallery';
import { Bio } from './Bio';
import { Video } from './Video';
import { Divider } from './Divider';
import { Music } from './Music';
import { Shows } from './Shows';

function App() {
  return (
    <div id="app">
      <div id="hero">
        <div id="hero-overlay"/>
        <h1 id="hero-text" className="monoton neon-blue">THE<br/> OPALITES</h1>
        <h3 className="subtitle light-blue text-center">Ska - Rocksteady - Reggae</h3>
      </div>
      <Nav/>
      <Divider/>
      <Music/>
      <Divider/>
      <Video/>
      <Divider/>
      <Shows/>
      {/* <div id="about" className="flex mobile-stack mobile-reverse">
        <Gallery/>
        <Bio/>
      </div> */}
    </div>
  )
}

export default App
