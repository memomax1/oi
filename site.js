/* Site settings: edit the site name and categories here. They update on every page. */
const NAME="MEMOMAX",CATS=["Website Testing","Make Money","Programming","AI"];
const R=document.currentScript.getAttribute("data-root")||"",E=encodeURIComponent;
const cl=c=>`<a href="${R}index.html?cat=${E(c)}">${c}</a>`;
document.body.insertAdjacentHTML("afterbegin",`<header><div class="top w"><a class="logo" href="${R}index.html">${NAME}</a>
<nav><a href="${R}index.html">Home</a>${CATS.map(cl).join("")}<a href="${R}about.html">About</a><a href="${R}contact.html">Contact</a></nav>
<form class="s" action="${R}index.html"><input name="q" placeholder="Search articles..." aria-label="Search"><button>Search</button></form></div></header>`);
document.body.insertAdjacentHTML("beforeend",`<footer><div class="w"><div class="fgrid"><div><a class="logo" href="${R}index.html">${NAME}</a><p class="mu">Practical guides on website testing, making money online, programming and AI.</p></div>
<div><h4>Topics</h4>${CATS.map(cl).join("")}</div><div><h4>Company</h4><a href="${R}about.html">About Us</a><a href="${R}contact.html">Contact Us</a></div>
<div><h4>Legal</h4><a href="${R}privacy.html">Privacy Policy</a><a href="${R}terms.html">Terms &amp; Conditions</a><a href="${R}sitemap.xml">Sitemap</a></div></div>
<p class="copy">&copy; 2026 ${NAME}. All rights reserved.</p></div></footer>`);
const U=x=>(R?"":"posts/")+x.slug+".html",card=x=>`<div class="card"><span class="tag">${x.cat}</span><h3><a class="t" href="${U(x)}">${x.title}</a></h3><p>${x.ex}</p><a class="more" href="${U(x)}">Read article &rarr;</a></div>`;
const L=document.getElementById("list");
if(L){const p=new URLSearchParams(location.search),q=(p.get("q")||"").trim().toLowerCase(),c=p.get("cat")||"";
document.getElementById("chips").innerHTML=`<a href="index.html" class="${c?"":"on"}">All</a>`+CATS.map(x=>`<a href="index.html?cat=${E(x)}" class="${x===c?"on":""}">${x}</a>`).join("");
document.getElementById("hd").textContent=q?"Search results for: "+p.get("q"):(c?c:"Latest Articles");
const r=POSTS.filter(x=>(!c||x.cat===c)&&(!q||(x.title+" "+x.ex+" "+x.cat).toLowerCase().includes(q)));
L.innerHTML=r.length?r.map(card).join(""):"<p>No articles found.</p>";}
const RL=document.getElementById("related");
if(RL){const cur=location.pathname.split("/").pop().replace(".html",""),me=POSTS.find(y=>y.slug===cur)||{};
RL.innerHTML=POSTS.filter(x=>x.slug!==cur).sort((a,b)=>(b.cat===me.cat)-(a.cat===me.cat)).slice(0,3).map(card).join("");}
/* Site-wide ad script (set in ads.js) */
if(typeof ADS!=="undefined"&&ADS.extra){const s=document.createElement("script");s.src=ADS.extra;s.setAttribute("data-cfasync","false");document.body.appendChild(s)}
