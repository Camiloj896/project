import React from 'react';

const ResetFilters = () => (dispatch: React.Dispatch<any>) => {
    
    dispatch({
      type: 'CRIPTO_COINS_RESET_DATA',
    });
    
};

export default ResetFilters;