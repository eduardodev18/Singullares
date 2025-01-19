import MiniLogo from "../../../../assets/images/gr/mini-logo-white.svg";
import { HeaderComponent } from "../../../../components/Header/Header";

export default function GestaoVendaComponent() {
    const data = {
        videoFundo: "/videos/video-gestao.mp4",
        titulo: "",
        textoBotao: "",
        link: "https://wa.me/5561981626968",
    };

    return (
        <div className="w-screen h-screen overflow-hidden relative items-center justify-center flex flex-col">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={data.videoFundo}
                autoPlay
                loop
                muted
                playsInline
            ></video>

            <div className="w-full mb-16 px-4 lg:container relative z-20 lg:px-0">
                <h2 className="text-white text-center text-5xl font-semibold mb-6 tracking-wide">
                    gestão de venda
                </h2>
                <p className="text-white text-center text-3xl max-w-[70%] mx-auto">
                    descomplicado porque é feito para você, com você, sempre
                    respeitando suas decisões e valores.
                </p>
            </div>

            <div className="w-full px-4 lg:container absolute bottom-14 z-20 lg:px-0">
                <img
                    src={MiniLogo}
                    alt="Mini Logo da Singullares"
                    className="h-14 w-14 lg:flex mb-6"
                />
            </div>
        </div>
    );
}
