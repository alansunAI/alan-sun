export const metadata = { title: "Funzioni — Alan Sun" };

export default function Features() {
  const features = [
    { title: "Generazione Foto", desc: "Immagini uniche per social ed e-commerce." },
    { title: "Scrittura Testi", desc: "Copy, blog, descrizioni e script." },
    { title: "Email Assist", desc: "Bozze, risposte e template professionali." },
    { title: "Esercizi Scolastici", desc: "Spiegazioni passo-passo e correzioni." }
  ];
  return (
    <main style={{maxWidth:960, margin:"0 auto", padding:"3rem 1rem"}}>
      <h1 style={{fontSize:32, fontWeight:800}}>Tutto quello che ti serve</h1>
      <p style={{opacity:.7, marginTop:8}}>Una suite di strumenti AI in un'unica app.</p>
      <div style={{display:"grid", gap:16, gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", marginTop:24}}>
        {features.map(f=>(
          <div key={f.title} style={{border:"1px solid rgba(255,255,255,.1)", borderRadius:16, padding:16}}>
            <h3 style={{fontSize:20, fontWeight:700}}>{f.title}</h3>
            <p style={{opacity:.7, marginTop:8}}>{f.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
