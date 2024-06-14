import { beforeEach, describe, expect, it } from 'vitest';

import { useCounterStore } from '../../../stores/counter';
import { createPinia, setActivePinia } from 'pinia';

describe('Count store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('should have a default count of 0', () => {
    const { count } = useCounterStore();
    expect(count).toBe(0);
  });

  it('should increment the count', () => {
    const counterStore = useCounterStore();

    counterStore.increment();

    expect(counterStore.count).toBe(1);
  });

  it('should decrement the count', () => {
    const counterStore = useCounterStore();

    counterStore.decrement();

    expect(counterStore.count).toBe(-1);
  });
});
