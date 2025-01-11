interface CoinData {
  item: {
    id: string
    name: string
    symbol: string
    thumb: string
    data: {
      price: string
      price_change_percentage_24h: {
        usd: number
      }
      sparkline: string
    }
  }
}

interface TrendingResponse {
  coins: CoinData[]
}

export async function getCoinData() {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/search/trending')
    const data: TrendingResponse = await response.json()
    
    return data.coins.map(coin => ({
      id: coin.item.id,
      name: coin.item.name,
      symbol: coin.item.symbol.toUpperCase(),
      price: coin.item.data.price,
      priceChange: coin.item.data.price_change_percentage_24h?.usd || 0,
      image: coin.item.thumb,
      sparkline: coin.item.data.sparkline
    }))
  } catch (error) {
    console.error('Error fetching coin data:', error)
    return []
  }
}

