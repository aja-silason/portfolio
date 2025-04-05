import { AboutCard } from "./components/cards/About.card";
import { ProfileCard } from "./components/cards/profile.card";
import { Container } from "./components/layouts/container";

export function Home () {
    return (
        <Container>
            <div className="flex gap-[1em]">
                <ProfileCard />
                <AboutCard/>
            </div>
        </Container>
    )
}