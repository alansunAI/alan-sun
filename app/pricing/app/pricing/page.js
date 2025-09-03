export const metadata = { title: "Prezzi — Alan Sun" };

export default function Pricing() {
  const plans = [
    { name: "Free", price: "0€", items: ["10 richieste/giorno", "Accesso base"] },
    { name: "Premium", price: "9,99€/mese", items: ["Uso esteso", "Priorità standard"] },
    { name: "Pro", price: "29,99€/mese", items: ["Priorità alta", "Potenza AI maggiore"] },
  ];
  return (
    <main style={{maxWidth:960, margin:"0 auto", padding:"3rem 1rem", textAlign:"center"}}>
      <h1 style={{fontSize:32, fontWeight:800}}>Scegli il tuo piano</h1>
      <p style={{opacity:.7, marginTop:8}}>Parti gratis, passa a Premium quando vuoi.</p>
      <div style={{display:"grid", gap:16, gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", marginTop:24}}>
        {plans.map(p=>(
          <div key={p.name} style={{border:"1px solid rgba(255,255,255,.1)", borderRadius:16, padding:16}}>
            <h3 style={{fontSize:20, fontWeight:700}}>{p.name}</h3>
            <p style={{fontSize:28, fontWeight:800, marginTop:8}}>{p.price}</p>
            <ul style={{listStyle:"none", padding:0, marginTop:12, opacity:.85}}>
              {p.items.map(i=> <li key={i}>• {i}</li>)}
            </ul>
            <a href="#" style={{display:"inline-block", marginTop:16, padding:"10px 16px", borderRadius:12, background:"#FF7A00", color:"#000", fontWeight:700}}>
              Scegli {p.name}
            </a>
          </div>
        ))}
      </div>
      <p style={{fontSize:12, opacity:.5, marginTop:16}}>
        * Pagamenti con Stripe. Imposterai le chiavi in <code>.env</code> quando vorrai attivarli.
      </p>
    </main>
  );
}
