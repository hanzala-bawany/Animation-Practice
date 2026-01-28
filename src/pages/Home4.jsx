import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useEffect, useRef, useState } from "react"

const Home4 = () => {

    const [ghum, setGhum] = useState(null)
    const [horizontal, setHorizontal] = useState(null)
    const [vertical, setVertical] = useState(null)
    const box = useRef(null)
    
    const {contextSafe} = useGSAP()
    // useGSAP(() => {     //  useGSAP me to jo bhi animation chale auto cleanup ho jaati he but kise or funcion me nahi ho ti isi waja se us function ko contextSafe ke andar wrap kar e hen taaeke component unmount per auto clean up ho jae

    //     gsap.to(box.current , {
    //         x : horizontal,
    //         y : vertical , 
    //         rotate : ghum , 
    //         duration: 0.8,
    //     })


    // }, {scope : "card" , dependencies : [ghum , horizontal , vertical] })


    const animate = contextSafe(() => {
        const r = gsap.utils.random(360,-360,60)
        const x = gsap.utils.random(360,-360,60)
        const y = gsap.utils.random(360,-360,60)

        // setGhum(r)
        // setHorizontal(x)
        // setVertical(y)

           gsap.to(box.current , {
            x : x,
            y : y , 
            rotate : r , 
            duration: 0.8,
        })
    })
    


    return (

        <div className="card border rounded-2xl p-4 h-[100vh] flex flex-col justify-center items-center">
            <img ref={box} src="https://tse3.mm.bing.net/th/id/OIP.22Z0axn-10dELbimnlj_hAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" className="w-50 "  alt="" />
            <div onClick={animate} className="box cursor-pointer active:bg-emerald-800"></div>
       
        </div>
    )
}

export default Home4