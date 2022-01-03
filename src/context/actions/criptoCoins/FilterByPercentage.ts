import React from 'react';
import FilterI from '../../../interfaces/FilterI';
import CriptoCardI from '../../../interfaces/CriptoCardI';
import BubbleSort from './../../../helpers/bubbleSort';


const FilterByPercentage = (filterOption: FilterI, data: CriptoCardI[]) => (dispatch: React.Dispatch<any>) => {
    
    dispatch({
      type: 'CRIPTO_COINS_LOADING',
    });

    BubbleSort(data, filterOption.orderBy).then(newData => {
        dispatch({
            type: 'CRIPTO_COINS_FILTER',
            payload: newData,
        });
    });
    
};

export default FilterByPercentage;