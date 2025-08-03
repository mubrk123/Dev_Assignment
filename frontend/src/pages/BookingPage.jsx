import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DatePicker from '../components/DatePicker';
import { BookingService } from '../services/api';

function BookingPage() {
  const { hotelId } = useParams();
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleBooking = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      const response = await BookingService.createBooking({
        hotelId,
        ...bookingData
      });
      
      navigate(`/confirmation/${response.data.id}`);
    } catch (err) {
      setError(err.response?.data?.error || 'Booking failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">Complete Your Booking</h2>
      
      {error && <div className="text-red-500 mb-4">{error}</div>}
      
      <DatePicker 
        onChange={(dates) => setBookingData(prev => ({
          ...prev,
          checkIn: dates.checkIn,
          checkOut: dates.checkOut
        }))} 
      />
      
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Guests</h3>
        <select
          value={bookingData.guests}
          onChange={(e) => setBookingData(prev => ({
            ...prev,
            guests: parseInt(e.target.value)
          }))}
          className="border p-2 rounded w-full"
        >
          {[1, 2, 3, 4, 5].map(num => (
            <option key={num} value={num}>{num} {num === 1 ? 'guest' : 'guests'}</option>
          ))}
        </select>
      </div>
      
      <button
        onClick={handleBooking}
        disabled={!bookingData.checkIn || isLoading}
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {isLoading ? 'Processing...' : 'Confirm Booking'}
      </button>
    </div>
  );
}
export default BookingPage;
