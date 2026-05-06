// write delay function with promise
const delay = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));
