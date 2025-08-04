import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthService } from '../services/api';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const userData = await AuthService.register(formData); // Already the parsed data
    navigate("/"); // Redirect after successful signup
  } catch (err) {
    console.error("Signup failed", err);
  }
};




  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
      
      {error && (
        <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            required
            minLength={8}
          />
        </div>
        
        <button 
          type="submit" 
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
        >
          {isLoading ? 'Creating Account...' : 'Sign Up'}
        </button>
      </form>
      
      <p className="mt-6 text-center">
        Already have an account?{' '}
        <Link to="/login" className="text-blue-600 font-medium hover:underline">
          Log In
        </Link>
      </p>
    </div>
  );
}
export default Signup ;
// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthService } from '../services/api';

// function Signup() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');

//     try {
//       await AuthService.register(formData);
//       navigate('/');
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
      
//       {error && (
//         <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
//           {error}
//         </div>
//       )}
      
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium mb-1">Full Name</label>
//           <input
//             type="text"
//             className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//             value={formData.name}
//             onChange={(e) => setFormData({...formData, name: e.target.value})}
//             required
//           />
//         </div>
        
//         <div>
//           <label className="block text-sm font-medium mb-1">Email</label>
//           <input
//             type="email"
//             className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//             value={formData.email}
//             onChange={(e) => setFormData({...formData, email: e.target.value})}
//             required
//           />
//         </div>
        
//         <div>
//           <label className="block text-sm font-medium mb-1">Password</label>
//           <input
//             type="password"
//             className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//             value={formData.password}
//             onChange={(e) => setFormData({...formData, password: e.target.value})}
//             required
//             minLength={8}
//           />
//         </div>
        
//         <button 
//           type="submit" 
//           disabled={isLoading}
//           className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
//         >
//           {isLoading ? 'Creating Account...' : 'Sign Up'}
//         </button>
//       </form>
      
//       <p className="mt-6 text-center">
//         Already have an account?{' '}
//         <Link to="/login" className="text-blue-600 font-medium hover:underline">
//           Log In
//         </Link>
//       </p>
//     </div>
//   );
// }
// export default Signup ;