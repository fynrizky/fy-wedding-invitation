import { getAllWeddings } from "@/lib/firestore";
import Link from "next/link";

export default async function Home() {
  const weddings = await getAllWeddings();


  return (
    <main>
      <h1 style={{ fontSize: "1.5rem", textAlign: "center", margin: "1rem" }}>Daftar Wedding</h1>
      <hr />
    
      {weddings.map((wedding: any) => (
        <div key={wedding.id} style={{ paddingTop: 20, paddingLeft: 20 }}>
          <Link href={`/${wedding.id}`}>
            {wedding.bride.name} & {wedding.groom.name}
          </Link>
        </div>
      ))}
    </main>
  );
}