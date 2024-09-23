interface props
{
    name: string,
    phoneNumber: string,
    email: string
}

export function ComponentWithProps(props: props)
{
    return (
        <div style={{width: "400px"}}>
            <div>
                <h4>{props.name}</h4>
                <p>{props.phoneNumber}</p>
                <a href="#">{props.email}</a>
            </div>
        </div>
    )
}