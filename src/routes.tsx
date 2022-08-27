import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Clients } from './pages/Clients';
import { Employees } from './pages/Employees';
import { Guarantees } from './pages/Guarantees';
import { Home } from './pages/Home';
import { Layout } from './pages/Layout';
import { Login } from './pages/Login';
import { ServiceOrders } from './pages/ServiceOrders';
import { Users } from './pages/Users';

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/service-orders" element={<ServiceOrders />} />
          <Route path="/guarantees" element={<Guarantees />} />
          <Route path="/users" element={<Users />} />
          <Route path="/employees" element={<Employees />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
