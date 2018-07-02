import { findIndex } from 'lodash-es';

export const http = (url: string, options?: RequestInit): Promise<Response> =>
  fetch(url, options);

export const throttle = (callback, throttleTime) => {
  let timeout;
  let lastExecution = Date.now() - throttleTime;

  return (...args) => {
    if (!lastExecution) {
      run(Date.now());
    }
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const now = Date.now();
      if (now - lastExecution >= throttleTime) run(now);
    }, throttleTime - (Date.now() - lastExecution));

    function run(now) {
      callback(...args);
      lastExecution = now;
    }
  };
};

export const debounce = (callback, debounceTime) => {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback(...args), debounceTime);
  };
};

export const createOrUpdate = (array: Product[], { id, ...item }: Product) => {
  const index = findIndex(array, i => i.id === id);
  const product = !!~index ? { ...array[index], ...item } : { id, ...item };
  return !!~index
    ? [...array.slice(0, index), product, ...array.slice(index + 1)]
    : [product, ...array];
};
