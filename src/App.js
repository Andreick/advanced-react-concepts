import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import NewCounter from './NewCounter';
import UserInfo from './UserInfo';
import NewUserInfo from './NewUserInfo';
import Layout from './Layout';
import MainContent from './MainContent';
import UserList from './UserList';
import { BrowserRouter, Routes, Link, Route, NavLink } from 'react-router-dom';
import ProductPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div className="pages">
        <div className="page-header">
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>{' '}
          <NavLink to="/products" activeClassName="active">
            Products
          </NavLink>{' '}
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </div>
        <div className="page-content">
          <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
