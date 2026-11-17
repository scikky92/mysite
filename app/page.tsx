import Image from "next/image";

export default function Home() {
  return (
    <main style={{ maxWidth: 640, margin: "4rem auto", padding: "0 1rem", lineHeight: 1.6 }}>
      <h1>Ciao, sono Francesco Giuseppe Scicchitano</h1>
      <p>Benvenuto nel mio sito personale.</p>
      <p>
        <a href="mailto:scikky92@gmail.com">Scrivimi</a>
      </p>
    </main>
  );
}
