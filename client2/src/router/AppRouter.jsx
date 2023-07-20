import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Layout from '../pages/Layout/Layout';
import PhonesPage from '../pages/PhonesPage/PhonesPage';
import ProductPage from '../pages/ProductPage/ProductPage';


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/phones' element={<PhonesPage />} />
        <Route path='/phone/:id' element={<ProductPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
