import {User} from "@phosphor-icons/react";
import {Text} from "../Text"


/*
<div className="flex bg-[#0b1225a1] shadow border p-[1em] rounded-[.5em] md:w-[30%] flex-col justify-between gap-[1em]">

*/

export const ProfileCard = () => {
    return (
        <div className="flex backdrop-blur-xl bg-white/10 p-[.5em] border-white/10 border shadow-[0_4px_10px_rgba(255,255,255,0.1)] rounded-[.5em] md:w-[30%] flex-col gap-[1em]">

            <div className="opacity-[1] z-10 ">
                <User size={80}/>
            </div>
            <div>
                <Text text="Anania Augusto" style={{fontWeight: "500", fontSize: "14pt"}}/>
                <Text text="Software Developer"/>
            </div>
        </div>
    )
}