import React, {useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const onClick = () => setCount(prev => prev+5)

  return (
    <>
    <div>
      <button onClick={onClick}>
        +5
      </button>
    </div>
    <div>
      count: {count}
    </div>
  </>
  )
}

export default App;