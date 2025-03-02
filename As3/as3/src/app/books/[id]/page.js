import Link from 'next/link'


export default async function BookDetail({ params }) {
    const res = await fetch(`https://www.anapioficeandfire.com/api/books/${params.id}`)
    const result = await res.json()
    const date = new Date(`${result.released}`);
    const shortDate = date.toLocaleDateString('en-GB');
    return (
        <div >
            <h1>{result.name}</h1>
            <p>ISBN: {result.isbn}</p>
            <p>Authors: {result.authors.toString()}</p>
            <p>Number of Pages: {result.numberOfPages}</p>
            <p>Publisher: {result.publisher}</p>
            <p>Country: {result.country}</p>
            <p>Released: {shortDate}</p>

            <h1>POV Characters</h1> 
            <ul>{result.povCharacters.map((item) => {
                const url = item.split('/')
                const lastNum = url[url.length - 1]
                return (<Link href={`povCharacters/${lastNum}`}><li>Character {lastNum}</li></Link>)
            })}</ul>
        </div>
    );
}
