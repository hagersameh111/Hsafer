import PlaceCard from "../Places/PlaceCard";
import S2Img from "../../assets/s2.jpg";
import dahab1 from "../../assets/dahab1.jpeg";
import hurgada from "../../assets/hurgada.jpg"
const PlaceData = [
  {
    img: S2Img,
    title: "Salted Lakes",
    location: "Siwa",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    img: dahab1,
    title: "Stars Valley",
    location: "Dahab",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit"
  },
  {
    img: hurgada,
    title: "Orange Bay",
    location: "Hurgada",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit",
    
  },
  

  
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 text-white  py-10 bg-secondary ">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-quaternary py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlaceData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;