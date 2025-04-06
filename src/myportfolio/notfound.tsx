import { Link } from "react-router-dom";
import { Container } from "./components/layouts/container";
import { Text } from "./components/Text";

export function NotFound () {
    return (
        <Container>
            <div className="flex flex-col gap-[.5em] text-center items-center justify-center h-full">
                <Text text="404" style={{fontSize: "40pt", fontWeight: "600"}}/>
                <Text text="Oops :(" style={{fontSize: "14pt"}}/>
                <Text text="página não encontrada" style={{fontSize: "14pt"}}/>
                
                <Link to="/">
                    <Text text="voltar" style={{fontSize: "14pt"}}/>
                </Link>

            </div>
        </Container>
    )
}