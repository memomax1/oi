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
/* Ads (the codes live in ads.js) */
const AD=typeof ADS!=="undefined"?ADS:{};
function adBox(s){if(!s||!s.code||(s.min&&innerWidth<s.min)||(s.max&&innerWidth>s.max))return null;
const d=document.createElement("div");d.className="ad";d.innerHTML="<small>Advertisement</small>";
if(AD.mode==="direct"){const b=document.createElement("div");b.innerHTML=s.code;b.querySelectorAll("script").forEach(o=>{const n=document.createElement("script");[...o.attributes].forEach(a=>n.setAttribute(a.name,a.value));n.text=o.text;o.replaceWith(n)});d.appendChild(b)}
else{const f=document.createElement("iframe");if(AD.mode==="safe")f.setAttribute("sandbox","allow-scripts allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation");
f.srcdoc='<!doctype html><html><body style="margin:0">'+s.code+'</body></html>';f.width=s.w;f.height=s.h;f.title="Advertisement";f.loading="lazy";
f.style.cssText="border:0;max-width:100%;display:block;margin:auto";d.appendChild(f)}
return d}
if(L){const a=adBox(AD.homeTop)||adBox(AD.homeTopMobile),b=adBox(AD.homeBottom);if(a)L.before(a);if(b)L.after(b)}
const PB=document.querySelector(".post-body");
if(PB){if(PB.children.length>3){const a=adBox(AD.articleMid);if(a)PB.children[2].after(a)}
const e=adBox(AD.articleEnd);if(e)PB.after(e)}
[["railLeft","l"],["railRight","r"]].forEach(([k,c])=>{const a=adBox(AD[k]);if(a){const w=document.createElement("div");w.className="rail "+c;w.appendChild(a);document.body.appendChild(w)}});
if(AD.extra){const s=document.createElement("script");s.src=AD.extra;s.setAttribute("data-cfasync","false");document.body.appendChild(s)}
