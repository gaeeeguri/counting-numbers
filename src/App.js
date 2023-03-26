import React, {useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const onClick = (e) => setCount(prev => prev+parseInt(e.target.value))

  return (
    <>
    <div>
      <button onClick={onClick} value={1}>
        +1
      </button><button onClick={onClick} value={5}>
        +5
      </button><button onClick={onClick} value={-1}>
        -1
      </button><button onClick={onClick} value={-5}>
        -5
      </button>
    </div>
    <div>
      count: {count}
    </div>
  </>
  )
}

export default App;