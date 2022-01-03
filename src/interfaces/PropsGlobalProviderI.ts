import CriptoCoinsInitialStateTypeI from './CriptoCoinsStateTypeI';
import FilterI from './FilterI';

export default interface GlobalContectProps {
    criptoCoinState: CriptoCoinsInitialStateTypeI;
    criptoDispatch: React.Dispatch<any>;
    filterState: FilterI;
    filterDispatch: React.Dispatch<any>;
}