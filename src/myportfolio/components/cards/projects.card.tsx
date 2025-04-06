import { Code, Link as LinkLogo } from "@phosphor-icons/react"
import { Text } from "../Text"
import { Link } from "react-router-dom"
import { useWindowWidth } from "../../hook/behavior/useResponsivity"

/*<div className="flex bg-[#0b1225a1] shadow backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-[0_4px_30px_rgba(255,255,255,0.1)] rounded-[.5em] md:w-full flex-col gap-[1em]">*/

const project = [
    {
        link_repo: "https://github.com/aja-silason/apiga.git",
        type_project: "Backend",
        project: "APIGA Quick Gest",
        tecnology: "Express",
        description: "This is a ERP that provide and manage all  information in a enterprise, and their filiation such as a cyber coffe, beauty salom and so on."
    },

    {
        link_repo: "https://github.com/aja-silason/number_to_currency_lib.git",
        type_project: "Lib",
        project: "Currency Converter",
        tecnology: "TypeScript",
        description: "This lib was developed to convert numerical values ​​to data in currencies, specifically for the Angolan currency the KZ, it was developed to facilitate the presentation of data involving the Angolan currency, and facilitates its conversion."
    },
    {
        link_repo: "https://github.com/aja-silason/anticusto.git",
        type_project: "Frontend",
        project: "Anticusto ERP",
        tecnology: "React",
        description: "Este projeto é uma aplicação web para ajudar os usuários a fazer gestão . organizar suas tarefas diárias dos websites."
    },
    {
        link_repo: "https://github.com/aja-silason/product-lrvl.git",
        type_project: "Backend",
        project: "Product Cathalog",
        tecnology: "Laravel",
        description: "Since 2 yr out, I return into php with Laravel framework"
    },
    {
        link_repo: "https://github.com/aja-silason/checkout-ms.git",
        type_project: "Backend",
        project: "Ms Checkout",
        tecnology: "NestJs",
        description: "This is a project that I use to make a Checkout into a Sale"
    },
]

export const ProjectCard = () => {

    const width = useWindowWidth();

    return (

        <div id="projects" className="flex backdrop-blur-xl bg-white/10 p-[.5em] border-white/10 border shadow-[0_4px_10px_rgba(255,255,255,0.1)] rounded-[.5em] md:w-full flex-col gap-[1em]">
            <div className="bg-[#7c4dff3f] flex flex-row items-center gap-[.5em] p-[.5em] rounded-t-[.5em]">
                <Code fill="white" size={20} />
                <Text text="Meus Projectos" style={{fontWeight: "600", fontSize: "12pt"}}/>
            </div>

            <div className={`${ width >= 850 && 'h-[15vh]' } p-[1em] flex flex-col gap-[1em] overflow-y-scroll`}>
                
                {
                    project?.map((project) => {
                        return (
                            <div className="flex gap-[.5em] items-startr">
                                <Code fill="white" size={20} />
                                <div className="flex flex-col gap-[.8em] w-full">
                                    
                                    <Link to={project?.link_repo} target="_blank">
                                        <div className="flex items-center w-full justify-between gap-[.5em] cursor-pointer">
                                            <div className="flex w-full gap-[.5em]">
                                                <Text text={project?.project} style={{fontWeight: "600", fontSize: "11pt"}}/>
                                                <div className="bg-white/10 p-[.2em] rounded-[.2em]">
                                                    <Text text={project?.type_project}/>
                                                </div>    
                                                <LinkLogo size={15}/>
                                            </div>
                                            
                                            <div className="bg-white/10 p-[.2em] rounded-[.2em]">
                                                <Text text={project?.tecnology}/>
                                            </div>
                                        </div>
                                    </Link>

                                    <div className="flex flex-col">
                                        <Text text={project?.description}/>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

                

            </div>
        </div>
    )
}