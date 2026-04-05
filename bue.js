'use strict';

/* ============================================================
   DONNÉES BUE — Propres au bureau étudiant
   ============================================================ */
const B = {

  /* Bureau — noms fictifs à remplacer par les vrais noms */
  bureau: [
    { init:"KA", nom:"Kolade Adéyemi BELLO", role:"Président du BUE", desc:"Représente l'ensemble des étudiants auprès de la direction de l'ENSPD. Coordonne les activités du bureau et préside les assemblées générales.", bg:"#EBF2FA", c:"#1A56A0", star:true },
    { init:"FA", nom:"Fatima IBRAHIM SANI", role:"Secrétaire Générale", desc:"Gère la communication interne, rédige les procès-verbaux et coordonne les commissions. Interface entre le bureau et les étudiants.", bg:"#E8F5F0", c:"var(--vert)" },
    { init:"OD", nom:"Ousséni DJIBRILA", role:"Trésorier", desc:"Assure la comptabilité du BUE, gère les cotisations et suit les dépenses. Produit le rapport financier à chaque AG.", bg:"#FBF5E0", c:"#8a6500" },
    { init:"MH", nom:"Mariam HOUNSOU", role:"Commission de Contrôle", desc:"Vérifie la régularité des actes du bureau exécutif. Contrôle la gestion financière et rend compte à l'assemblée générale.", bg:"#F5F3FF", c:"#5b21b6" },
    { init:"YD", nom:"Yannick DADJO", role:"Cabinet Civil", desc:"Conseille le Président sur les orientations stratégiques du BUE et sert d'interface avec les partenaires extérieurs.", bg:"#EBF2FA", c:"#1A56A0" },
    { init:"AS", nom:"Aïssata SOULÉ", role:"Responsable Communication", desc:"Gère les canaux de communication du BUE, les réseaux sociaux et la diffusion des informations aux étudiants.", bg:"#E8F5F0", c:"var(--vert)" },
  ],

  /* Actualités propres au BUE — vie étudiante uniquement */
  actus: [
    { id:1, titre:"Assemblée Générale du BUE — compte rendu & résolutions", cat:"BUE", date:"15 Avr 2026", bg:"#EBF2FA", texte:"La première Assemblée Générale du BUE s'est tenue avec la participation de plus de 80 étudiants. Les résolutions adoptées portent sur l'organisation des événements du second semestre et la gestion du fonds d'entraide étudiant." },
    { id:2, titre:"CRISTAL — Résultats du concours Data Analyst interne", cat:"CRISTAL", date:"22 Avr 2026", bg:"#E8F5F0", texte:"Le concours interne organisé par la section TAL du CRISTAL a récompensé 3 étudiants pour leurs analyses de données sur R et Python. Une belle démonstration du niveau de l'ENSPD." },
    { id:3, titre:"Tournoi de football inter-filières — SA remporte le titre", cat:"Sport", date:"25 Avr 2026", bg:"#FBF5E0", texte:"L'équipe de la filière Statistique Appliquée remporte le premier tournoi de football inter-filières organisé par le BUE. Une occasion de renforcer la cohésion entre promotions." },
    { id:4, titre:"Soirée de bienvenue des étudiants de L1 — succès total", cat:"Social", date:"10 Mar 2026", bg:"#F5F3FF", texte:"Le BUE a organisé la soirée de bienvenue des nouveaux étudiants de L1 2025-2026. Animations, présentations des associations et buffet au menu d'une soirée très réussie." },
    { id:5, titre:"Atelier Club Science Ouverte — initiation à la publication", cat:"Formation", date:"17 Mai 2026", bg:"#EBF2FA", texte:"Le Club Science Ouverte Parakou a animé un atelier sur la rédaction et la publication d'articles scientifiques en open access. Animé par des doctorants du LaReSPD." },
    { id:6, titre:"Gala de fin d'année — Promotion 2026 honorée", cat:"Social", date:"10 Mai 2026", bg:"#E8F5F0", texte:"La soirée de gala annuelle du BUE a réuni étudiants, enseignants et administration pour célébrer la fin de l'année académique et honorer les étudiants les plus méritants de chaque filière." },
  ],

  /* Événements */
  evenements: [
    { id:1, jour:"15", mois:"Avr", titre:"Assemblée Générale BUE — Élection du nouveau bureau 2026-2027", heure:"09h00", lieu:"Amphi principal ENSPD", type:"Assemblée", desc:"Élection du bureau exécutif BUE pour l'année académique 2026-2027. Tous les étudiants régulièrement inscrits sont invités à participer et à voter. Candidatures ouvertes jusqu'au 10 avril." },
    { id:2, jour:"22", mois:"Avr", titre:"Concours CRISTAL — Meilleur data analyste de l'ENSPD", heure:"08h00", lieu:"Salle informatique", type:"Compétition", desc:"Compétition interne organisée par la section TAL du CRISTAL. Analyse de données sous R et Python. Prix et certificats pour les 3 premiers. Inscription obligatoire avant le 18 avril." },
    { id:3, jour:"30", mois:"Avr", titre:"Conférence — Statistiques et IA : opportunités pour l'Afrique", heure:"14h00", lieu:"Amphi 1100 ENSPD", type:"Conférence", desc:"Conférence animée par un expert de l'UEMOA sur les opportunités offertes par l'intelligence artificielle aux statisticiens africains. Ouverte à tous les étudiants et enseignants." },
    { id:4, jour:"10", mois:"Mai", titre:"Gala de fin d'année — Promotion 2026", heure:"18h00", lieu:"Campus Université de Parakou", type:"Social", desc:"Soirée de gala pour célébrer la fin de l'année académique 2025-2026. Remise des prix d'excellence, animations et dîner. Cotisation : 2 000 FCFA par étudiant." },
    { id:5, jour:"17", mois:"Mai", titre:"Atelier Club Science Ouverte — Publication académique", heure:"10h00", lieu:"Salle de séminaire", type:"Formation", desc:"Initiation à la rédaction et publication d'articles scientifiques en open access. Animé par des doctorants du LaReSPD. Places limitées — inscription obligatoire." },
    { id:6, jour:"25", mois:"Mai", titre:"Match de football inter-filières BUE", heure:"16h00", lieu:"Stade universitaire", type:"Sport", desc:"2ème édition du tournoi de football inter-filières. SA vs PSE et autres matchs de poules. Arbitrage professionnel, trophée et coupes pour les gagnants. Venez supporter votre filière !" },
  ],

  /* CRISTAL — 4 sections */
  cristal: [
    { titre:"Section Science Fondamentale (SSF)", desc:"Renforcement des bases théoriques : mathématiques, probabilités, statistiques fondamentales. Sessions hebdomadaires de révision et exercices collectifs.", nb:"25 membres" },
    { titre:"Section Travaux Appliqués aux Logiciels (TAL)", desc:"Maîtrise pratique de R, Python, STATA, SPSS, Excel avancé. Ateliers pratiques, projets collectifs et compétitions internes.", nb:"38 membres" },
    { titre:"Section Art & Développement Personnel (SADP)", desc:"Développement des soft skills, leadership, prise de parole, culture générale et épanouissement personnel des étudiants.", nb:"20 membres" },
    { titre:"Section Club d'Anglais (SCA)", desc:"Apprentissage de l'anglais académique et professionnel pour statisticiens, planificateurs et démographes. Sessions hebdomadaires.", nb:"30 membres" },
  ],

  /* Ressources — spécifiques étudiants BUE */
  ressources: [
    { titre:"Emploi du temps L1 — Semestres 1&2 (2025-2026)", type:"PDF", cat:"Emploi du temps" },
    { titre:"Emploi du temps L2 — Semestres 3&4 (2025-2026)", type:"PDF", cat:"Emploi du temps" },
    { titre:"Emploi du temps L3 — Semestres 5&6 (2025-2026)", type:"PDF", cat:"Emploi du temps" },
    { titre:"Calendrier académique complet 2025-2026", type:"PDF", cat:"Emploi du temps" },
    { titre:"Modèle — Demande d'attestation d'inscription", type:"Word", cat:"Administratif" },
    { titre:"Modèle — Demande de relevé de notes", type:"Word", cat:"Administratif" },
    { titre:"Modèle — Demande de certificat de scolarité", type:"Word", cat:"Administratif" },
    { titre:"Modèle — Demande de mise en stage", type:"Word", cat:"Administratif" },
    { titre:"Glossaire LMD — Termes essentiels à connaître", type:"PDF", cat:"Pédagogie" },
    { titre:"Guide de rédaction du mémoire ENSPD", type:"PDF", cat:"Pédagogie" },
    { titre:"Règlement intérieur de l'ENSPD", type:"PDF", cat:"Pédagogie" },
  ],

  /* Forum */
  forum: {
    cats: [
      { ico:"📚", titre:"Cours & Révisions", desc:"Questions sur les cours", nb:12 },
      { ico:"💼", titre:"Stages & Emplois", desc:"Offres et conseils", nb:8 },
      { ico:"💻", titre:"Logiciels & Outils", desc:"R, Python, STATA...", nb:24 },
      { ico:"📋", titre:"Administration", desc:"Démarches & procédures", nb:6 },
      { ico:"🎉", titre:"Vie étudiante", desc:"Événements & Social", nb:15 },
      { ico:"🌍", titre:"Opportunités", desc:"Bourses, masters à l'étranger", nb:9 },
    ],
    fils: [
      { id:1, titre:"Comment installer R et RStudio sur Windows 11 ?", cat:"Logiciels & Outils", auteur:"Moussa K.", date:"Il y a 2h", rep:7, vues:134, pin:true },
      { id:2, titre:"Conseils pour réussir l'examen de Statistique Mathématique L2", cat:"Cours & Révisions", auteur:"Aminata D.", date:"Il y a 5h", rep:12, vues:289 },
      { id:3, titre:"Offre de stage — INSAE Cotonou, 3 mois, toutes filières", cat:"Stages & Emplois", auteur:"Admin BUE", date:"Hier", rep:3, vues:201, pin:true },
      { id:4, titre:"Bourse Pan African University — date limite 30 mai", cat:"Opportunités", auteur:"Jédida M.", date:"Il y a 2j", rep:5, vues:312 },
      { id:5, titre:"Problème avec l'inscription en ligne sur SISTAG", cat:"Administration", auteur:"Alassane G.", date:"Il y a 3j", rep:9, vues:178 },
      { id:6, titre:"Partage supports — cours de Démographie L2 Sem 3", cat:"Cours & Révisions", auteur:"Robert Y.", date:"Il y a 3j", rep:4, vues:95 },
    ],
  },

  /* Galerie — uniquement vie étudiante BUE */
  galerie: [
    "Soirée de bienvenue L1 — 2025",
    "Tournoi de football inter-filières",
    "Assemblée Générale BUE",
    "Atelier CRISTAL — Python",
    "Gala de fin d'année 2025",
    "Conférence IA & Statistiques",
    "Remise des prix BUE",
    "Activité Club Science Ouverte",
    "Sortie pédagogique ENSPD",
    "Permanence BUE",
    "Réunion bureau exécutif",
    "Activité sportive étudiante",
  ],
};

/* ============================================================
   ROUTEUR, TOAST, MODAL (partagés)
   ============================================================ */
function router(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('[data-page]').forEach(a => a.classList.toggle('active', a.dataset.page === page));
  const el = document.getElementById('p-' + page);
  if (el) el.classList.add('active');
  document.getElementById('nav-links')?.classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function toggleMenu() { document.getElementById('nav-links').classList.toggle('open'); }

function toast(msg, type = 'ok') {
  const c = document.getElementById('toasts');
  const el = document.createElement('div');
  el.className = `toast toast-${type}`;
  el.innerHTML = `<span>${type==='ok'?'✓':type==='err'?'✕':'ℹ'}</span> ${msg}`;
  c.appendChild(el);
  requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('show')));
  setTimeout(() => { el.classList.remove('show'); setTimeout(() => el.remove(), 400); }, 3200);
}

function openModal(titre, html) {
  document.getElementById('modal-title').textContent = titre;
  document.getElementById('modal-body').innerHTML = html;
  document.getElementById('modal-bg').classList.add('open');
}
function closeModal() { document.getElementById('modal-bg').classList.remove('open'); }

/* ============================================================
   RENDERS
   ============================================================ */
function renderBureau() {
  const el = document.getElementById('bureau-list');
  if (!el) return;
  el.innerHTML = B.bureau.map(m => `
    <div class="card membre-card">
      ${m.star ? '<div style="position:absolute;top:12px;right:12px;background:var(--or);color:#fff;font-size:10px;font-weight:700;padding:2px 8px;border-radius:100px">PRÉSIDENT</div>' : ''}
      <div class="membre-av" style="background:${m.bg};color:${m.c}">${m.init}</div>
      <div class="m-nom">${m.nom}</div>
      <div class="m-role" style="color:#1A56A0">${m.role}</div>
      <div class="m-desc">${m.desc}</div>
      <div class="mt-16">
        <div class="photo-ph" style="height:80px;width:80px;border-radius:50%;margin:0 auto">
          <div class="ph-icon" style="font-size:16px">👤</div>
          <div class="ph-txt">Photo</div>
        </div>
      </div>
    </div>`).join('');
}

function renderActusBueHome() {
  const el = document.getElementById('actus-bue-home');
  if (!el) return;
  el.innerHTML = B.actus.slice(0,3).map(a => actuBueCard(a)).join('');
}

function actuBueCard(a) {
  return `<div class="card actu-card" onclick="showActuBue(${a.id})">
    <div class="actu-img" style="background:${a.bg}">
      <div class="photo-ph" style="width:100%;height:100%;border-radius:0;border:none">
        <div class="ph-icon" style="font-size:18px">📷</div>
        <div class="ph-txt">Photo événement</div>
      </div>
    </div>
    <div class="actu-body">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <span class="tag" style="background:#EBF2FA;color:#1A56A0;font-size:11px">${a.cat}</span>
        <span style="font-size:11px;color:var(--texte3)">${a.date}</span>
      </div>
      <h3>${a.titre}</h3>
      <p>${a.texte.substring(0,80)}...</p>
      <div class="actu-foot"><span></span><span style="color:#1A56A0;font-weight:600;font-size:13px">Lire →</span></div>
    </div>
  </div>`;
}

function showActuBue(id) {
  const a = B.actus.find(x => x.id === id);
  openModal(a.titre, `
    <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap">
      <span class="tag" style="background:#EBF2FA;color:#1A56A0">${a.cat}</span>
      <span class="tag tag-gray">📅 ${a.date}</span>
    </div>
    <div class="photo-ph" style="height:160px;margin-bottom:16px">
      <div class="ph-icon">📷</div>
      <div style="font-size:13px;font-weight:600">Photo de l'article</div>
      <div class="ph-txt">À remplacer par une vraie photo</div>
    </div>
    <p style="font-size:15px;line-height:1.85;color:var(--texte2)">${a.texte}</p>
    <button class="btn btn-ghost btn-sm mt-16" onclick="closeModal()">Fermer</button>`);
}

function renderEventsHome() {
  const el = document.getElementById('events-home');
  if (!el) return;
  el.innerHTML = B.evenements.slice(0,3).map(e => eventItem(e)).join('');
}

function renderEventsList() {
  const el = document.getElementById('events-list');
  if (!el) return;
  el.innerHTML = B.evenements.map(e => eventItem(e)).join('');
}

function eventItem(e) {
  const cols = { Assemblée:'#1A56A0', Compétition:'#C0392B', Conférence:'var(--vert)', Social:'#D4A017', Formation:'#1D9E75', Sport:'#C0392B' };
  return `<div class="event-item" onclick="showEvent(${e.id})">
    <div class="event-date" style="background:${cols[e.type]||'#1A56A0'}">
      <div class="day">${e.jour}</div>
      <div class="mon">${e.mois}</div>
    </div>
    <div class="event-info" style="flex:1">
      <h4>${e.titre}</h4>
      <p>${e.desc.substring(0,70)}...</p>
      <div class="event-meta">
        <span>🕐 ${e.heure}</span>
        <span>📍 ${e.lieu}</span>
        <span class="tag" style="background:${cols[e.type]||'#1A56A0'}20;color:${cols[e.type]||'#1A56A0'};margin:0;font-size:11px">${e.type}</span>
      </div>
    </div>
    <button class="btn btn-outline btn-sm" style="flex-shrink:0" onclick="event.stopPropagation();inscrire(${e.id})">S'inscrire</button>
  </div>`;
}

function showEvent(id) {
  const e = B.evenements.find(x => x.id === id);
  openModal(e.titre, `
    <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap">
      <span class="tag tag-bleu">📅 ${e.jour} ${e.mois} 2026</span>
      <span class="tag tag-gray">🕐 ${e.heure}</span>
      <span class="tag tag-gray">📍 ${e.lieu}</span>
    </div>
    <p style="font-size:15px;line-height:1.85;color:var(--texte2);margin-bottom:20px">${e.desc}</p>
    <div style="display:flex;gap:8px">
      <button class="btn btn-primary btn-sm" onclick="inscrire(${e.id});closeModal()">✓ S'inscrire</button>
      <button class="btn btn-ghost btn-sm" onclick="closeModal()">Fermer</button>
    </div>`);
}

function inscrire(id) {
  const e = B.evenements.find(x => x.id === id);
  toast(`Inscription confirmée : ${e.titre.substring(0,40)}...`, 'ok');
}

function proposerEvent() {
  openModal('Proposer un événement', `
    <div style="display:flex;flex-direction:column;gap:14px">
      <div class="form-group"><label class="form-label">Titre de l'événement</label><input class="form-input" type="text" placeholder="Ex: Atelier Python L2" id="ev-titre"></div>
      <div class="form-group"><label class="form-label">Date prévue</label><input class="form-input" type="date" id="ev-date"></div>
      <div class="form-group"><label class="form-label">Lieu</label><input class="form-input" type="text" placeholder="Ex: Salle informatique ENSPD" id="ev-lieu"></div>
      <div class="form-group"><label class="form-label">Description</label><textarea class="form-textarea" id="ev-desc" placeholder="Décrivez l'événement..."></textarea></div>
      <button class="btn btn-primary" onclick="soumettreEvent()">Soumettre au BUE</button>
    </div>`);
}

function soumettreEvent() {
  const t = document.getElementById('ev-titre')?.value.trim();
  if (!t) { toast('Veuillez remplir le titre.', 'err'); return; }
  closeModal();
  toast('Proposition envoyée au BUE. Nous vous répondrons sous 48h.', 'ok');
}

function renderCristal() {
  const el = document.getElementById('cristal-sections');
  if (!el) return;
  const bgs = ['#EBF2FA','#E8F5F0','#FBF5E0','#F5F3FF'];
  const cs  = ['#1A56A0','var(--vert)','#8a6500','#5b21b6'];
  el.innerHTML = B.cristal.map((s,i) => `
    <div class="card card-pad" style="border-top:3px solid ${cs[i]}">
      <div style="font-size:12px;font-weight:700;color:${cs[i]};margin-bottom:8px;text-transform:uppercase;letter-spacing:0.5px">${s.nb}</div>
      <h4 style="font-size:14px;font-weight:700;margin-bottom:8px">${s.titre}</h4>
      <p style="font-size:13px;color:var(--texte2);line-height:1.6">${s.desc}</p>
    </div>`).join('');
}

function renderRes(cat = '') {
  const el = document.getElementById('res-list');
  if (!el) return;
  const list = cat ? B.ressources.filter(r => r.cat === cat) : B.ressources;
  const bgs = { 'Emploi du temps':'#EBF2FA', 'Administratif':'#E8F5F0', 'Pédagogie':'#FBF5E0' };
  el.innerHTML = list.map(r => `
    <div class="res-item" onclick="toast('Téléchargement : ${r.titre.substring(0,40)}...','ok')">
      <div class="res-ico" style="background:${bgs[r.cat]||'#f0f0f0'}">${r.type==='PDF'?'📄':'📝'}</div>
      <div style="flex:1">
        <h4>${r.titre}</h4>
        <p>${r.cat} · ${r.type}</p>
      </div>
      <button class="btn btn-outline btn-sm" onclick="event.stopPropagation();toast('Téléchargement : ${r.titre.substring(0,35)}...','ok')">⬇ Télécharger</button>
    </div>`).join('');
}

function filterRes(cat, el) {
  document.querySelectorAll('.rf').forEach(b => { b.className = 'btn btn-ghost btn-sm rf'; });
  el.className = 'btn btn-primary btn-sm rf';
  renderRes(cat);
}

function renderForumCats() {
  const el = document.getElementById('forum-cats');
  if (!el) return;
  el.innerHTML = B.forum.cats.map(c => `
    <div class="forum-cat" onclick="filterFils('${c.titre}',this)">
      <div class="fc-ico">${c.ico}</div>
      <h4>${c.titre}</h4>
      <p>${c.nb} discussions</p>
    </div>`).join('');
}

function renderFils(cat = '') {
  const el = document.getElementById('forum-fils');
  if (!el) return;
  const list = cat ? B.forum.fils.filter(f => f.cat === cat) : B.forum.fils;
  if (!list.length) { el.innerHTML = '<p style="text-align:center;color:var(--texte3);padding:32px">Aucun sujet dans cette catégorie.</p>'; return; }
  el.innerHTML = list.map(f => `
    <div class="thread" onclick="showFil(${f.id})">
      <div class="thread-top">
        <h4>${f.pin ? '📌 ' : ''}${f.titre}</h4>
        <span class="tag" style="background:#EBF2FA;color:#1A56A0;font-size:11px;flex-shrink:0">${f.cat}</span>
      </div>
      <div class="thread-meta">
        <span>👤 ${f.auteur}</span>
        <span>🕐 ${f.date}</span>
        <span>💬 ${f.rep} réponses</span>
        <span>👁 ${f.vues} vues</span>
      </div>
    </div>`).join('');
}

function filterFils(cat, el) {
  document.querySelectorAll('.forum-cat').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  renderFils(cat);
}

function showFil(id) {
  const f = B.forum.fils.find(x => x.id === id);
  openModal(f.titre, `
    <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap">
      <span class="tag" style="background:#EBF2FA;color:#1A56A0">${f.cat}</span>
      <span class="tag tag-gray">Par ${f.auteur}</span>
      <span class="tag tag-gray">${f.date}</span>
    </div>
    <p style="color:var(--texte2);margin-bottom:20px">Ce fil contient <strong>${f.rep} réponses</strong> et a été consulté <strong>${f.vues} fois</strong>.</p>
    <div class="form-group"><label class="form-label">Votre réponse</label><textarea class="form-textarea" placeholder="Partagez votre avis..."></textarea></div>
    <div style="display:flex;gap:8px;margin-top:8px">
      <button class="btn btn-primary btn-sm" onclick="repondre()">Publier la réponse</button>
      <button class="btn btn-ghost btn-sm" onclick="closeModal()">Fermer</button>
    </div>`);
}

function repondre() { closeModal(); toast('Réponse publiée avec succès !', 'ok'); }

function nouveauSujet() {
  openModal('Créer un nouveau sujet', `
    <div style="display:flex;flex-direction:column;gap:14px">
      <div class="form-group"><label class="form-label">Titre du sujet</label><input class="form-input" type="text" placeholder="Ex: Comment utiliser ggplot2 sous R ?" id="suj-titre"></div>
      <div class="form-group"><label class="form-label">Catégorie</label>
        <select class="form-select" id="suj-cat">${B.forum.cats.map(c=>`<option>${c.titre}</option>`).join('')}</select>
      </div>
      <div class="form-group"><label class="form-label">Message</label><textarea class="form-textarea" style="min-height:120px" placeholder="Décrivez votre question en détail..." id="suj-msg"></textarea></div>
      <button class="btn btn-primary" onclick="publierSujet()">Publier le sujet</button>
    </div>`);
}

function publierSujet() {
  const t = document.getElementById('suj-titre')?.value.trim();
  const m = document.getElementById('suj-msg')?.value.trim();
  if (!t || !m) { toast('Veuillez remplir le titre et le message.', 'err'); return; }
  closeModal(); toast('Sujet publié avec succès !', 'ok');
}

function renderGalerieBue() {
  const el = document.getElementById('galerie-bue');
  if (!el) return;
  el.innerHTML = B.galerie.map(g => `
    <div class="gal-item">
      <div class="photo-ph" style="width:100%;height:100%;border-radius:0;border:none">
        <div class="ph-txt" style="font-size:11px;font-weight:600;text-align:center;padding:8px">${g}</div>
      </div>
      <div class="gal-overlay">${g}</div>
    </div>`).join('');
}

function envoyerContact(e) {
  e.preventDefault();
  const nom = document.getElementById('c-nom').value.trim();
  const email = document.getElementById('c-email').value.trim();
  const msg = document.getElementById('c-msg').value.trim();
  if (!nom || !email || !msg) { toast('Veuillez remplir tous les champs obligatoires.', 'err'); return; }
  toast(`Message envoyé au BUE ! Réponse sous 48h, ${nom}.`, 'ok');
  e.target.reset();
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-page]').forEach(el => {
    el.addEventListener('click', e => { e.preventDefault(); router(el.dataset.page); });
  });
  document.getElementById('modal-bg')?.addEventListener('click', e => {
    if (e.target.id === 'modal-bg') closeModal();
  });

  renderBureau();
  renderActusBueHome();
  renderEventsHome();
  renderEventsList();
  renderCristal();
  renderRes();
  renderForumCats();
  renderFils();
  renderGalerieBue();

  router('accueil');
});
