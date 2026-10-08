import { useEffect, useState } from 'react';

const lines = ['Every occasion, extraordinary.', 'Your moments, beautifully made.', 'Celebrations with a signature.'];
export function RotatingLines() {
  const [line, setLine] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => setLine(current => (current + 1) % lines.length), 6500);
    return () => window.clearInterval(timer);
  }, []);
  return <h2 className="rotating-heading"><span key={line}>{lines[line]}</span></h2>;
}