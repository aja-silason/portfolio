import { BuildingOffice, Mailbox, Target } from "@phosphor-icons/react"
import { Text } from "../Text"

export const AddressCard = () => {
    return (
        <div className="flex bg-[#0b1225a1] shadow border rounded-[.5em] md:w-full flex-col gap-[1em]">
            <div className="bg-[#7c4dff3f] flex flex-row items-center gap-[.5em] p-[.5em] rounded-t-[.5em]">
                <BuildingOffice fill="white" size={20} />
                <Text text="Endereço" style={{fontWeight: "600", fontSize: "12pt"}}/>
            </div>

            <div className="p-[1em] flex flex-col gap-[1em]">
                <div className="flex gap-[.5em] items-startr">
                    <Target fill="white" size={25} />
                    <div className="flex flex-col gap-0">
                        <Text text="Localização" style={{fontWeight: "600", fontSize: "11pt"}}/>
                        <Text text="Angola, Luanda, Viana, Jacinto Tchipa, Rua 14E, casa 31"/>
                    </div>
                </div>

                <div className="flex gap-[.5em] items-startr">
                    <Mailbox fill="white" size={25} />
                    <div className="flex flex-col gap-0">
                        <Text text="E-mail" style={{fontWeight: "600", fontSize: "11pt"}}/>
                        <Text text="ananiasjaimeaugusto@gmail.com"/>
                    </div>
                </div>

            </div>
        </div>
    )
}