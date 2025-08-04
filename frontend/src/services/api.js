// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8787',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true // Ensures cookies and credentials are sent with requests
});

// Request Interceptor: Attach JWT token if available
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.withCredentials = true;
  return config;
});

// Response Interceptor: Handle 401 Unauthorized
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login'; // Redirect to login on token expiry
    }
    return Promise.reject(error);
  }
);

// Authentication Service
export const AuthService = {
  register: async (userData) => {
    const response = await api.post('/register', userData);
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.user));
    window.dispatchEvent(new Event('authChange'));
    return response.data;
  },
  login: async (credentials) => {
    const response = await api.post('/login', credentials);
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.user));
    window.dispatchEvent(new Event('authChange'));
    return response.data;
  },
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.dispatchEvent(new Event('authChange'));
    delete api.defaults.headers.common['Authorization'];
  },
 getCurrentUser: () => {
  const user = localStorage.getItem('user');
  if (!user || user === 'undefined') return null;
  try {
    return JSON.parse(user);
  } catch (e) {
    console.error('Invalid JSON in user localStorage:', user);
    return null;
  }
}

};

// Hotel Service
export const HotelService = {
  fetchHotels: (params) => api.get('/search', { params }),
  fetchLocations: async () => {
    try {
      const { data } = await api.get('/hotels');
      return data.locations || [];
    } catch (error) {
      console.error('Failed to fetch locations:', error);
      return [];
    }
  }
};

// Booking Service
export const BookingService = {
  createBooking: (data) => api.post('/bookings', data),
  getUserBookings: () => api.get('/bookings'),
  getBookingDetails: (id) => api.get(`/bookings/${id}`)
};

export default api;