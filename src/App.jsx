import { useEffect, useState } from 'react'
// import PlaceContentCenter from './components/PlaceContentCenter'
import Input from './components/Input'
import Button from './components/Button'

function App() {
  const [name, setName] = useState('')
  const [online, setOnline] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(window.scroll)

  useEffect(() => {
    // console.log('I always rendered')
  })

  useEffect(() => {
    // console.log('First rendered')
  }, [])

  useEffect(() => {
    // console.log(`I am now ${online ? 'online' : 'offline'}`)
  }, [online])

  function updateScrollPosition() {
    const windowScrolling = window.scrollY
    console.log(`Window scroll position: ${windowScrolling}`)
    setScrollPosition(windowScrolling)
  }

  useEffect(() => {
    window.addEventListener('scroll', updateScrollPosition)
  }, [])

  return (
    <div className={'h-[4000px]'}>
      <Input value={name} onChange={(e) => setName(e.target.value)} />
      <Button onClick={() => setOnline((online) => !online)}>Set Online</Button>
    </div>
  )
}

export default App
