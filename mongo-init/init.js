// init.js - Script d'inicialització de la base de dades botiga
// S'executa automàticament quan el contenidor s'engega per primera vegada

db = db.getSiblingDB('botiga');

// ─────────────────────────────────────────
// COL·LECCIÓ: productes
// ─────────────────────────────────────────
db.productes.insertMany([
  {
    
    nom: "Auriculars Bluetooth SoundMax",
    preu: 49.99,
    categoria: "electrònica",
    estoc: 35,
    valoracio: 4.5,
    actiu: true,
    etiquetes: ["so", "sense-fils", "música"],
    creat_el: new Date("2024-01-15")
  },
  {
    nom: "Samarreta Esportiva DriFit",
    preu: 22.50,
    categoria: "roba",
    estoc: 120,
    valoracio: 4.2,
    actiu: true,
    etiquetes: ["esport", "transpirable", "home"],
    creat_el: new Date("2024-02-01")
  },
  {
    nom: "Llum LED d'escriptori",
    preu: 18.00,
    categoria: "llar",
    estoc: 0,
    valoracio: 3.8,
    actiu: false,
    etiquetes: ["llum", "estudi", "energia"],
    creat_el: new Date("2024-02-10")
  },
  {
    nom: "Raqueta de Pàdel ProStar",
    preu: 89.95,
    categoria: "esport",
    estoc: 15,
    valoracio: 4.7,
    actiu: true,
    etiquetes: ["pàdel", "fibra", "competició"],
    creat_el: new Date("2024-03-05")
  },
  {
    nom: "Cafetera de Càpsules QuickBrew",
    preu: 65.00,
    categoria: "llar",
    estoc: 20,
    valoracio: 4.1,
    actiu: true,
    etiquetes: ["cafè", "ràpid", "cuina"],
    creat_el: new Date("2024-03-20")
  },
  {
    nom: "Teclat Mecànic RGB GamerPro",
    preu: 119.00,
    categoria: "electrònica",
    estoc: 8,
    valoracio: 4.8,
    actiu: true,
    etiquetes: ["gaming", "mecànic", "rgb"],
    creat_el: new Date("2024-04-01")
  },
  {
    nom: "Iogui de Ioga 6mm AntiRelliscant",
    preu: 28.00,
    categoria: "esport",
    estoc: 50,
    valoracio: 4.3,
    actiu: true,
    etiquetes: ["ioga", "estirament", "fitnes"],
    creat_el: new Date("2024-04-15")
  },
  {
    nom: "Jaqueta Impermeable TrailMax",
    preu: 75.99,
    categoria: "roba",
    estoc: 0,
    valoracio: 3.5,
    actiu: false,
    etiquetes: ["muntanya", "pluja", "outdoor"],
    creat_el: new Date("2024-05-01")
  },
  {
    nom: "Altaveu Portàtil BoomBox Mini",
    preu: 39.99,
    categoria: "electrònica",
    estoc: 60,
    valoracio: 4.0,
    actiu: true,
    etiquetes: ["so", "portàtil", "bluetooth"],
    creat_el: new Date("2024-05-20")
  },
  {
    nom: "Set de Ganivets de Cuina Chef 5 peces",
    preu: 55.00,
    categoria: "llar",
    estoc: 25,
    valoracio: 4.6,
    actiu: true,
    etiquetes: ["cuina", "acer", "professional"],
    creat_el: new Date("2024-06-01")
  }
]);

print("✅ 10 productes inserits");

// ─────────────────────────────────────────
// COL·LECCIÓ: clients
// Estratègia: document pla (embedding d'adreça)
// L'adreça sempre es consulta amb les dades del client
// ─────────────────────────────────────────
db.clients.insertMany([
  {
    nom: "Maria",
    cognoms: "García López",
    email: "maria.garcia@email.com",
    telefon: "612345678",
    adreca: { carrer: "Carrer Major 12", ciutat: "Barcelona", cp: "08001" },
    data_registre: new Date("2023-06-15"),
    actiu: true
  },
  {
    nom: "Jordi",
    cognoms: "Puig Mas",
    email: "jordi.puig@email.com",
    telefon: "634567890",
    adreca: { carrer: "Avinguda Diagonal 45", ciutat: "Barcelona", cp: "08006" },
    data_registre: new Date("2023-07-01"),
    actiu: true
  },
  {
    nom: "Laura",
    cognoms: "Fernández Roca",
    email: "laura.fernandez@email.com",
    telefon: "645678901",
    adreca: { carrer: "Plaça Catalunya 3", ciutat: "Girona", cp: "17001" },
    data_registre: new Date("2023-08-10"),
    actiu: true
  },
  {
    nom: "Pere",
    cognoms: "Soler Vila",
    email: "pere.soler@email.com",
    telefon: "656789012",
    adreca: { carrer: "Carrer Nou 7", ciutat: "Tarragona", cp: "43001" },
    data_registre: new Date("2023-09-05"),
    actiu: true
  },
  {
    nom: "Anna",
    cognoms: "Martínez Pons",
    email: "anna.martinez@email.com",
    telefon: "667890123",
    adreca: { carrer: "Rambla dels Estudis 22", ciutat: "Barcelona", cp: "08002" },
    data_registre: new Date("2023-10-20"),
    actiu: false
  },
  {
    nom: "Carles",
    cognoms: "Bosch Vidal",
    email: "carles.bosch@email.com",
    telefon: "678901234",
    adreca: { carrer: "Carrer de la Llibertat 5", ciutat: "Lleida", cp: "25001" },
    data_registre: new Date("2023-11-11"),
    actiu: true
  },
  {
    nom: "Neus",
    cognoms: "Camps Torrent",
    email: "neus.camps@email.com",
    telefon: "689012345",
    adreca: { carrer: "Passeig Gràcia 88", ciutat: "Barcelona", cp: "08008" },
    data_registre: new Date("2024-01-03"),
    actiu: true
  },
  {
    nom: "Marc",
    cognoms: "Oliveras Font",
    email: "marc.oliveras@email.com",
    telefon: "690123456",
    adreca: { carrer: "Carrer Ample 14", ciutat: "Manresa", cp: "08240" },
    data_registre: new Date("2024-01-30"),
    actiu: true
  },
  {
    nom: "Sònia",
    cognoms: "Ribas Serra",
    email: "sonia.ribas@email.com",
    telefon: "601234567",
    adreca: { carrer: "Avinguda Roma 10", ciutat: "Sabadell", cp: "08201" },
    data_registre: new Date("2024-02-14"),
    actiu: true
  },
  {
    nom: "Pau",
    cognoms: "Llopis Nadal",
    email: "pau.llopis@email.com",
    telefon: "612340987",
    adreca: { carrer: "Carrer de la Pau 1", ciutat: "Terrassa", cp: "08221" },
    data_registre: new Date("2024-03-01"),
    actiu: true
  }
]);

print("✅ 10 clients inserits");

// ─────────────────────────────────────────
// COL·LECCIÓ: comandes
// Estratègia MIXTA:
//   - Embedding dels productes de la línia de comanda (snapshot del preu en el moment de compra)
//   - Referència al client mitjançant client_id (el client té vida pròpia)
// ─────────────────────────────────────────

// Obtenim els _id dels clients per les referències
const clients = db.clients.find().toArray();

db.comandes.insertMany([
  {
    client_id: clients[0]._id,
    data_comanda: new Date("2024-04-10"),
    estat: "entregada",
    adreca_entrega: { carrer: "Carrer Major 12", ciutat: "Barcelona", cp: "08001" },
    linies: [
      { nom_producte: "Auriculars Bluetooth SoundMax", preu_unitari: 49.99, quantitat: 1 },
      { nom_producte: "Llum LED d'escriptori", preu_unitari: 18.00, quantitat: 2 }
    ],
    total: 85.99
  },
  {
    client_id: clients[1]._id,
    data_comanda: new Date("2024-04-15"),
    estat: "en_proces",
    adreca_entrega: { carrer: "Avinguda Diagonal 45", ciutat: "Barcelona", cp: "08006" },
    linies: [
      { nom_producte: "Teclat Mecànic RGB GamerPro", preu_unitari: 119.00, quantitat: 1 }
    ],
    total: 119.00
  },
  {
    client_id: clients[2]._id,
    data_comanda: new Date("2024-04-20"),
    estat: "entregada",
    adreca_entrega: { carrer: "Plaça Catalunya 3", ciutat: "Girona", cp: "17001" },
    linies: [
      { nom_producte: "Iogui de Ioga 6mm AntiRelliscant", preu_unitari: 28.00, quantitat: 2 },
      { nom_producte: "Samarreta Esportiva DriFit", preu_unitari: 22.50, quantitat: 3 }
    ],
    total: 123.50
  },
  {
    client_id: clients[3]._id,
    data_comanda: new Date("2024-05-01"),
    estat: "pendent",
    adreca_entrega: { carrer: "Carrer Nou 7", ciutat: "Tarragona", cp: "43001" },
    linies: [
      { nom_producte: "Cafetera de Càpsules QuickBrew", preu_unitari: 65.00, quantitat: 1 }
    ],
    total: 65.00
  },
  {
    client_id: clients[4]._id,
    data_comanda: new Date("2024-05-05"),
    estat: "cancel·lada",
    adreca_entrega: { carrer: "Rambla dels Estudis 22", ciutat: "Barcelona", cp: "08002" },
    linies: [
      { nom_producte: "Raqueta de Pàdel ProStar", preu_unitari: 89.95, quantitat: 1 }
    ],
    total: 89.95
  },
  {
    client_id: clients[5]._id,
    data_comanda: new Date("2024-05-10"),
    estat: "entregada",
    adreca_entrega: { carrer: "Carrer de la Llibertat 5", ciutat: "Lleida", cp: "25001" },
    linies: [
      { nom_producte: "Set de Ganivets de Cuina Chef 5 peces", preu_unitari: 55.00, quantitat: 1 },
      { nom_producte: "Altaveu Portàtil BoomBox Mini", preu_unitari: 39.99, quantitat: 1 }
    ],
    total: 94.99
  },
  {
    client_id: clients[6]._id,
    data_comanda: new Date("2024-05-15"),
    estat: "en_proces",
    adreca_entrega: { carrer: "Passeig Gràcia 88", ciutat: "Barcelona", cp: "08008" },
    linies: [
      { nom_producte: "Teclat Mecànic RGB GamerPro", preu_unitari: 119.00, quantitat: 1 },
      { nom_producte: "Auriculars Bluetooth SoundMax", preu_unitari: 49.99, quantitat: 1 }
    ],
    total: 168.99
  },
  {
    client_id: clients[7]._id,
    data_comanda: new Date("2024-05-20"),
    estat: "entregada",
    adreca_entrega: { carrer: "Carrer Ample 14", ciutat: "Manresa", cp: "08240" },
    linies: [
      { nom_producte: "Jaqueta Impermeable TrailMax", preu_unitari: 75.99, quantitat: 1 }
    ],
    total: 75.99
  },
  {
    client_id: clients[8]._id,
    data_comanda: new Date("2024-06-01"),
    estat: "pendent",
    adreca_entrega: { carrer: "Avinguda Roma 10", ciutat: "Sabadell", cp: "08201" },
    linies: [
      { nom_producte: "Samarreta Esportiva DriFit", preu_unitari: 22.50, quantitat: 4 }
    ],
    total: 90.00
  },
  {
    client_id: clients[9]._id, //hace referencia al id del cliente 9.
    data_comanda: new Date("2024-06-05"),
    estat: "entregada",
    adreca_entrega: { carrer: "Carrer de la Pau 1", ciutat: "Terrassa", cp: "08221" }, //embedding
    linies: [
      { nom_producte: "Iogui de Ioga 6mm AntiRelliscant", preu_unitari: 28.00, quantitat: 1 },
      { nom_producte: "Raqueta de Pàdel ProStar", preu_unitari: 89.95, quantitat: 1 }
    ],
    total: 117.95
  }
]);

print("✅ 10 comandes inserides");
print("🎉 Base de dades 'botiga' inicialitzada correctament!");