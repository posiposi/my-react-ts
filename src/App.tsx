import logo from './logo.svg'
import './App.css'
import StateParent from './Components/ui/StateParent'
import EventMouse from './Components/features/EventMouse'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <StateParent />
          <EventMouse
            beforeSrc={'/images/CsURw5sUMAAsblw.jpg'}
            afterSrc={'/images/IMG_3537.JPG'}
            manImage={'/images/freeFace.jpeg'}
            alt={'マウスイベント画像'}
          />
        </header>
      </div>
    </ChakraProvider>
  )
}

export default App
