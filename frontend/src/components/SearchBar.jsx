import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api  from '../services/api'; // Ensure this points to the correct file
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const fetchLocations = async (setLocations) => {
  try {
    const { data } = await api.get('/hotels', {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const locations = [...new Set(
      data.hotels.map(hotel => hotel.location.split(',')[0].trim())
    )];

    setLocations(locations);
  } catch (err) {
    console.error('Failed to fetch locations:', err);
    setLocations([]);
  }
};

function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const [price, setPrice] = useState(2000);
  const [rating, setRating] = useState(0);
  const [locations, setLocations] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchLocations(setLocations);
  }, []);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchInput) params.append('location', searchInput);
    if (price < 2000) params.append('maxPrice', price);
    if (rating > 0) params.append('minRating', rating);
    navigate(`/search-results?${params.toString()}`);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">

        {/* Location Search with Dropdown */}
        <div className="relative">
          <label className="block text-sm font-medium mb-1">Location</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Where in France?"
              className="w-full p-2 border rounded"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
            />
            {showSuggestions && (
              <div className="absolute z-10 w-full mt-1 bg-white border rounded shadow-lg max-h-60 overflow-auto">
                {locations
                  .filter(loc => loc.toLowerCase().includes(searchInput.toLowerCase()))
                  .map((location, index) => (
                    <div
                      key={index}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSearchInput(location);
                        setShowSuggestions(false);
                      }}
                    >
                      {location}
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>

        {/* Price Slider */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Max Price: €{price}
          </label>
          <Slider
            min={0}
            max={2000}
            step={50}
            value={price}
            onChange={setPrice}
            trackStyle={{ backgroundColor: '#3b82f6', height: 6 }}
            handleStyle={{
              borderColor: '#3b82f6',
              height: 20,
              width: 20,
              marginTop: -7,
            }}
            railStyle={{ backgroundColor: '#e5e7eb', height: 6 }}
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm font-medium mb-1">Min Rating</label>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className={`text-2xl ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        {/* Search Button */}
        <div>
          <button
            onClick={handleSearch}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Search Hotels
          </button>
        </div>
      </div>
    </div>
  );
}
export default SearchBar;