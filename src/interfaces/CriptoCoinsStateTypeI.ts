import CriptoCardI from './CriptoCardI';

type CriptoCoinsInitialStateTypeI = {
    loading: boolean,
    error: any,
    data: CriptoCardI[],
    filterData: CriptoCardI[],
    biggestNumber: number;
    filter: boolean
    criptoCoin: CriptoCardI,
}

export default CriptoCoinsInitialStateTypeI;