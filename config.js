const NURA_CONFIG={whatsapp:"212600000000",livraison:20, prices:{one:249,two:399,old:299}};
function waLink(m){return `https://wa.me/${NURA_CONFIG.whatsapp}?text=${encodeURIComponent(m)}`;}
function saveOrder(o){const a=JSON.parse(localStorage.getItem('nura_orders')||'[]');a.unshift({...o,date:new Date().toISOString(),status:o.status||'Nouvelle',id:Date.now()});localStorage.setItem('nura_orders',JSON.stringify(a));}
function getOrders(){return JSON.parse(localStorage.getItem('nura_orders')||'[]');}
function setOrders(a){localStorage.setItem('nura_orders',JSON.stringify(a));}
const NURA_STOCK_DEFAULT={ "NOUR-Noir":5, "NOUR-Bordeaux":4, "NOUR-Beige":3, "LINA-Noir":4, "LINA-Marron":3, "LINA-Beige Clair":3 };
function getStock(){let s=JSON.parse(localStorage.getItem('nura_stock')||'null'); if(!s){s={...NURA_STOCK_DEFAULT}; localStorage.setItem('nura_stock',JSON.stringify(s));} return s;}
function setStock(s){localStorage.setItem('nura_stock',JSON.stringify(s));}
