// components/HomePage.js
import { motion } from 'framer-motion';
import HotelCard from '../components/HotelCard';
import SearchBar from '../components/SearchBar';

// Import new premium icons
import { HotelIcon, MedalIcon, ShieldIcon, GlobeIcon, QuoteIcon } from './PremiumIcons';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-ivory-linen">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative h-screen flex items-center justify-center pt-16"
      >
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/images/hotel5.jpg" 
            alt="Luxury French Hotel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* France Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-[20vw] font-bold text-white/10 tracking-widest font-serif">
            FRANCE
          </div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-ivory/90 backdrop-blur-md p-8 rounded-xl shadow-xl border border-gold-light"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight tracking-wide">
              Discover the Elegance <br />of France
            </h1>
            <p className="text-white/80 font-serif text-xl mb-8 max-w-2xl mx-auto">
              Experience luxury stays in the heart of French sophistication
            </p>

            <div className="mt-6">
              <SearchBar />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <section className="py-20 bg-ivory">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-12">
            <div className="h-px w-32 bg-gold mb-4"></div>
            <h2 className="text-3xl font-serif font-bold text-center text-navy tracking-wider small-caps">
              Why Choose Us
            </h2>
            <div className="h-px w-32 bg-gold mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <HotelIcon className="h-12 w-12 text-gold" />, title: "10,000+ Hotels", desc: "Wide selection across France" },
              { icon: <MedalIcon className="h-12 w-12 text-gold" />, title: "Best Prices", desc: "Guaranteed lowest rates" },
              { icon: <ShieldIcon className="h-12 w-12 text-gold" />, title: "Secure Booking", desc: "SSL protected payments" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-md text-center border border-ivory-dark relative damask-pattern"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-serif font-semibold mb-2 text-navy">{item.title}</h3>
                <p className="text-navy/80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="py-20 container mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <div className="h-px w-32 bg-gold mb-4"></div>
          <h2 className="text-3xl font-serif font-bold text-center text-navy tracking-wider small-caps">
            Featured Hotels
          </h2>
          <div className="h-px w-32 bg-gold mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredHotels.map((hotel, i) => (
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <HotelCard
                hotelName={hotel.name}
                imageUrl={hotel.image}
                location={hotel.location}
                price={hotel.price}
                currency="€"
                rating={hotel.rating}
                isFeatured={hotel.id === 1}
                link={`/book/${hotel.id}`}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-ivory">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-12">
            <div className="h-px w-32 bg-gold mb-4"></div>
            <h2 className="text-3xl font-serif font-bold text-center text-navy tracking-wider small-caps">
              Guest Testimonials
            </h2>
            <div className="h-px w-32 bg-gold mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-xl shadow-md relative"
              >
                <QuoteIcon className="absolute top-4 left-4 text-gold/30 h-12 w-12" />
                <div className="flex items-center mb-4">
                  <div className="relative">
                    <img 
                      src={testimonial.avatar} 
                      className="w-16 h-16 rounded-full mr-4 border-2 border-gold p-1" 
                      alt={testimonial.name}
                    />
                    <div className="absolute -bottom-1 -right-1 bg-gold rounded-full p-1">
                      <MedalIcon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-navy">{testimonial.name}</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, index) => (
                        <MedalIcon 
                          key={index} 
                          className={`h-5 w-5 ${
                            index < testimonial.rating ? 'text-gold' : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-navy/80 italic pl-8">"{testimonial.comment}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto border border-gold rounded-lg p-8 bg-ivory/10 backdrop-blur-sm relative">
            <div className="absolute inset-0 border border-gold/30 rounded-lg pointer-events-none"></div>
            
            <h2 className="text-3xl font-serif font-bold mb-4 text-gold">Exclusive Travel Offers</h2>
            <p className="mb-8 text-ivory max-w-md mx-auto">
              Subscribe to receive premium deals and travel inspiration
            </p>
            <div className="flex max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 rounded-l-lg text-navy focus:outline-none"
              />
              <button className="bg-gradient-to-b from-gold to-gold-dark text-navy font-serif px-6 py-3 rounded-r-lg transition hover:opacity-90">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 fleur-pattern pointer-events-none"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <GlobeIcon className="h-10 w-10 text-gold mr-2" />
            <span className="text-2xl font-serif font-bold text-gold">
              FranceHolidays
            </span>
          </div>
          <div className="text-ivory/80 mb-6 max-w-2xl mx-auto">
            Experience the elegance of France with our curated luxury accommodations
          </div>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-ivory hover:text-gold transition hover:underline underline-offset-4 decoration-gold">Destinations</a>
            <a href="#" className="text-ivory hover:text-gold transition hover:underline underline-offset-4 decoration-gold">Deals</a>
            <a href="#" className="text-ivory hover:text-gold transition hover:underline underline-offset-4 decoration-gold">About</a>
            <a href="#" className="text-ivory hover:text-gold transition hover:underline underline-offset-4 decoration-gold">Contact</a>
          </div>
          <div className="mt-8 pt-8 border-t border-gold/20 text-ivory/60 text-sm">
            © {new Date().getFullYear()} FranceHolidays. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

// Mock data
const featuredHotels = [
  {
    id: 1,
    name: "Hotel Le Meurice",
    location: "Paris",
    price: 320,
    image: "/images/hotel-1.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Ritz Carlton Lyon",
    location: "Lyon",
    price: 250,
    image: "/images/hotel-2.jpg",
    rating: 4
  },
  {
    id: 3,
    name: "Hotel Martinez",
    location: "Cannes",
    price: 280,
    image: "/images/Hotel3.jpg",
    rating: 5
  },
  {
    id: 4,
    name: "Château de Versailles",
    location: "Versailles",
    price: 420,
    image: "/images/hotel-4.jpg",
    rating: 5
  },
  {
    id: 5,
    name: "Hotel du Cap-Eden-Roc",
    location: "Antibes",
    price: 850,
    image: "/images/hotel-5.jpg",
    rating: 5
  },
  {
    id: 6,
    name: "Le Bristol Paris",
    location: "Paris",
    price: 720,
    image: "/images/hotel-6.jpg",
    rating: 5
  },
];

const testimonials = [
  {
    name: "Sophie Martin",
    rating: 5,
    comment: "The elegance of our Parisian hotel exceeded all expectations. Truly a magical experience that captured the essence of French luxury.",
    avatar: "/images/avatar1.jpg"
  },
  {
    name: "Jean-Luc Bernard",
    rating: 5,
    comment: "From the impeccable service to the breathtaking views of the Riviera, every moment felt like a scene from a classic French film.",
    avatar: "/images/avatar2.jpg"
  },
  {
    name: "Élise Dubois",
    rating: 4,
    comment: "The attention to detail in our Lyon accommodation was remarkable. The gold accents and classic furnishings transported us to another era.",
    avatar: "/images/avatar3.jpg"
  },
  {
    name: "Antoine Moreau",
    rating: 5,
    comment: "Staying at the Château was like stepping into a royal residence. The damask patterns and vintage touches created an atmosphere of timeless elegance.",
    avatar: "/images/avatar4.jpg"
  },
];