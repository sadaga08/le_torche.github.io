const BASE_URL = import.meta.env.VITE_API_URL;

const getToken = () => sessionStorage.getItem("token");

// ── ARTICLES ─────────────────────────────────────────────────────
export const getArticles = async () => {
  const res = await fetch(`${BASE_URL}/api/articles`);
  if (!res.ok) throw new Error("Erreur fetch articles");
  return res.json();
};

// ── AUTH ──────────────────────────────────────────────────────────
export const inscription = async (pseudo, email, password) => {
  const res = await fetch(`${BASE_URL}/api/auth/inscription`, { // ← /api/auth
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pseudo, email, password }),
  });
  if (!res.ok) throw new Error("Erreur inscription");
  return res.json();
};

export const connexion = async (email, password) => {
  const res = await fetch(`${BASE_URL}/api/auth/connexion`, { // ← /api/auth
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error("Erreur connexion");
  const data = await res.json();
  if (data.token) sessionStorage.setItem("token", data.token);
  return data;
};

export const deconnexion = () => sessionStorage.removeItem("token");

// ── ADMIN ─────────────────────────────────────────────────────────
export const listerUtilisateurs = async () => {
  const res = await fetch(`${BASE_URL}/api/admin/users`, { // ← /api/admin
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  if (!res.ok) throw new Error("Erreur liste utilisateurs");
  return res.json();
};

export const promoAdmin = async (id) => {
  const res = await fetch(`${BASE_URL}/api/admin/users/${id}/promo`, { // ← /api/admin
    method: "PATCH",
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  if (!res.ok) throw new Error("Erreur promotion admin");
  return res.json();
};

export const retrograderUser = async (id) => {
  const res = await fetch(`${BASE_URL}/api/admin/users/${id}/retrograde`, { // ← /api/admin
    method: "PATCH",
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  if (!res.ok) throw new Error("Erreur rétrogradation");
  return res.json();
};

export const supprimerUtilisateur = async (id) => {
  const res = await fetch(`${BASE_URL}/api/admin/users/${id}`, { // ← /api/admin
    method: "DELETE",
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  if (!res.ok) throw new Error("Erreur suppression");
  return res.json();
};



// ── VOS ARTICLES ──────────────────────────────────────────────────
export const creerVosArticle = async (pseudo, theme, titre, description) => {
  const res = await fetch(`${BASE_URL}/api/vosArticles`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pseudo, theme, titre, description }),
  });
  if (!res.ok) throw new Error("Erreur création article");
  return res.json();
};

export const getVosArticles = async () => {
  const res = await fetch(`${BASE_URL}/api/vosArticles`);
  if (!res.ok) throw new Error("Erreur fetch vos articles");
  return res.json();
};

export const supprimerVosArticle = async (id) => {
  const res = await fetch(`${BASE_URL}/api/vosArticles/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  if (!res.ok) throw new Error("Erreur suppression article");
  return res.json();
};