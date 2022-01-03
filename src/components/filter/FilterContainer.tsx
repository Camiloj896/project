import { useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { FilterOptions, PERCENTAGE, orderByOptions, PRICE } from './Constants';
import SaveFilters from './../../context/actions/filter/save';
import FilterByPrice from './../../context/actions/criptoCoins/FilterByPrice';
import FilterByPercentage from './../../context/actions/criptoCoins/FilterByPercentage';

import Form from 'react-bootstrap/Form';
import Button from './../button/Button';
import RangeSlider from 'react-bootstrap-range-slider';


const FilterContainer: React.FC = () => {

    const { filterState, filterDispatch, criptoCoinState, criptoDispatch } = useContext(GlobalContext);

    const [ formState, setFormState ] = useState(filterState);

    const handleInputChange = (event: any) => {
        setFormState({
            ...formState,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = () => {
        SaveFilters(formState)(filterDispatch);
        if (formState.type === PERCENTAGE) {
            FilterByPercentage(formState, criptoCoinState.data)(criptoDispatch);
        } else if (formState.type === PRICE) {
            FilterByPrice(formState, criptoCoinState.data)(criptoDispatch);
        }        
    }

    return (
        <>
            <Form.Group className='mb-3'>
                <Form.Select onChange={handleInputChange} name='type' value={formState.type}>
                    { FilterOptions.map((option, index) => (
                        <option value={option.value} key={index}> {option.text} </option>
                    ))}
                </Form.Select>            
            </Form.Group>
            { formState.type === PERCENTAGE && <Form.Group className='mb-3'>
                <Form.Label htmlFor="orderBy">Order By</Form.Label>
                <Form.Select onChange={handleInputChange} name='orderBy' value={formState.orderBy}>
                    { orderByOptions.map((option, index) => (
                        <option value={option.value} key={index}> {option.text} </option>
                    ))}
                </Form.Select>
            </Form.Group>}
            { formState.type === PRICE && <Form.Group className='mb-3'>
                <Form.Label htmlFor='price'>Price USD (Min)</Form.Label>
                <RangeSlider
                    value={formState.priceMin}
                    onChange={handleInputChange}
                    inputProps={{name: 'priceMin'}}
                    min={0}
                    max={Number(criptoCoinState.biggestNumber)}
                    variant='info'
                />
            </Form.Group>}
            { formState.type === PRICE && <Form.Group className='mb-3'>
                <Form.Label htmlFor='price'>Price USD (Max)</Form.Label>
                <RangeSlider
                    value={formState.priceMax}
                    onChange={handleInputChange}
                    inputProps={{name: 'priceMax'}}
                    min={Number(formState.priceMin)}
                    max={Number(criptoCoinState.biggestNumber)}
                    variant='info'
                />
            </Form.Group>}
            { formState.type !== null && <Button title='Done' position='end' handleClick={handleSubmit} />}
        </>
    );
}

export default FilterContainer;