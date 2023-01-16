import './App.scss'

import { Footer, Blog, Possibility, Features, Gpt3, Header } from './containers/';
import { Cta, Brand, Navbar } from './components';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Gpt3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
