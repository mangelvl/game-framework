import './App.css'
import { Console } from './components/pages/Console/Console'

function App() {
  return (
    <>
      <div className='flex flex-col items-center'>
        <h1 className='text-lg text-gray-300'>ConsoleFrame</h1>
      </div>
      <div className='flex flex-col items-center'>
        <Console />
      </div>
      <div className='flex flex-col items-center'>
        <h2 className='text-lg text-gray-300'>Footer</h2>
      </div>
    </>
  )
}

export default App
