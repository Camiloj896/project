import FilterI from './../../interfaces/FilterI';
import FILTER_INITIAL_STATE from './../initial-state/Filter';

type FilterActions = 
    | { type: 'FILTER_LOAD_SUCCESS', payload: FilterI }
    | { type: 'FILTER_RESET_DATA' }


export const FilterReducer = ( state: FilterI, action: FilterActions ): FilterI  => {
    switch ( action.type ) {

        case 'FILTER_LOAD_SUCCESS':
            return {
                ...state,
                type: action.payload.type,
                orderBy: action.payload.orderBy,
                priceMin: action.payload.priceMin,
                priceMax: action.payload.priceMax,
            }
        case 'FILTER_RESET_DATA':
            return {
                ...FILTER_INITIAL_STATE,                
            }
        default:
            return state;
    }
}