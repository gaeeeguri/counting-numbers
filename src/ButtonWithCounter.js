import React, {useState} from 'react';

const ButtonWithCounter = ({buttons}) => {
  const [count, setCount] = useState(0);

  const onClick = (e) => setCount(prev => prev+parseInt(e.target.value));

  return (
    <>
    <div>
      {
        buttons.map((buttonValue) =>
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

export default ButtonWithCounter;