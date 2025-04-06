import { AboutCard } from "./components/cards/About.card";
import { AddressCard } from "./components/cards/Address.card";
import { ProfileCard } from "./components/cards/profile.card";
import { ProjectCard } from "./components/cards/projects.card";
import { TimelineCard } from "./components/cards/timeline.card";
import { ToolsCard } from "./components/cards/tools.card";
import { Container } from "./components/layouts/container";
import { useGetData } from "./hook/get/useGetData";
import { useWindowWidth } from "./hook/behavior/useResponsivity";

export function Home () {

    const width = useWindowWidth();

    const {data} = useGetData();

    return (
        <Container>
            <div className={`${width >= 850 ? 'flex flex-col gap-[1em]' : 'flex flex-col gap-[1em]'} `}>
                <div className={`${width >= 850 ? 'flex gap-[1em]' : 'flex flex-col gap-[1em]'}`}>
                    <ProfileCard data={data}/>
                    <AboutCard/>
                </div>
                <div className={`${width >= 850 ? 'flex flow-row gap-[1em]' : 'flex flex-col gap-[1em]'}`}>
                    <AddressCard/>
                    <ToolsCard />
                </div>

                <div className={`${width >= 850 ? 'flex gap-[1em]' : 'flex flex-col gap-[1em]'}`}>
                    <TimelineCard />
                    <ProjectCard/>
                </div>

            </div>
        </Container>
    )
}