import { Link } from 'react-router-dom';
import { AuthService } from '../services/api';

export default function Header() {
  const user = AuthService.getCurrentUser();

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">FranceHolidays</Link>
        <nav>
          <ul className="flex items-center space-x-6">
            {user ? (
              <li className="flex items-center space-x-4">
                <span className="hidden sm:inline">Hello, {user.name}</span>
                <button
                  onClick={AuthService.logout}
                  className="px-3 py-1 bg-blue-700 rounded hover:bg-blue-800 transition"
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/login" className="hover:underline">Login</Link>
                </li>
                <li>
                  <Link to="/signup" className="hover:underline">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}