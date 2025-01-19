import { Menu } from "lucide-react";
import Logo from "../../assets/images/gr/singullares-logo-white.png";

export function HeaderComponent() {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 w-full bg-opacity-80 px-4 pt-4 flex justify-center lg:justify-between lg:container lg:h-20 lg:items-center lg:px-0">
            <div className="lg:hidden absolute top-6 left-4">
                <Menu color="#ffffff" size={35} />
            </div>

            <div className="flex items-start">
                <img src={Logo} alt="Imagem da Logo" className="max-w-60" />
            </div>

            <ul className="hidden lg:flex">
                <li className="text-white mr-6 text-2xl cursor-pointer">Serviços</li>
                <li className="text-white mr-6 text-2xl cursor-pointer">Sobre</li>
                <li className="text-white mr-6 text-2xl cursor-pointer">Contato</li>
                <li className="text-white text-2xl cursor-pointer">Whatsapp</li>
            </ul>
        </div>
    );
}
