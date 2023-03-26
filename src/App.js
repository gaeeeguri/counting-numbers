import React, {useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
    <div>
      <button>
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