import './App.scss'
import { Nav } from './Nav';
import { Gallery } from './Gallery';
import { Bio } from './Bio';
import { Video } from './Video';
import { Divider } from './Divider';
import { CTA } from './CTA';

function App() {
  return (
    <div id="app">
      <div id="hero">
        <div id="hero-overlay"/>
        <h1 id="hero-text" className="monoton neon-blue">THE<br/> OPALITES</h1>
      </div>
      <Nav/>
      <CTA />
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
