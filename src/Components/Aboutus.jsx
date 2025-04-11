
import egy from '../assets/egy.jpg';

const Aboutus = () => {
  return (
    <>
    <div className="dark:bg-gray-900 text-white  py-10 bg-secondary ">
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-quaternary uppercase text-sm font-medium mb-4">ABOUT US</h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Crafting Unforgettable Journeys in Egypt
            </h2>
            <p className="text-gray-400 mb-8">
            your ultimate guide to exploring the timeless wonders and hidden gems of Egypt!

Whether you're dreaming of standing beneath the towering pyramids of Giza, sailing the serene waters of the Nile, wandering through ancient temples, or diving into the vibrant culture and cuisine, we're here to make it happen.

Our mission is simple: to help travelers experience Egypt in all its glory — from the iconic landmarks to the local treasures only a true explorer would find. With expert tips, personalized itineraries, and real stories from the heart of Egypt, we're more than a travel site — we're your companion on an unforgettable journey.

Lets uncover the magic of Egypt, together.

Want it to sound more adventurous, elegant, or fun? I can tweak the tone for you!

            </p>
            
            {/* Statistics */}
            <div className="flex gap-12 mb-8 m-16">
              <div>
                <h4 className="text-3xl font-bold">10 K</h4>
                <p className="text-gray-600">Success Trips</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold">200 K</h4>
                <p className="text-gray-600">Happy Clients</p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-quaternary text-white px-8 py-3 rounded-full hover:bg-[#e55d3d] transition-colors">
              Explore Now
            </button>
          </div>

          {/* Right Image Container */}
          <div className="relative h-[600px] w-full p-4">
            {/* Background decorative element */}
            <div className="absolute right-10 top-10  w-72 h-72 bg-[#FF6B4A]/10 rounded-full blur-3xl"></div>
            
            {/* Main image */}
            <div className="absolute inset-0 w-full h-[500px] mt-10 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <img 
                src={egy} 
                alt="Adventure seeker hiking" 
                className="w-full h-full object-cover"
              />
            </div>

           
          </div>
        </div>
      </div>
    </section>

    </div>
  </>
  )
}

export default Aboutus
