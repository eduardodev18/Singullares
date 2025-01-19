import React from "react";
import FaleEspecialistaComponent from "./Sections/FaleEspecialista/FaleEspecialista";
import GestaoVendaComponent from "./Sections/GestaoVenda/GestaoVenda";
import Hero from "./Sections/Hero/Hero";
import { HeaderComponent } from "../../components/Header/Header";

function Home() {
    const sections = [
        {
            Component: Hero,
        },
        {
            Component: FaleEspecialistaComponent,
        },
        {
            Component: GestaoVendaComponent,
        },
        {
            content: "Esta seção já usa scroll normal",
            bg: "bg-gray-100",
        },
        {
            content: "Mais conteúdo com scroll normal",
            bg: "bg-gray-200",
        },
    ];

    return (
        <div className="snap-container h-screen overflow-y-scroll snap-y snap-mandatory">
            <HeaderComponent />
            {sections.map((section, index) => (
                <div
                    key={index}
                    className={`section snap-start min-h-screen ${
                        section.bg || ""
                    } flex flex-col items-center justify-center relative`}
                >
                    {section.Component ? (
                        <section.Component />
                    ) : (
                        <div className="text-center p-8">
                            <h2 className="text-4xl font-bold mb-4">
                                {section.content}
                            </h2>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Home;
