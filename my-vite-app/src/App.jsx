import { useState } from 'react'
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {/* 这里的图片我删掉了 */}
      <h1>welcome to my blog</h1>
      <div className='workArea'>
        <p>work area</p>

        <p>button太丑了,我在改</p>

        <button onClick={toggleList}>
          {isOpen ? 'Hide List' : 'Show List'}
        </button>

        {isOpen && (
          <ul>
            <li>Item 1</li>
          </ul>
        )}



      </div>
      
    </>
  )
}

export default App
