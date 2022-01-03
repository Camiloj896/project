import { createContext } from 'react';
import PropsGlobalProviderI from '../interfaces/PropsGlobalProviderI';

export const GlobalContext = createContext<PropsGlobalProviderI>({} as PropsGlobalProviderI);