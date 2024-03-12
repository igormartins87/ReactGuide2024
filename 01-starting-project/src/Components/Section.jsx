export default function Section ({titulo,children ,...props}){
    return (
        <Section {...props}>
            <h2>{titulo}</h2>
            {children}
        </Section>
    )

}