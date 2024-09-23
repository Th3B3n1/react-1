export function List()
{
    return (
        <>
            <h2>Gyümölcsök</h2>
            <ul>
                <li>Alma</li>
                <li>Banán</li>
                <li>Szőlő</li>
                <li>Dinnye</li>
                <li>Narancs</li>
            </ul>
        </>
    )
}

export function Table()
{
    return (
        <>
            <h2>Zöldségek</h2>
            <table>
                <thead>
                    <th>
                        <td>Sorszám</td>
                        <td>Név</td>
                    </th>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Sárgarépa</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Saláta</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Burgonya</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Paradicsom</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Fehérrépa</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export function Text()
{
    return (
        <>
            <p>Ez már nem az első React alkalmazásom.</p>
            <p>Még csak egyszerű komponenseket hozok létre és gyakorlok.</p>
            <p>Első React alkalmazásom!</p>
        </>
    )
}