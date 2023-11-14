import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { ROUTER } from './constants/router';
import { Cola } from './pages/cola';
import { Chips } from './pages/chips';


function App() {
  return (
    <div >
      <Routes>
        <Route  path={ROUTER.home} element={<Home/>}/>
        <Route path={ROUTER.cola} element={<Cola/>} />
        <Route path={ROUTER.chips} element={<Chips/>}/>
        <Route path={ROUTER.fastFood} element/>

      </Routes>
    </div>
  );
}

export default App;
