import { useState } from 'react';

export function useForceUpdate() {
  const [_, setState] = useState(false);
  return () => setState((val) => !val);
}
