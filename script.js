const grid=document.getElementById("project-grid");
portfolioContent.projects.forEach(p=>{const card=document.createElement("a");card.className="project-card";card.href=p.url;
const image=p.image?`<img src="${p.image}" alt="${p.title}" onerror="this.parentElement.innerHTML='<div class="placeholder">${p.title}</div>'">`:`<div class="placeholder">${p.title}</div>`;
card.innerHTML=`<div class="project-image">${image}</div><div class="project-meta"><span>${p.category}</span><span>${p.year}</span></div><h3>${p.title}</h3><p>${p.description}</p>`;grid.appendChild(card);});
document.getElementById("year").textContent=new Date().getFullYear();