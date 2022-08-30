import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Clients,
  ClientOverview,
  Employees,
  Guarantees,
  Home,
  Layout,
  Login,
  ServiceOrders,
  Users,
  UserOverview,
} from './Pages/';

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/clients/:id/overview" element={<ClientOverview />} />
          <Route path="/service-orders" element={<ServiceOrders />} />
          <Route path="/guarantees" element={<Guarantees />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id/overview" element={<UserOverview />} />
          <Route path="/employees" element={<Employees />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
