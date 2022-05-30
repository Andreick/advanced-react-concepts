import React from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';

export default function ProductsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  if (id === '3') {
    return <Navigate to="/" />;
  }

  const gotoAboutPage = () => {
    navigate('/about');
  };

  return (
    <div>
      Products Page
      {id ? (
        <div>
          Product ID : {id}
          <button onClick={gotoAboutPage}>See about page</button>
        </div>
      ) : (
        <ul>
          <li>
            <Link to="/products/1">Product 1</Link>
          </li>
          <li>
            <Link to="/products/2">Product 2</Link>
          </li>
          <li>
            <Link to="/products/3">Product 3</Link>
          </li>
        </ul>
      )}
    </div>
  );
}
