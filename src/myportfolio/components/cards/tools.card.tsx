import { PenNibStraight } from "@phosphor-icons/react";
import {Text} from "../Text"
import { SpringBootSVGLogo } from "../svg/springboot";
import { ExpressSVGLogo } from "../svg/express";
import { LaravelSVGLogo } from "../svg/laravel";
import { NestJSSVGLogo } from "../svg/nestjs";
import { ReactSVGLogo } from "../svg/react";
import { TypeScriptSVGLogo } from "../svg/typescript";

const tools = [
    {
        icon: <ReactSVGLogo />  
    },
    {
        icon: <TypeScriptSVGLogo />
    },
    {
        icon: <ExpressSVGLogo />
    },
    {
        icon: <NestJSSVGLogo />
    },
    {
        icon: <SpringBootSVGLogo />
    },
    {
        icon: <LaravelSVGLogo />
    },
]

export const ToolsCard = () => {
    return (
        <div id="tools" className="flex backdrop-blur-ls bg-white/10 p-[.5em] border-white/10 border shadow-[0_4px_10px_rgba(255,255,255,0.1)] rounded-[.5em] md:w-[30%] flex-col gap-[1em]">
            <div className="bg-[#7c4dff3f] flex flex-row items-center gap-[.5em] p-[.5em] rounded-t-[.5em]">
                <PenNibStraight fill="white" size={20} />
                <Text text="Ferramentas" style={{fontWeight: "600", fontSize: "12pt"}}/>
            </div>
            <div className="flex h-full px-[1em] items-center gap-[1em] flex-wrap">
                
                {
                    tools?.map((icon, index: number) => {
                        return (
                            <div className="w-[2em] cursor-pointer" key={index}>
                                {icon.icon}
                            </div>
                        )
                    })
                }
                    
            </div>
        </div>
    )
}