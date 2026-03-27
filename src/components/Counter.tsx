import { useState } from 'preact/hooks';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div class="counter">
      <h3>Interactive Island</h3>
      <p class="counter-description">
        This component is a <strong>Preact island</strong> — it's hydrated
        client-side while the rest of the page is static HTML.
      </p>
      <div class="counter-controls">
        <button onClick={() => setCount(count - 1)} aria-label="Decrement">
          −
        </button>
        <span class="counter-value">{count}</span>
        <button onClick={() => setCount(count + 1)} aria-label="Increment">
          +
        </button>
      </div>
      <p class="counter-hint">
        Deploy count: <strong>{count}</strong>
      </p>
    </div>
  );
}
