import { BuildingOffice, Timer } from "@phosphor-icons/react";
import {Text} from "../Text"
import { useWindowWidth } from "../../hook/behavior/useResponsivity";


/*
<div className="flex bg-[#0b1225a1] shadow border rounded-[.5em] md:w-[30%] flex-col gap-[1em]">

*/

const timeline = [
    {
        enterprise: "Baxtter Corporation",
        started_at: "15/02/2024",
        finished_at: "presente",
        location: "Kilamba"
    }
]

export const TimelineCard = () => {
    
    const width = useWindowWidth();

    return (
        <div id="timeline" className="flex backdrop-blur-xl bg-white/10 p-[.5em] border-white/10 border shadow-[0_4px_10px_rgba(255,255,255,0.1)] rounded-[.5em] md:w-[40%] flex-col gap-[1em]">
            <div className="bg-[#7c4dff3f] flex flex-row items-center gap-[.5em] p-[.5em] rounded-t-[.5em]">
                <Timer fill="white" size={20} />
                <Text text="Histórico" style={{fontWeight: "600", fontSize: "12pt"}}/>
            </div>

            <div className={`${ width >= 850 && 'h-[15vh]' } p-[1em] flex flex-col gap-[1em] overflow-y-scroll`}>
                
                {
                    timeline?.map((timeline) => {
                        return (
                        <div className="flex gap-[.5em] items-startr">
                            <BuildingOffice fill="white" size={20} />
                            <div className="flex flex-col gap-0">
                                <Text text={timeline?.enterprise} style={{fontWeight: "600", fontSize: "11pt"}}/>
                                <div className="flex flex-col">
                                    <div className="flex gap-[.5em] italic">
                                        <Text text={timeline?.started_at}/>
                                        <Text text="-"/>
                                        <Text text={timeline?.finished_at}/>
                                    </div>
                                    <Text text={timeline?.location}/>
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