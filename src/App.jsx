import PlaceContentCenter from './components/PlaceContentCenter'
import Card from './components/Card'
import Button from './components/Button'
import Input from './components/Input'

function App() {
  // const [tick, setTick] = useState(0)

  function handleClick() {
    // tick.current = tick.current + 1
    // console.log(tick.current)
    // const nextTick = tick + 1
    // setTick(nextTick)
    // console.log(nextTick)
  }

  return (
    <PlaceContentCenter>
      <Card>
        <Card.Title>useRef Hooks</Card.Title>
        <Card.Body>
          <Input
            isFocused
            placeholder={'Email'}
            className={'border border-slate-500'}
          />
          <Input
            placeholder={'Password'}
            className={'border border-slate-500'}
          />
          <Button onClick={handleClick}>Tick</Button>
        </Card.Body>
        {/* <Card.Footer>You clicked {tick.current} times.</Card.Footer> */}
      </Card>
    </PlaceContentCenter>
  )
}

export default App
