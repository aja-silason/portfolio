import { AboutCard } from "./components/cards/About.card";
import { AddressCard } from "./components/cards/Address.card";
import { ProfileCard } from "./components/cards/profile.card";
import { ProjectCard } from "./components/cards/projects.card";
import { TimelineCard } from "./components/cards/timeline.card";
import { ToolsCard } from "./components/cards/tools.card";
import { Container } from "./components/layouts/container";

export function Home () {
    return (
        <Container>
            <div className="flex flex-col gap-[2em]">
                <div className="flex gap-[1em]">
                    <ProfileCard />
                    <AboutCard/>
                </div>
                <div className="flex flow-row gap-[1em]">
                    <AddressCard/>
                    <ToolsCard />
                </div>

                <div className="flex gap-[1em]">
                    <TimelineCard />
                    <ProjectCard/>
                </div>

            </div>
        </Container>
    )
}