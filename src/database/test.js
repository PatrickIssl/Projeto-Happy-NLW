const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
   
    //inserir dados na tabela 
      await saveOrphanage(db , {
        lat:"-24.9674377",
        lng:"-53.4954961",
        name:"Lar das crianças",
        about:"Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp:"45999702182",
        description:"Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        images:[
            "https://img.ibxk.com.br/2020/01/30/30021141299110.jpg?w=1120&h=420&mode=crop&scale=both",
            "https://digitaispuccampinas.files.wordpress.com/2016/05/orfc3a3os-6.jpg"
        ].toString(),
        instructions:"Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours:"Horário de visitas Das 18h até 8h",
        open_on_weekends:"0"
    
    });

  
    
    //consultar somente 1 orfanato pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log( orphanage)
    
    //deletar dado da tabela
    console.log(await db.run('DELETE FROM orphanages WHERE id = "8"'))

 

   //consultar dados da tabela
   const selectedOrphanages =await db.all("SELECT * FROM orphanages")
   console.log(selectedOrphanages) 
})