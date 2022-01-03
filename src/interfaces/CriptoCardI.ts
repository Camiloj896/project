export default interface CriptoCardI {
    id: number | string;
    symbol: string;
    name: string;
    nameid?: string;
    rank?: number;
    price_usd: number | string;
    percent_change_24h: number | string;
    percent_change_1h: number | string;
    percent_change_7d: number | string;
    market_cap_usd?: number | string;
    volume24?: number | string;
    volume24a?:  number | string;
    csupply?: string;
    price_btc: number | string;
    tsupply?: string;
    msupply?: string;
};