export interface PriceSpread {
    topo: {
        platform: string,
        server: string
    },
    spreadProfilePrices: [
    {
        spreadProfile: string,
        bidSpread: number,
        askSpread: number,
        bid: number,
        ask: number
    },
    {
        spreadProfile: string,
        bidSpread: number,
        askSpread: number,
        bid: number,
        ask: number
    },
    {
        spreadProfile: string,
        bidSpread: number,
        askSpread: number,
        bid: number,
        ask: number
    }
    ],
    ts: number
}