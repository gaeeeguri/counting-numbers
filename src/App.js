import React, {useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const onClick = (e) => setCount(prev => prev+parseInt(e.target.value));

  const buttonValues = [1,5,-1,-5];

  return (
    <>
    <div>
      {
        buttonValues.map((buttonValue) =>
          <button
            key={buttonValue}
            value={buttonValue}
            onClick={onClick}
          >
            {buttonValue > 0 && '+'}{buttonValue}
          </button>)
      }
    </div>
    <div>
      count: {count}
    </div>
  </>
  )
}

export default App;