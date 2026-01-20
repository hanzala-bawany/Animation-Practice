import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Home = () => {

  const box = useRef(null)
  const boxParent = useRef(null)

  const animation = {
    x: 200,
    duration: 2,
    delay: 0.5,
  }

  const animation2 = {
    delay: 0.5,
    duration: 5,
    x: 800,
    rotate : 720
  }

  useGSAP(() => {
    // gsap.to(".box", animation)  // ye bhi kar sakte hen
    gsap.to(box.current, animation2)  
  })
  // , { scope: boxParent } }) agar ye kar dun to ab sirf boxParent ke andar hi animation apply ho gi chae box classs ke kitne hi alement ho ... ziada tar class ke sath use ho ta he

  return (
    <div ref={boxParent} className="h-[100vh] w-full bg-blue-100 flex overflow-hidden  items-center">
      <div ref={box} className="box  bg-amber-400  h-[40px] w-[30%]">Home</div>
    </div>
  )
}

export default Home;