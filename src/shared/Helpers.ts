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
