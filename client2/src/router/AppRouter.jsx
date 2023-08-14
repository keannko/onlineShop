import { Route, Routes } from 'react-router-dom';
import AdminPage from '../pages/AdminPage/AdminPage';
import Home from '../pages/Home/Home';
import Layout from '../pages/Layout/Layout';
import OrderProcess from '../pages/OrderProcess/OrderProcess';
import PhonesPage from '../pages/PhonesPage/PhonesPage';
import ProductPage from '../pages/ProductPage/ProductPage';
import Test from '../pages/Test/Test';


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/phones' element={<PhonesPage />} />
        <Route path='/phones/:brand' element={<PhonesPage />} />
        <Route path='/phone/:id' element={<ProductPage />} />
        <Route path='/orderprocess' element={<OrderProcess />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/test' element={<Test />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
