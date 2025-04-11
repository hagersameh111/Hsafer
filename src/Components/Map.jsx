import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import egyptMap from "../assets/eg-04.svg";
import { useState } from "react";
import egy from "../assets/egy.jpg"
import giza from "../assets/giza.jpg"
import alex from "../assets/alex.jpg"
import lux from "../assets/lux.jpg"
import as from "../assets/as.jpg"
import hur from "../assets/hur.jpg"
import eg from "../assets/eg.jpg"
import d from "../assets/d.jpg"
import s from "../assets/s.jpg"
import f from "../assets/f.jpg"
import ma from "../assets/ma.jpg"
const citys = [
  {
    name: "Cairo",
    top: "27%",
    left: "52%",
    image: giza,
    description:
      "The bustling capital, home to the Great Pyramids, rich history, and vibrant street life.",
  },
  {
    name: "Alexandria",
    top: "20%",
    left: "45%",
    image: alex,
    description:
      "A coastal city with Greco-Roman history, the Qaitbay Citadel, and beautiful sea views.",
  },
  {
    name: "Luxor",
    top: "56%",
    left: "61.5%",
    image: lux,
    description:
      "Known as the world's greatest open-air museum with temples and tombs of ancient pharaohs.",
  },
  {
    name: "Aswan",
    top: "64.5%",
    left: "63.5%",
    image: as,
    description:
      "Peaceful city on the Nile with Nubian culture, Philae Temple, and boat rides.",
  },
  {
    name: "Hurghada",
    top: "47.5%",
    left: "68%",
    image: hur,
    description:
      "Red Sea resort town known for diving, coral reefs, and desert adventures.",
  },
  {
    name: "Sharm El Sheikh",
    top: "43%",
    left: "72%",
    image: eg,
    description:
      "Luxury beach city with crystal-clear waters and access to Mount Sinai.",
  },
  {
    name: "Dahab",
    top: "40%",
    left: "72.5%",
    image: d,
    description:
      "Laid-back diving town known for the Blue Hole and chill coastal vibes.",
  },
  {
    name: "Faiyum",
    top: "34%",
    left: "47%",
    image: f,
    description:
      "An oasis with waterfalls, lakes, and ancient pyramids just outside Cairo.",
  },
  {
    name: "Siwa Oasis",
    top: "36%",
    left: "18%",
    image: s,
    description:
      "Remote desert town known for natural springs, Berber culture, and stunning dunes.",
  },
  {
    name: "Marsa Alam",
    top: "71%",
    left: "65%",
    image: ma,
    description:
      "Peaceful diving destination with untouched coral reefs and pristine beaches.",
  },
];

const Map = () => {
  const [hoveredCity, setHoveredCity] = useState(null);

  return (
    <div className="relative w-[1700px] h-[1000px] flex items-center justify-center bg-gray-900">
      <div className="py-10 px-4">
        <h3 className="text-quaternary uppercase text-sm font-medium mb-4">Map of Egypt</h3>
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
          Choose your desired destination
        </h2>
        <p className="text-gray-400 mb-8">
          Discover Egypt Like Never Before Egypt is a country filled with history, adventure, and beauty.<br />
          Each city tells its own unique story, from ancient tombs to bustling markets, and from tranquil beaches to vast desert landscapes.<br />
          Whether you're a history enthusiast, nature lover, or beach lover, Egypt's cities offer something for everyone.<br />
          Start your adventure today and explore the wonders of Egypt!
        </p>
        <h3 className="text-quaternary uppercase text-sm font-medium mb-4">click on the pins to know more </h3>
      </div>
      
      <div className="relative">
        <img 
          src={egyptMap} 
          alt="Map of Egypt" 
          className="w-[1200px] h-[1000px]"
        />
        
        {citys.map((citys, index) => (
          <div
            key={index}
            className="absolute cursor-pointer group"
            style={{ top: citys.top, left: citys.left, transform: "translate(-50%, -50%)" }}
            onMouseEnter={() => setHoveredCity(index)}
            onMouseLeave={() => setHoveredCity(null)}
          >
            <MapPin className="text-quaternary w-6 h-6 hover:text-red-500 transition-colors" />

            {hoveredCity === index && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute z-10 w-64 bg-white shadow-xl rounded-2xl p-4 mt-2 -translate-x-1/2"
              >
                <img 
                  src={citys.image} 
                  alt={citys.name} 
                  className="w-full h-32 object-cover rounded-lg mb-2"
                />
                <h3 className="text-lg font-bold text-gray-800">{citys.name}</h3>
                <p className="text-sm text-gray-600">{citys.description}</p>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Map;