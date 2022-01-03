import React from "react";
import FilterI from "../../../interfaces/FilterI";

const SaveFilters = (data: FilterI) => (dispatch: React.Dispatch<any>) => {
    
  dispatch({
    type: 'FILTER_LOAD_SUCCESS',
    payload: data,
  });

};

export default SaveFilters;