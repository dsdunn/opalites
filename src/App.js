import './App.scss'
import { Nav } from './Nav';
import { Gallery } from './Gallery';
import { Bio } from './Bio';
import { Video } from './Video';
import { Divider } from './Divider';

function App() {
  return (
    <div id="app">
      <h1 id="hero" className="monoton light-blue">THE<br/> OPALITES</h1>
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
