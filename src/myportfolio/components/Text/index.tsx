type props = {
    text: string,
    style?: object
}
export const Text = ({text, style}: props) => {
    return (
        <p className="font-[300] text-[10pt] m-0" style={style}>{text}</p>
    )
}