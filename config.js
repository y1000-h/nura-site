const NURA_CONFIG={whatsapp:"212600000000",livraison:20, prices:{one:249,two:399,old:299}};
function waLink(m){return `https://wa.me/${NURA_CONFIG.whatsapp}?text=${encodeURIComponent(m)}`;}
function saveOrder(o){const a=JSON.parse(localStorage.getItem('nura_orders')||'[]');a.unshift({...o,date:new Date().toISOString()});localStorage.setItem('nura_orders',JSON.stringify(a));}
function getOrders(){return JSON.parse(localStorage.getItem('nura_orders')||'[]');}
