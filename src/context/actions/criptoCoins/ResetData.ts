import React from 'react';

const ResetData = () => (dispatch: React.Dispatch<any>) => {
    
    dispatch({
      type: 'CRIPTO_COINS_RESET_DATA',
    });
    
};

export default ResetData;