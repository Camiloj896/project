import { useReducer } from 'react';
import { GlobalContext } from './GlobalContext';
import { CriptoCoinsReducer } from './reducer/CriptoCoins';
import { FilterReducer } from './reducer/Filter';
import CRIPTO_COINS_INITIAL_STATE from './initial-state/CriptoCoins';
import FILTER_INITIAL_STATE from './initial-state/Filter';


export const GlobalProvider: React.FC = ({ children }) => {

    const [criptoCoinState, criptoDispatch] = useReducer(CriptoCoinsReducer, CRIPTO_COINS_INITIAL_STATE);
    const [filterState, filterDispatch] = useReducer(FilterReducer, FILTER_INITIAL_STATE);

    return (
        <GlobalContext.Provider value={{
            criptoCoinState,
            criptoDispatch,
            filterState,
            filterDispatch
        }}>
            { children }
        </GlobalContext.Provider>
    );
}