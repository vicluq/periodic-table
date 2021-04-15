export default function filterByAtomicNumber(data, numbers) {
  const elements = numbers.map((atomicNumber) => {
    if (atomicNumber === -1) return { symbol: "lan" };
    else if (atomicNumber === -2) return { symbol: "act" };
    return data[atomicNumber - 1];
  });

  return elements;
}
