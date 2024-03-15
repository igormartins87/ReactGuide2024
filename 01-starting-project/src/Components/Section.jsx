export default function Section ({titulo,children ,...props}){
    return (
        <section {...props}>
            <h2>{titulo}</h2>
            {children}
        </section>
    )

}