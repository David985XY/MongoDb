// crud.js - Operacions CRUD sobre la col·lecció productes
// Executa amb: mongosh "mongodb://admin:contrasenya@localhost:27017/botiga?authSource=admin" queries/crud.js

db = db.getSiblingDB('botiga');

print("=== BLOC 3 - OPERACIONS CRUD ===\n");

// ─────────────────────────────────────────
// 3.1 CREATE (Inserció)
// ─────────────────────────────────────────

print("--- 3.1 CREATE ---");

// 1. insertOne: inserir un producte individual
const resInsertOne = db.productes.insertOne({
  nom: "Ratolí Sense Fils ErgoPro",
  preu: 34.95,
  categoria: "electrònica",
  estoc: 40,
  valoracio: 4.4,
  actiu: true,
  etiquetes: ["ratolí", "ergonòmic", "sense-fils"],
  creat_el: new Date()
});
print("1. insertOne - ID inserit: " + resInsertOne.insertedId);

// 2. insertMany: inserir 3 productes de la categoria 'ofertes'
const resInsertMany = db.productes.insertMany([
  {
    nom: "Funda Mòbil Silicona Universal",
    preu: 5.99,
    categoria: "ofertes",
    estoc: 200,
    valoracio: 3.2,
    actiu: true,
    etiquetes: ["mòbil", "protecció", "oferta"],
    creat_el: new Date()
  },
  {
    nom: "Cable USB-C Teixit 2m",
    preu: 7.50,
    categoria: "ofertes",
    estoc: 150,
    valoracio: 3.9,
    actiu: true,
    etiquetes: ["cable", "càrrega", "oferta"],
    creat_el: new Date()
  },
  {
    nom: "Suport Portàtil Plegable",
    preu: 12.00,
    categoria: "ofertes",
    estoc: 80,
    valoracio: 4.0,
    actiu: true,
    etiquetes: ["suport", "portàtil", "oferta"],
    creat_el: new Date()
  }
]);
print("2. insertMany - " + resInsertMany.insertedCount + " productes inserits (categoria: ofertes)");

// ─────────────────────────────────────────
// 3.2 READ (Lectura)
// ─────────────────────────────────────────

print("\n--- 3.2 READ ---");

// 3. Llista tots els productes
print("3. Tots els productes:");
db.productes.find().forEach(p => printjson(p));

// 4. Productes amb preu < 50 €
print("\n4. Productes amb preu < 50€:");
db.productes.find({ preu: { $lt: 50 } }).forEach(p => printjson(p));

// 5. Productes d'una categoria amb estoc > 0
print("\n5. Productes de 'electrònica' amb estoc > 0:");
db.productes.find({ categoria: "electrònica", estoc: { $gt: 0 } }).forEach(p => printjson(p));

// 6. Productes amb valoració >= 4.0, projecció nom/preu/valoració
print("\n6. Productes amb valoració >= 4.0 (nom, preu, valoració):");
db.productes.find(
  { valoracio: { $gte: 4.0 } },
  { nom: 1, preu: 1, valoracio: 1, _id: 0 }
).forEach(p => printjson(p));

// 7. Cerca per etiqueta
print("\n7. Productes amb etiqueta 'esport':");
db.productes.find({ etiquetes: "esport" }).forEach(p => printjson(p));

// ─────────────────────────────────────────
// 3.3 UPDATE (Actualització)
// ─────────────────────────────────────────

print("\n--- 3.3 UPDATE ---");

// 8. updateOne: actualitzar el preu d'un producte específic
const resUpd1 = db.productes.updateOne(
  { nom: "Altaveu Portàtil BoomBox Mini" },
  { $set: { preu: 44.99 } }
);
print("8. updateOne preu - modificats: " + resUpd1.modifiedCount);

// 9. updateMany: augmentar estoc de categoria 'llar' en 10 unitats
const resUpd2 = db.productes.updateMany(
  { categoria: "llar" },
  { $inc: { estoc: 10 } }
);
print("9. updateMany estoc+10 (llar) - modificats: " + resUpd2.modifiedCount);

// 10. Afegir nova etiqueta a un producte
const resUpd3 = db.productes.updateOne(
  { nom: "Teclat Mecànic RGB GamerPro" },
  { $push: { etiquetes: "recomanat" } }
);
print("10. $push etiqueta 'recomanat' - modificats: " + resUpd3.modifiedCount);

// 11. Desactivar tots els productes sense estoc
const resUpd4 = db.productes.updateMany(
  { estoc: 0 },
  { $set: { actiu: false } }
);
print("11. Desactivar productes sense estoc - modificats: " + resUpd4.modifiedCount);

// ─────────────────────────────────────────
// 3.4 DELETE (Eliminació)
// ─────────────────────────────────────────

print("\n--- 3.4 DELETE ---");

// 12. Eliminar un producte pel seu nom
const resDel1 = db.productes.deleteOne({ nom: "Ratolí Sense Fils ErgoPro" });
print("12. deleteOne 'Ratolí Sense Fils ErgoPro' - eliminats: " + resDel1.deletedCount);

// 13. Eliminar tots els productes de la categoria 'ofertes'
const resDel2 = db.productes.deleteMany({ categoria: "ofertes" });
print("13. deleteMany categoria 'ofertes' - eliminats: " + resDel2.deletedCount);

print("\n✅ Totes les operacions CRUD completades!");