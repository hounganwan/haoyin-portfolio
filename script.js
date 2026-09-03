const grid=document.getElementById("project-grid");
portfolioContent.projects.forEach((p,i)=>{const card=document.createElement("a");card.className="project";card.href=p.url;
const visual=p.image?`<img src="${p.image}" alt="${p.title}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`:"";
card.innerHTML=`<div class="project-visual">${visual}<div class="project-fallback">${String(i+1).padStart(2,"0")} — ${p.title}</div></div><div class="project-info"><div class="meta"><span>${p.category}</span><span>${p.year}</span></div><h3>${p.title}</h3><h4>${p.subtitle}</h4><p>${p.description}</p><span class="view">View case study ↗</span></div>`;grid.appendChild(card);});
document.getElementById("year").textContent=new Date().getFullYear();