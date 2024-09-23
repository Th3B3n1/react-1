export function ParagraphLorem()
{
    return <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe consequatur molestiae quibusdam minima architecto, voluptatem natus neque velit sint ex possimus doloribus culpa vero officiis vitae cumque quia dolores ipsa.</p>
}

export function ParagraphWithStyle()
{
    return <p className="red">Something</p>
}

export function ParagraphWithLocalStyle()
{
    return <p style={{fontStyle: "italic", fontWeight: "bold", color: "green", textDecoration: "underline"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sequi, asperiores illum eum numquam itaque magni harum pariatur sed fugit. Deleniti sequi ipsam porro? Quidem non at dolorum autem optio?</p>
}