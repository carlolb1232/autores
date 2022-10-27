const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {
  app.get("/api/authors", AuthorController.getAllAuthors);
  app.get("/api/author/:id", AuthorController.getOneAuthor);
  app.post("/api/author/new/", AuthorController.createAuthor);
  app.put("/api/author/update/:id", AuthorController.updateAuthor);
  app.delete("/api/author/delete/:id", AuthorController.deleteAuthor);
}