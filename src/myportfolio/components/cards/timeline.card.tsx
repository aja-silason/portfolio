import { BuildingOffice, Timer } from "@phosphor-icons/react";
import {Text} from "../Text"

export const TimelineCard = () => {
    return (
        <div className="flex bg-[#0b1225a1] shadow border rounded-[.5em] md:w-[30%] flex-col gap-[1em]">
            <div className="bg-[#7c4dff3f] flex flex-row items-center gap-[.5em] p-[.5em] rounded-t-[.5em]">
                <Timer fill="white" size={20} />
                <Text text="Histórico" style={{fontWeight: "600", fontSize: "12pt"}}/>
            </div>
            <div className="p-[1em] flex flex-col gap-[1em] overflow-y-scroll h-[15vh]">
                
                <div className="flex gap-[.5em] items-startr">
                    <BuildingOffice fill="white" size={20} />
                    <div className="flex flex-col gap-0">
                        <Text text="Baxtter Corporation" style={{fontWeight: "600", fontSize: "11pt"}}/>
                        <div className="flex flex-col">
                            <div className="flex gap-[.5em] italic">
                                <Text text="15/02/2024"/>
                                <Text text="-"/>
                                <Text text="presente"/>
                            </div>
                            <Text text="Kilamba"/>
                        </div>
                    </div>
                </div>

                <div className="flex gap-[.5em] items-startr">
                    <BuildingOffice fill="white" size={20} />
                    <div className="flex flex-col gap-0">
                        <Text text="Baxtter Corporation" style={{fontWeight: "600", fontSize: "11pt"}}/>
                        <div className="flex flex-col">
                            <div className="flex gap-[.5em] italic">
                                <Text text="15/02/2024"/>
                                <Text text="-"/>
                                <Text text="presente"/>
                            </div>
                            <Text text="Kilamba"/>
                        </div>
                    </div>
                </div>
                <div className="flex gap-[.5em] items-startr">
                    <BuildingOffice fill="white" size={20} />
                    <div className="flex flex-col gap-0">
                        <Text text="Baxtter Corporation" style={{fontWeight: "600", fontSize: "11pt"}}/>
                        <div className="flex flex-col">
                            <div className="flex gap-[.5em] italic">
                                <Text text="15/02/2024"/>
                                <Text text="-"/>
                                <Text text="presente"/>
                            </div>
                            <Text text="Kilamba"/>
                        </div>
                    </div>
                </div>
                <div className="flex gap-[.5em] items-startr">
                    <BuildingOffice fill="white" size={20} />
                    <div className="flex flex-col gap-0">
                        <Text text="Baxtter Corporation" style={{fontWeight: "600", fontSize: "11pt"}}/>
                        <div className="flex flex-col">
                            <div className="flex gap-[.5em] italic">
                                <Text text="15/02/2024"/>
                                <Text text="-"/>
                                <Text text="presente"/>
                            </div>
                            <Text text="Kilamba"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}