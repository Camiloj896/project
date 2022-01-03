import CriptoCoinsInitialStateTypeI from '../../interfaces/CriptoCoinsStateTypeI';

const CRIPTO_COINS_INITIAL_STATE: CriptoCoinsInitialStateTypeI = {
    loading: false,
    error: null,
    data: [],
    filterData: [],
    biggestNumber: 0,
    filter: false,
    criptoCoin: {
        id: 0,
        symbol: '',
        name: '',
        nameid: '',
        rank: 0,
        price_usd: 0,
        percent_change_24h: 0,
        percent_change_1h: 0,
        percent_change_7d: 0,
        market_cap_usd: '',
        volume24: 0,
        volume24a: 0,
        csupply: '',
        price_btc: 0,
        tsupply: '',
        msupply: '',
    }
};

export default CRIPTO_COINS_INITIAL_STATE;