import { AlignBottom } from "@phosphor-icons/react"
import { Text } from "../Text"

/*
<div className="flex bg-[#0b1225a1] shadow border rounded-[.5em] md:w-full flex-col gap-[1em]">

*/

export const AboutCard = () => {
    return (
        <div id="about" className="flex backdrop-blur-xl bg-white/10 p-[.5em] border-white/10 border shadow-[0_4px_10px_rgba(255,255,255,0.1)] rounded-[.5em] md:w-full flex-col gap-[1em]">
            <div className="bg-[#7c4dff3f] flex flex-row items-center gap-[.5em] p-[.5em] rounded-t-[.5em]">
                <AlignBottom fill="white" size={20} />
                <Text text="Sobre mim" style={{fontWeight: "600", fontSize: "12pt"}}/>
            </div>

            <div className="p-[1em] md:text-justify">
                <Text text="👋 Olá, sou @ananiaaugusto."/>
                <Text text="👀 Interesso-me pelas áreas de desenvolvimento frontend, backend, mobile."/>
                <Text text="🌱 Estou constantemente estudando sobre padrões de desenvolvimento, arquitecturas de software e como isso pode melhorar o meu código."/>
                <Text text="📫 Tu podes encontrar-me seguindo os links abaixo"/>
            </div>
        </div>
    )
}