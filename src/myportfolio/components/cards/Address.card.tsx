import { BuildingOffice, FacebookLogo, InstagramLogo, Link as LinkLogo, LinkedinLogo, Mailbox, Target, WhatsappLogo } from "@phosphor-icons/react"
import { Text } from "../Text"
import { Link } from "react-router-dom"
import { ReactNode } from "react"


/*
antiga cor do fundo bg-[#0b1225a1]
*/

type propsHref = {
    icon: ReactNode;
    link: string;
    text: string;
}

type propsAddress = {
    icon: ReactNode;
    title: string;
    description: string;
}


const addressData = [
    {
        icon: <Target fill="white" size={25} />,
        title: "Localização",
        description: "Angola, Luanda, Viana, Jacinto Tchipa, Rua 14E, casa 31"
    },
    {
        icon: <Mailbox fill="white" size={25} />,
        title: "E-mail",
        description: "ananiasjaimeaugusto@gmail.com"
    },
    
]

const mywhatsappnumber = "244944996909";
const mywhatsappmessage = "Olá Anania vim redirecionado do seu portfólio";

const encondedMessage = encodeURIComponent(mywhatsappmessage);

const socialMediaData = [
    {
        icon: <LinkedinLogo fill="white" size={20} />,
        link: "https://www.linkedin.com/in/anania-jaime-augusto-7b8653318/",
        text: "Anania Augusto"
    },
    {
        icon: <InstagramLogo fill="white" size={20} />,
        link: "https://www.instagram.com/ananias_augusto/",
        text: "@ananias_Augusto"
    },
    {
        icon: <FacebookLogo fill="white" size={20} />,
        link: "https://www.facebook.com/profile.php?id=100076321422246",
        text: "Anania Augusto"
    },
    {
        icon: <WhatsappLogo fill="white" size={20} />,
        link: `https://wa.me/${mywhatsappnumber}?text=${encondedMessage}`,
        text: "+244 944 996 909"
    },
]

export const AddressCard = () => {
    return (
        <div id="address" className="flex backdrop-blur-xl bg-white/10 p-[.5em] border-white/10 border shadow-[0_4px_10px_rgba(255,255,255,0.1)] rounded-[.5em] md:w-full flex-col gap-[1em]">
            <div className="bg-[#7c4dff3f] flex flex-row items-center gap-[.5em] p-[.5em] rounded-t-[.5em]">
                <BuildingOffice fill="white" size={20} />
                <Text text="Endereço" style={{fontWeight: "600", fontSize: "12pt"}}/>
            </div>

            <div className="p-[1em] flex flex-col gap-[1em] md:h-[15vh] overflow-y-scroll">

                {
                    addressData?.map((address: propsAddress, index:number) => {
                        return (
                            <div className="flex gap-[.5em] items-start" key={index}>
                                {address?.icon}
                                <div className="flex flex-col gap-0">
                                    <Text text={address?.title} style={{fontWeight: "600", fontSize: "11pt"}}/>
                                    <Text text={address?.description}/>
                                </div>
                            </div>
                        )
                    })
                }


                {
                    socialMediaData?.map((data: propsHref, index:number) => {
                        return (
                            <Link to={data?.link} target="_blank" key={index}>
                                <div className="flex gap-[.5em] items-startr">
                                    {data?.icon}
                                    <div className="flex flex-row gap-[.2em]">
                                        <Text text={data?.text} style={{fontWeight: "600", fontSize: "11pt"}}/>
                                        <LinkLogo size={15} />
                                    </div>
                                </div>
                            </Link>
                        )
                    } )
                }

            </div>
        </div>
    )
}