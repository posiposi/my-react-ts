import logo from './logo.svg'
import './App.css'
import MyHello from './MyHello'
import StateBasic from './Components/features/StateBasic'
import StateParent from './Components/ui/StateParent'

function App() {
  return (
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
        <MyHello myName="鈴木" />
        <StateBasic init={0} />
        <StateParent />
      </header>
    </div>
  )
}

export default App
