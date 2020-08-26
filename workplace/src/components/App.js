import React, {useState, useEffect} from 'react'

const App = props => {
  const [state, setState] = useState(props) 

  const reset = () => setState(props)

  useEffect(() => {
    console.log('useEffect')
  })

  useEffect(() => {
    console.log('useEffect callback once')
  },[])

  // nameの状態が変化した時だけ呼ばれる
  useEffect(() => {
    console.log('This callback is for name only')
  }, [state.name])

  return (
    <>
      <p>現在の{state.name}は{state.price}円です</p>
      <button onClick={() => setState({...state, price: state.price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: state.price - 1})}>-1</button>
      <button onClick={() => reset()}>Reset</button>
      <input value={state.name} onChange={e => setState({...state, name: e.target.value}) }/>
    </>
  )
}

App.defaultProps = {
  name: "Sample",
  price: 1000,
}

export default App