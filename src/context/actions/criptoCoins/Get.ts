import React from 'react';
import CriptoCardI from './../../../interfaces/CriptoCardI';


const Get = (data: CriptoCardI[], id: number) => (dispatch: React.Dispatch<any>) => {
    
    dispatch({
      type: 'CRIPTO_COINS_LOADING',
    });

    const FilterData = data.filter(element => Number(element.id) === id);

    dispatch({
      type: 'CRIPTO_COINS_GET_SUCCESS',
      payload: FilterData[0],
    });
    
};

export default Get;