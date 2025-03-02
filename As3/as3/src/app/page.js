import Link from 'next/link'

export default function Home() {
  return (
    <div >
      <h1>Welcome to the World of Ice and Fire</h1>
      <p>Explore the rich universe of Games of Thrones and A Song of Ice and Fire.</p>
      <ul>
        <Link href="/characters"><li>Characters</li></Link>
        <Link href="/books"><li>Books</li></Link>
      </ul>
    </div>
  );
}
