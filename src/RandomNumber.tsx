export function RandomNumber()
{
    return <p>{Math.floor(Math.random() * (100 - 1 + 1)) + 1}</p> 
}