import React from 'react';
import axiosInstance from './../../../helpers/axiosInstance';
import biggestNumber from './../../../helpers/biggestNumber';

const GetAll = () => (dispatch: React.Dispatch<any>) => {
    
    dispatch({
      type: 'CRIPTO_COINS_LOADING',
    });

    axiosInstance().get("tickers/")
    .then(({ data }) => {
      biggestNumber(data.data, 'price_usd').then(number => {
        dispatch({
          type: 'CRIPTO_COINS_BIGGEST_NUMBER',
          payload: number,
        });
      });

      dispatch({
        type: 'CRIPTO_COINS_LOAD_SUCCESS',
        payload: data.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: 'CRIPTO_COINS_LOAD_ERROR',
        payload: err.response,
      });
    });
};

export default GetAll;