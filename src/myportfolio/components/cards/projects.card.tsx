import { Code, Link as LinkLogo } from "@phosphor-icons/react"
import { Text } from "../Text"
import { Link } from "react-router-dom"

/*<div className="flex bg-[#0b1225a1] shadow backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-[0_4px_30px_rgba(255,255,255,0.1)] rounded-[.5em] md:w-full flex-col gap-[1em]">*/

export const ProjectCard = () => {
    return (

        <div className="flex backdrop-blur-xl bg-white/10 p-[.5em] border-white/10 border shadow-[0_4px_10px_rgba(255,255,255,0.1)] rounded-[.5em] md:w-full flex-col gap-[1em]">
            <div className="bg-[#7c4dff3f] flex flex-row items-center gap-[.5em] p-[.5em] rounded-t-[.5em]">
                <Code fill="white" size={20} />
                <Text text="Meus Projectos" style={{fontWeight: "600", fontSize: "12pt"}}/>
            </div>

            <div className="p-[1em] flex flex-col gap-[1em] overflow-y-scroll h-[15vh]">
                
                <div className="flex gap-[.5em] items-startr">
                    <Code fill="white" size={20} />
                    <div className="flex flex-col gap-[.5em]">
                        
                        <Link to="/opahh" target="_blank">
                            <div className="flex gap-[.5em] cursor-pointer">
                                <Text text="Baxtter Corporation" style={{fontWeight: "600", fontSize: "11pt"}}/>
                                <LinkLogo size={20}/>
                            </div>
                        </Link>

                        <div className="flex flex-col">
                            <Text text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam sint asperiores in nisi cum. Alias impedit labore sit aut laborum, praesentium, dolorem delectus corrupti architecto sapiente hic quae quo dicta?"/>
                        </div>
                    </div>
                </div>

                

            </div>
        </div>
    )
}