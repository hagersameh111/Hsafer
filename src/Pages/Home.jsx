
import siwa3Img from '../assets/siwa3.jpg';
import Hero from '../Components/Hero/Hero';
import Places from '../Components/Places/Places';
import Footer from '../Components/Footer/Footer';
import Aboutus from '../Components/Aboutus';


const Home = () => {

  return (
    <>
    <div >
      <div className='relative h-[800px]'>
       <img  src={siwa3Img} className='absolute right-0 top-0 h-[800px] w-full object-cover z-[-1]'></img>

      <Hero/>
      
      </div>
      <Aboutus/>
      <Places/>
      <Footer/>
    </div>

    
    </>
    
  );
};

export default Home