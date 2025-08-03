import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BookingPage from './pages/BookingPage';
import ConfirmationPage from './pages/ConfirmationPage';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/book/:hotelId" element={<BookingPage />} />
          <Route path="/confirmation/:id" element={<ConfirmationPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}