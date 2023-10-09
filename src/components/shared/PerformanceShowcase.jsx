import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/anim/curtain.json";
const PerformanceShowcase = () => {
 

  return (



    <div className="lg:flex justify-center items-center space-y-10">



        <div className="space-y-10 lg:w-[70%] p-3" >

            <h1 className="text-5xl font-bold ">The Magic of Expression</h1>
            <p>Step into the realm of artistic expression and witness the enchanting magic that unfolds. Immerse yourself in the world of drama and theatre as our students master the art of conveying emotions and stories through their performances. Experience the transformative power of expression as they captivate audiences with their nuanced acting, vibrant characters, and compelling narratives. Prepare to be spellbound by the profound connection between performers and their craft. Join us on this mesmerizing journey and discover the boundless possibilities of self-expression through the magic of drama and theatre</p>
            <button className="button-primary">Explore More</button>
        </div>


<Lottie className="lg:w-[20%] lg:h-96" loop = {false} animationData={groovyWalkAnimation} />;

    </div>
  )
   
  
};

export default PerformanceShowcase
