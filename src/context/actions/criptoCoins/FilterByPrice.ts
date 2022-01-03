import React from 'react';
import FilterI from '../../../interfaces/FilterI';
import CriptoCardI from './../../../interfaces/CriptoCardI';


const FilterByPrice = (filterOption: FilterI, data: CriptoCardI[]) => (dispatch: React.Dispatch<any>) => {
    
    dispatch({
      type: 'CRIPTO_COINS_LOADING',
    });

    const { priceMin, priceMax } = filterOption;
    let FilterData;

    if (priceMax) {
      FilterData = data.filter(element => (Math.round(Number(element.price_usd)) >= priceMin && Math.round(Number(element.price_usd)) <= priceMax));
    } else {
      FilterData = data.filter(element => Math.round(Number(element.price_usd)) >= priceMin);
    }

    dispatch({
      type: 'CRIPTO_COINS_FILTER',
      payload: FilterData,
    });
    
};

export default FilterByPrice;