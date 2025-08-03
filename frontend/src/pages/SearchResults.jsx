import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HotelCard from '../components/HotelCard';
import { HotelService } from '../services/api';

 function SearchResults() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const searchHotels = async () => {
      try {
        setLoading(true);
        const searchParams = new URLSearchParams(location.search);
        const params = {
          location: searchParams.get('location'),
          minPrice: searchParams.get('minPrice'),
          maxPrice: searchParams.get('maxPrice'),
          minRating: searchParams.get('minRating')
        };
        
        const { data } = await HotelService.fetchHotels(params);
        setHotels(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    searchHotels();
  }, [location.search]);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-red-500 text-center py-8">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">
        {hotels.length} Properties Found
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>

      {hotels.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium">No properties found</h3>
          <p className="text-gray-600 mt-2">
            Try adjusting your search filters
          </p>
        </div>
      )}
    </div>
  );
}
export default SearchResults;