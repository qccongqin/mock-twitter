import { useEffect, useState } from 'react';

export default function ExplorePage() {
  const [counter, setCounter] = useState(0);

  const updateCounter = (delta: number) => {
    setCounter(counter + delta);
  };
  useEffect(() => {
    console.log('useEffect called');
    setCounter((counter) => counter + 2);

    updateCounter(4);
  }, []);
  return (
    <div>
      <div>you clicked {counter}</div>
      <button onClick={() => setCounter((counter) => counter + 1)}>click</button>
    </div>
  );
}
