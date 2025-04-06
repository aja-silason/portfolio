import { AlignBottom, BuildingOffice, Code, PenNibStraight, Timer, User } from "@phosphor-icons/react";

const menu = [
    {
        link: "#profile",
        icon: <User size={20}/>,
        text: "Perfil"
    },

    {
        link: "#about",
        icon: <AlignBottom size={20}/>,
        text: "Sobre"
    },
    {
        link: "#address",
        icon: <BuildingOffice size={20}/>,
        text: "Endereço"
    },
    {
        link: "#tools",
        icon: <PenNibStraight size={20}/>,
        text: "Ferramentas"
    },
    {
        link: "#timeline",
        icon: <Timer size={20}/>,
        text: "Histórico"
    },
    {
        link: "#projects",
        icon: <Code size={20}/>,
        text: "Projectos"
    },
]

export function MenuMobile() {
    
    return (
        <>
            <section className="border-t border-white/10 bg-[#0b1225a1] h-[65px] fixed bottom-0 w-full">
                <nav className="h-full">
                    <ul className="flex w-full items-center h-full flex-row justify-between p-[.5em]">
                            {
                                menu?.map((menu) => {
                                    return (
                                    <li title={menu?.text}>
                                        <a href={menu.link} className={`flex flex-col items-center `}>
                                            {menu?.icon}
                                        </a>
                                    </li>
                                    )
                                })
                            }
                    </ul>
                </nav>
            </section>
        </>
    )
}