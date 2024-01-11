export function fetchCount(amount = 1) {
  return new Promise(async (resolve) => {
    const response = await fetch("htttp://localhost:8000");
    const data = await response.data;
    resolve(data);
  });
}
