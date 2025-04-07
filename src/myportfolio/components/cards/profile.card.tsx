import {Text} from "../Text"

export const ProfileCard = ({data}: any) => {
    
    return (
        <div id="profile" className="flex backdrop-blur-xl bg-white/10 p-[.5em] border-white/10 border shadow-[0_4px_10px_rgba(255,255,255,0.1)] rounded-[.5em] md:w-[30%] flex-col gap-[1em]">

            <div className="opacity-[1] z-10 ">
                <img src={data?.data?.avatar_url} className="w-[8em] rounded-[10em]"/>
            </div>
            <div>
                <Text text={data?.data?.name} style={{fontWeight: "500", fontSize: "14pt"}}/>
                <Text text={data?.data?.bio}/>
                <Text text="Desenvolvedor de Software"/>
            </div>
        </div>
    )
}