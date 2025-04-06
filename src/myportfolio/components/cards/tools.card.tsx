import { PenNibStraight } from "@phosphor-icons/react";
import {Text} from "../Text"
import { SpringBootSVGLogo } from "../svg/springboot";
import { ExpressSVGLogo } from "../svg/express";
import { LaravelSVGLogo } from "../svg/laravel";
import { NestJSSVGLogo } from "../svg/nestjs";
import { ReactSVGLogo } from "../svg/react";
import { TypeScriptSVGLogo } from "../svg/typescript";

export const ToolsCard = () => {
    return (
        <div className="flex bg-[#0b1225a1] shadow border rounded-[.5em] md:w-[30%] flex-col gap-[1em]">
            <div className="bg-[#7c4dff3f] flex flex-row items-center gap-[.5em] p-[.5em] rounded-t-[.5em]">
                <PenNibStraight fill="white" size={20} />
                <Text text="Ferramentas" style={{fontWeight: "600", fontSize: "12pt"}}/>
            </div>
            <div className="flex h-full px-[1em] items-center gap-[1em] flex-wrap">
                
                <div className="w-[2em] cursor-pointer">
                    <ReactSVGLogo />
                </div>

                <div className="w-[2em] cursor-pointer">
                    <TypeScriptSVGLogo />
                </div>
                
                <div className="w-[2em] cursor-pointer">
                    <ExpressSVGLogo />
                </div>


                <div className="w-[2em] cursor-pointer">
                    <NestJSSVGLogo />
                </div>

                <div className="w-[2em] cursor-pointer">
                    <SpringBootSVGLogo />
                </div>

                <div className="w-[2em] cursor-pointer">
                    <LaravelSVGLogo />
                </div>

                    
            </div>
        </div>
    )
}