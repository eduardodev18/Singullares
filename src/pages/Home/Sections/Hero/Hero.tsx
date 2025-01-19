import { useState, useEffect } from "react";
import MiniLogo from "../../../../assets/images/gr/mini-logo-white.svg";

export default function Hero() {
    const data = [
        {
            imagemFundo: "/images/bg/slider-01.jpg",
            titulo: "",
            textoBotao: "",
            link: "https://wa.me/5561981626968",
        },
        {
            imagemFundo: "/images/bg/slider-02.jpg",
            titulo: "",
            textoBotao: "",
            link: "https://wa.me/5561981626968",
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [data.length]);

    return (
        <div className="w-screen h-screen">
            {data.map((item, index) => (
                <div
                    key={index}
                    className={`flex flex-col justify-between top-0 w-screen h-screen bg-cover transition-opacity duration-1000  ${
                        index === activeIndex ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                        backgroundImage: `url('${item.imagemFundo}')`,
                        position: "absolute",
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-15 z-10"></div>

                    <div className="w-full h-full mb-16 px-4 lg:container relative z-20 lg:px-0 flex items-end">
                        <img
                            src={MiniLogo}
                            alt="Mini Logo da Singullares"
                            className="h-14 w-14 lg:flex mb-6"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
