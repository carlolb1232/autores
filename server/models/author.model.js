const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema(
  {
    author:{
      type: String,
      required:[
        true,
        "El autor es requerido",
      ],
      minlength:[
        4,
        "El author debe de tener al menos 4 letras"
      ]
    }
  },
  {
    timestamps: true,
  }
);

module.exports.Author = mongoose.model("Author", AuthorSchema);