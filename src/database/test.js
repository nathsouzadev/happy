const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
  /* await saveOrphanage(db, {
    lat: "-23.5862494",
    lng: "-46.6544423",
    name: "Lar dos Meninos",
    about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "1122222222",
    images: [
      "https://images.unsplash.com/photo-1597385573259-d2d9f0b7135d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1587155829644-b483b36bf5a0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    ].toString(),
    instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas Das 18h até 8h",
    open_on_weekends: "0"
  }); */

  //const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  //console.log(selectedOrphanages);

  // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"');
  // console.log(orphanage);

  console.log(await db.all("DELETE FROM orphanages"))
});
