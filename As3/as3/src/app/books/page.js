import Link from 'next/link'


export default async function Books() {
  const res = await fetch("https://www.anapioficeandfire.com/api/books")
  const result = await res.json() 
  return (
    <div >
      <h1>Books</h1>
      <ul>
        {result.map((item, index) => {
            return(
            <Link href={`/books/${index+1}`}><li>{item.name}</li></Link>
        )})}
      </ul>
    </div>
  );
}
