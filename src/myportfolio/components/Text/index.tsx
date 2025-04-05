type props = {
    text: string,
    style: object
}
export const Text = ({text, style}: props) => {
    return (
        <p className="" style={style}>{text}</p>
    )
}