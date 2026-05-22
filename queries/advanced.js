// advanced.js - Consultes avançades i gestió d'índexs

/*docker exec -i mongodb-botiga mongosh \
 "mongodb://admin:123@localhost:27017/botiga?authSource=admin" \
 < queries/advanced.js */

db = db.getSiblingDB('botiga');

print("=== BLOC 4 - CONSULTES AVANÇADES I ÍNDEXS ===\n");

// ─────────────────────────────────────────
// 4.1 CONSULTES AVANÇADES
// ─────────────────────────────────────────

print("--- 4.1 Consultes avançades ---");

// 1. $and: productes actius amb preu entre 20€ i 100€
print("\n1. Productes actius amb preu entre 20€ i 100€ ($and):");
db.productes.find({
  $and: [
    { actiu: true },
    { preu: { $gte: 20 } },
    { preu: { $lte: 100 } }
  ]
}).forEach(p => printjson(p));

// 2. $or: categoria 'electrònica' o valoració >= 4.5
print("\n2. Productes de 'electrònica' o valoració >= 4.5 ($or):");
db.productes.find({
  $or: [
    { categoria: "electrònica" },
    { valoracio: { $gte: 4.5 } }
  ]
}).forEach(p => printjson(p));

// 3. $regex: productes amb una paraula clau al nom
print("\n3. Productes amb 'Pro' al nom ($regex):");
db.productes.find({
  nom: { $regex: /Pro/i }
}).forEach(p => printjson(p));

// 4. sort + limit: 5 productes més cars
print("\n4. Top 5 productes més cars (sort desc + limit 5):");
db.productes.find().sort({ preu: -1 }).limit(5).forEach(p => printjson(p));

// 5. $group: comptar productes per categoria
print("\n5. Nombre de productes per categoria ($group + $count):");
db.productes.aggregate([
  {
    $group: {
      _id: "$categoria",
      total: { $sum: 1 }
    }
  },
  { $sort: { total: -1 } }
]).forEach(r => printjson(r));

// 6. $group + $avg: preu mitjà per categoria
print("\n6. Preu mitjà per categoria ($group + $avg):");
db.productes.aggregate([
  {
    $group: {
      _id: "$categoria",
      preu_mitja: { $avg: "$preu" }
    }
  },
  { $sort: { preu_mitja: -1 } }
]).forEach(r => printjson(r));

// 7. Total gastat per client ($lookup + $group)
print("\n7. Total gastat per client:");
db.comandes.aggregate([
  {
    $group: {
      _id: "$client_id",
      total_gastat: { $sum: "$total" },
      num_comandes: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "clients",
      localField: "_id",
      foreignField: "_id",
      as: "info_client"
    }
  },
  {
    $project: {
      _id: 0,
      nom_client: { $arrayElemAt: ["$info_client.nom", 0] },
      cognoms: { $arrayElemAt: ["$info_client.cognoms", 0] },
      total_gastat: 1,
      num_comandes: 1
    }
  },
  { $sort: { total_gastat: -1 } }
]).forEach(r => printjson(r));

// ─────────────────────────────────────────
// 4.2 GESTIÓ D'ÍNDEXS
// ─────────────────────────────────────────

print("\n--- 4.2 Gestió d'índexs ---");

// 7. Índex simple al camp categoria
db.productes.createIndex({ categoria: 1 });
print("7. Índex simple creat: { categoria: 1 }");

// 8. Índex compost (categoria, preu)
db.productes.createIndex({ categoria: 1, preu: 1 });
print("8. Índex compost creat: { categoria: 1, preu: 1 }");

// 9. Índex de text al camp nom
db.productes.createIndex({ nom: "text" });
print("9. Índex de text creat: { nom: 'text' }");

// 10. explain('executionStats'): sense índex vs amb índex
print("\n10. explain sense índex (camp 'valoracio', sense índex creat):");
const senseidx = db.productes.find({ valoracio: { $gte: 4.0 } }).explain("executionStats");
print("    nDocsExamined (sense índex): " + senseidx.executionStats.totalDocsExamined);
print("    nDocsReturned: " + senseidx.executionStats.nReturned);

print("\n    Ara creem índex a 'valoracio' i tornem a fer la consulta...");
db.productes.createIndex({ valoracio: 1 });

const ambidx = db.productes.find({ valoracio: { $gte: 4.0 } }).explain("executionStats");
print("    nDocsExamined (amb índex): " + ambidx.executionStats.totalDocsExamined);
print("    nDocsReturned: " + ambidx.executionStats.nReturned);
print("    Stage: " + ambidx.executionStats.executionStages.stage);

// 11. Llista tots els índexs
print("\n11. Índexs de la col·lecció 'productes':");
db.productes.getIndexes().forEach(idx => printjson(idx));

print("\n✅ Consultes avançades i índexs completats!");