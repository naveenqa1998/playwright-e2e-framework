export function calculateStats(prices: number[]) {
  const total = prices.reduce((a, b) => a + b, 0);
  const avg = total / prices.length;
  const min = Math.min(...prices);
  const max = Math.max(...prices);

  return { total, avg, min, max };
}

export function getTopN(products: any[], n: number) {
  return products.sort((a, b) => b.price - a.price).slice(0, n);
}