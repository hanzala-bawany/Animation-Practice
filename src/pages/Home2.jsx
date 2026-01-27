import { useGSAP } from "@gsap/react"

import gsap from "gsap"
import { useRef, useState } from "react"


const Home2 = () => {

const circle = useRef(null)
const [random , setRandom] =  useState(0)

//   const animation2 = {
//     delay: 0.5,
//     duration: 2,
//     y: 50,
//     rotate : 360 * 2,
//     scale : 2,
//     opacity : 0.5
//   }


    useGSAP(() => {
        // gsap.from(".box",animation2)  // yani gsap ki css se anuimation start karo or actual css pe anuimation khatam karo
        // gsap.to(".box",animation2)     // yani actual css se anuimation start karo or gsap ki css pe anuimation khatam karo
        gsap.to(circle.current , {
            x : random,
            duration : 1,
        })
    },[random])

    const animate = () =>{
        const r = gsap.utils.random(-500,500,100)
        console.log(r , "<<<<<<<");
        setRandom(r);
    }



    return (
        <div className="h-[100vh] w-full flex justify-center bg-amber-600 items-center gap-10 overflow-hidden">

            <div className="card border rounded-2xl p-4 ">
                <div ref={circle} className="circle"></div>
                <div onClick={animate} className="box flex justify-center items-center cursor-pointer"> Click </div>
            </div>

            {/* <div className="card2 border rounded-2xl p-6">
                <div className="circle"></div>
                <div className="box"></div>
            </div> */}

        </div>
    )
}

export default Home2