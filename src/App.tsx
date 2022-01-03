import { GlobalProvider } from './context/GlobalProvider';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import RoutesApp from './routes';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          {RoutesApp.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />} 
            />
          ))}
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
