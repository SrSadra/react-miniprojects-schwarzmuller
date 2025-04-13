import { memo, useCallback, useMemo, useState } from 'react';

import IconButton from '../UI/IconButton.jsx';
import MinusIcon from '../UI/Icons/MinusIcon.jsx';
import PlusIcon from '../UI/Icons/PlusIcon.jsx';
import CounterOutput from './CounterOutput.jsx';
import { log } from '../../log.js';

function isPrime(number) {
  log(
    'Calculating if is prime number',
    2,
    'other'
  );
  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

const Counter = memo(function Counter({ initialCount }) { // in this senario memo is only working if the value is same if clickin
  log('<Counter /> rendered', 1);
  const initialCountIsPrime = useMemo(() => isPrime(initialCount), []);

  const [counter, setCounter] = useState(initialCount);

  const handleDecrement = useCallback(function handleDecrement() {
    setCounter((prevCounter) => prevCounter - 1);
  }, [])

  const handleIncrement = useCallback(function handleIncrement() {
    setCounter((prevCounter) => prevCounter + 1);
  }, [])

  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It{' '}
        <strong>is {initialCountIsPrime ? 'a' : 'not a'}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={handleDecrement}> {/*coz minusIcon and PlusIcon has been imported from another file and not defined here when 
        the component re-executed these are same as before */}
          Decrement
        </IconButton>
        <CounterOutput value={counter} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}> {/*bounding handleIncreament between useCallback will prevent recreation of 
        function even if the component is executed so if icon button surrounded by memo this attrbute is same as before*/}
          Increment
        </IconButton>
      </p>
    </section>
  );
})

export default Counter;
