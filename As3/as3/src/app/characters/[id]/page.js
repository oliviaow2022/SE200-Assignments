import Link from 'next/link'


export default async function CharacterDetail({params}) {
    const res = await fetch(`https://www.anapioficeandfire.com/api/characters/${params.id}`)
    const result = await res.json() 
    return (
        <div >
        <h1>{result.name != '' ? result.name : `${result.aliases} (Alias)`}</h1>
        <p>Name: {result.name != '' ? result.name : 'Unknown'}</p>
        <p>Gender: {result.gender != '' ? result.gender : 'Unknown'}</p>
        <p>Culture: {result.culture != '' ? result.culture : 'Unknown'}</p>
        <p>Born: {result.born != '' ? result.born : 'Unknown'}</p>
        <p>Died: {result.died != '' ? result.died : 'Unknown'}</p>
        <h1>Titles</h1>
        <ul>{result.titles.map((item) => (<li>{item}</li>))}</ul>
        <h1>Aliases</h1>
        <ul>{result.aliases.map((item) => (<li>{item}</li>))}</ul>
        </div>
    );
}
