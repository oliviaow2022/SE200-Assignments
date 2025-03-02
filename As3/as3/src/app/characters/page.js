import Link from 'next/link'


export default async function Characters() {
  const res = await fetch("https://www.anapioficeandfire.com/api/characters")
  const result = await res.json() 
  return (
    <div >
      <h1>Characters</h1>
      <p>Explore the rich universe of Games of Thrones and A Song of Ice and Fire.</p>
      <ul>
        {result.map((item, index) => {
            return(
            <Link href={`/characters/${index+1}`}><li>{item.name != '' ? item.name : `${item.aliases} (Alias)`}</li></Link>
        )})}
      </ul>
    </div>
  );
}
