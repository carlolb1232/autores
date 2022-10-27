const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost/autoresdb`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(()=>console.log("conexión a la base de datos exitosa"))
  .catch(err=>console.log(`Ocurrio un error: `, err));

  