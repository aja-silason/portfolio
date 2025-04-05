type props = {
    text: string,
    style?: object
}
export const Text = ({text, style}: props) => {
    return (
        <p className="font-normal text-[10pt]" style={style}>{text}</p>
    )
}