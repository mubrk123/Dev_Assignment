import { useState } from 'react';
import { motion } from 'framer-motion';

function HotelCard({
  imageUrl,
  hotelName,
  location,
  price,
  currency = '€',
  link = '#',
  rating = null,
  amenities = [],
  isFeatured = false
}) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <article
      role="article"
      className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 w-full max-w-md mx-auto"
    >
      {isFeatured && (
        <span className="absolute top-3 left-3 z-10 bg-yellow-400 text-xs font-semibold text-black px-2 py-1 rounded shadow">
          🌟 Featured
        </span>
      )}

      <figure className="relative w-full h-52 sm:h-64 md:h-72 bg-gray-200 dark:bg-gray-700 overflow-hidden">
        {!imgLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gray-300 dark:bg-gray-600" />
        )}
        <img
          src={imageUrl}
          alt={hotelName}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            imgLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </figure>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="p-5 flex flex-col justify-between h-full"
      >
        <header className="mb-2">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            {hotelName}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-300">{location}</p>
        </header>

        {rating !== null && (
          <div className="mb-2 flex items-center gap-1 text-sm text-yellow-500">
            <span aria-label="Rating">{'★'.repeat(Math.floor(rating))}</span>
            <span className="text-gray-500 dark:text-gray-400 ml-1">({rating})</span>
          </div>
        )}

        {amenities.length > 0 && (
          <ul className="mb-3 flex flex-wrap gap-2 text-xs text-gray-600 dark:text-gray-300">
            {amenities.map((amenity, idx) => (
              <li
                key={idx}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full"
              >
                {amenity}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex justify-between items-center">
          <div className="text-base font-semibold text-gray-900 dark:text-gray-100">
            {currency}
            {price}
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              {' '}
              {/* i18n placeholder */}
              / night
            </span>
          </div>
          <a
            href={link}
            role="button"
            className="ml-auto inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none rounded-lg transition"
          >
            {/* i18n placeholder */}
            Book Now
          </a>
        </div>
      </motion.div>
    </article>
  );
}

export default HotelCard;
