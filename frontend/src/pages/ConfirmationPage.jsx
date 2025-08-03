import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BookingService } from '../services/api';

function ConfirmationPage() {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const { data } = await BookingService.getBookingDetails(id);
        setBooking(data);
      } catch (error) {
        console.error('Failed to fetch booking:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchBooking();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
        <h2 className="text-2xl font-bold">Booking Confirmed!</h2>
        <p>Your reservation ID: {booking?.id}</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Booking Details</h3>
        <p><strong>Dates:</strong> {booking?.checkIn} to {booking?.checkOut}</p>
        <p><strong>Guests:</strong> {booking?.guests}</p>
        <p><strong>Total:</strong> €{booking?.totalPrice}</p>
      </div>
    </div>
  );
}
export default  ConfirmationPage;