import { Zoom } from 'react-awesome-reveal';
import Lottie from "lottie-react";
import a3 from '../../assets/animation/Kids studying from home.json'

const Extrasecond = () => {

    return (
        <div>
            <Zoom>
                <p className="text-sky-600 text-3xl font-bold text-center mt-28">Best 10 methods to teach children a second language</p>
            </Zoom>
            <div className='flex gap-10'>
                <div className='ml-16 flex mt-36 gap-10 text-blue-600 text-lg '>
                    <div>
                        <p > 1. Watch language learning videos</p>
                        <p className='mt-5'>2. Listen to the children songs</p>
                        <p className='mt-5'>3.Read language books and stories</p>
                        <p className='mt-5'>4.Play online interactive language games</p>
                        <p className='mt-5'>5.Print language learning flashcards</p>
                    </div>
                    <div>
                        <p> 6. Print language alphabet worksheets</p>
                        <p className='mt-5'>7.Practice writing in the target language</p>
                        <p className='mt-5'>8.Read language books and stories</p>
                        <p className='mt-5'>9.Play online interactive language games</p>
                        <p className='mt-5'>10.Print language learning flashcards</p>
                    </div>
                </div>
                <div> <Lottie className="" animationData={a3} loop={true} /></div>

            </div>

        </div>
    );
};

export default Extrasecond;