import { Zoom } from "react-awesome-reveal";

import Lottie from "lottie-react";

import a2 from '../../assets/animation/Children-playing-happy.json'

const ExtraSection = () => {
    
   

    return (
      <>
          <Zoom>
      <p className="text-sky-600 text-3xl font-bold text-center mt-28">Why Kids Learn ExTra language</p>
    </Zoom>
    <div>
    <Lottie className="" animationData={a2} loop={true} />
    <p className="-mt-56 text-center relative w-9/12 ml-56 text-blue font-bold">The children learning a second language for develop skills that will help create opportunities in the future and ability to communicate with others in different situations. It will most certainly In addition to the language skills of children with learning a second language, and learning the cultural differences helps. Includes a variety of educational and career opportunities as well. .</p>
    </div>


    <>
    </>
      </>
    );
};

export default ExtraSection;



