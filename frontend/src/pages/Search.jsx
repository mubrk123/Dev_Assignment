import { useState } from 'react';
import HotelCard from '../components/HotelCard';
import SearchBar from '../components/SearchBar';
import { fetchHotels } from '../services/api';

export default function Search() {
  const [hotels, setHotels] = useState([]);

  const handleSearch = async (filters) => {
    const { data } = await fetchHotels(filters);
    setHotels(data);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {hotels.map(hotel => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}