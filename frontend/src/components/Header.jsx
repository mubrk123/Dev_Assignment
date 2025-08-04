import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AuthService } from '../services/api';

function Header() {

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

 useEffect(() => {
  const updateUser = () => setUser(AuthService.getCurrentUser());

    window.addEventListener('authChange', updateUser);
    return () => window.removeEventListener('authChange', updateUser);
  // const storedUser = localStorage.getItem('user');
  // try {
  //   if (storedUser && storedUser !== "undefined") {
  //     setUser(JSON.parse(storedUser));
  //   }
  // } catch (err) {
  //   console.error("Error parsing user from localStorage:", err);
  //   localStorage.removeItem('user');
  // }
}, []);


  const handleLogout = () => {
    window.dispatchEvent(new Event('authChange'));
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  return (
    <header className="bg-gray-100 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-2xl font-bold text-blue-600">StayInn</Link>
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <span className="font-medium">Hi,{user.name}</span>
              <button onClick={handleLogout} title="Logout">
                {/* //<img src="/icons/logout.svg" alt="Logout" className="w-5 h-5" /> */}
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
              <Link to="/signup" className="text-blue-600 hover:underline">Signup</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
export default Header ;