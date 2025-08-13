import { useState } from 'react';
import { Button } from '@/components';
import { Outlet } from 'react-router-dom';

export default function HomeScreen() {
  const [count, setCount] = useState<number>(0);

  const handleSetCount = (type: 'inc' | 'decr') => {
    setCount(prev => (type === 'inc' ? prev + 1 : prev - 1));
  };

  return (
    <div>
      <h1>HOME SCREEN</h1>
      <h2>{count}</h2>
      <section style={{ display: 'flex', gap: 12 }}>
        <Button onClick={() => handleSetCount('inc')}>Increment</Button>
        <Button onClick={() => handleSetCount('decr')}>Decrement</Button>
      </section>
      {/* <Outlet /> */}
    </div>
  );
}
