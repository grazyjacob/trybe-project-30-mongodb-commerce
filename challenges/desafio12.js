db.produtos.updateMany({
    nome: { $not: { $eq: "McChicken" } },
    ingredientes: { $not: { $eq: "ketchup" } },
   }, { 
     $push: { ingredientes: "ketchup" } });

db.produtos.find({},
{ _id: 0, nome: 1, ingredientes: 1 });