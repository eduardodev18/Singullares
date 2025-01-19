import MiniLogo from "../../../../assets/images/gr/mini-logo-white.svg";

export default function FaleEspecialistaComponent() {
    const data = {
        imagemFundo: "/images/bg/slider-03.jpg",
        titulo: "Gostaria de vender ou comprar seu imóvel?",
        textoBotao: "Fale com o especialista",
        link: "https://wa.me/5561981626968",
    };

    return (
        <div className="w-screen h-screen">
            <div
                className={`flex flex-col relative items-end justify-end w-screen h-screen bg-cover bg-center transition-opacity duration-1000`}
                style={{
                    backgroundImage: `url('${data.imagemFundo}')`,
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-15 z-10"></div>

                <div className="flex flex-col justify-end w-full h-full mb-16 lg:container relative z-20">
                    <div className="flex px-4 justify-center  items-start w-full mb-6 lg:px-0 lg:justify-normal">
                        <img
                            src={MiniLogo}
                            alt="Mini Logo da Singullares"
                            className="h-14 w-14 lg:flex"
                        />
                    </div>

                    <div className="px-4 flex flex-col lg:flex-row lg:justify-between items-center w-full lg:px-0">
                        <h3 className="text-white text-center font-medium text-2xl mb-6 lg:text-2xl lg:mb-0">
                            {data.titulo}
                        </h3>
                        <a
                            href={data.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center text-white text-xl font-bold text-center underline underline-offset-8 lg:text-2xl cursor-pointer transition-transform transform hover:-translate-y-1 hover:scale-105"
                        >
                            {data.textoBotao}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
