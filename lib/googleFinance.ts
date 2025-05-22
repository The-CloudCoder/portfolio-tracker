export async function fetchGoogleFinanceData(symbol: string): Promise<{ peRatio: number; earnings: number } | null> {
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbz2_C-0-AT2NCTFVrCdo_rE1GhyZulOmH1Uh7KeyZqWhcXkc9ncofIZVCc7HCOt1G4/exec');
    const stockData = await response.json();

    const matched = stockData.find((stock: any) => stock.stockName.toLowerCase() === symbol.toLowerCase());

    if (matched) {
      return {
        peRatio: matched.peRatio,
        earnings: matched.eps
      };
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}
