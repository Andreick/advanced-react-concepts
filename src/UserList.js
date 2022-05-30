import React, { useEffect, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'USERS_REQUEST':
      return { ...state, loading: true };
    case 'USERS_SUCCESS':
      return { ...state, users: action.payload, loading: false, error: '' };
    case 'USERS_FAIL':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default function UserList() {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    users: [],
    error: '',
  });

  const { loading, error, users } = state;

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    dispatch({ type: 'USERS_REQUEST' });
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const data = await response.json();
      dispatch({ type: 'USERS_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'USERS_FAIL', payload: error.message });
    }
  };

  return (
    <div className="main">
      <h1>Users</h1>
      <button onClick={loadUsers}>Reaload users</button>
      {loading ? (
        <div>Loading users...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.name}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
