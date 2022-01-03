import CriptoCardI from './../../interfaces/CriptoCardI';
import CriptoCoinsInitialStateTypeI from './../../interfaces/CriptoCoinsStateTypeI';

type CriptoCardActions = 
    | { type: 'CRIPTO_COINS_LOADING' }
    | { type: 'CRIPTO_COINS_LOAD_SUCCESS', payload: CriptoCardI[] }
    | { type: 'CRIPTO_COINS_FILTER', payload: CriptoCardI[] }
    | { type: 'CRIPTO_COINS_RESET_DATA', payload: CriptoCardI[] }
    | { type: 'CRIPTO_COINS_GET_SUCCESS', payload: CriptoCardI }
    | { type: 'CRIPTO_COINS_BIGGEST_NUMBER', payload: number }
    | { type: 'CRIPTO_COINS_LOAD_ERROR' };


export const CriptoCoinsReducer = ( state: CriptoCoinsInitialStateTypeI, action: CriptoCardActions ): CriptoCoinsInitialStateTypeI  => {
    switch ( action.type ) {

        case 'CRIPTO_COINS_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'CRIPTO_COINS_LOAD_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload,
                filter: false
            }
        case 'CRIPTO_COINS_GET_SUCCESS':
            return {
                ...state,
                loading: false,
                criptoCoin: action.payload
            }
        case 'CRIPTO_COINS_RESET_DATA':
            return {
                ...state,
                filterData: [],
                filter: false
            }
        case 'CRIPTO_COINS_FILTER':
            return {
                ...state,
                loading: false,
                filterData: action.payload,
                filter: true
            }
        case 'CRIPTO_COINS_BIGGEST_NUMBER':
            return {
                ...state,
                biggestNumber: action.payload
            }
        case 'CRIPTO_COINS_LOAD_ERROR':
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}