import Home from './../layout/home/Home';
import CriptoInformation from './../layout/cripto-information/CriptoInformation';
import NotFound from './../layout/not-found/NotFound';

const Routes = [
    {
        path: '/',
        component: Home, 
    },
    {
        path: '/cripto-information/:id',
        component: CriptoInformation, 
    },
    {
        path: '*',
        component: NotFound, 
    }
];

export default Routes;
