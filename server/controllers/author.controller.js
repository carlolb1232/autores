const { Author } = require("../models/author.model")


module.exports.getAllAuthors = (req, res) => {
  Author.find().collation({locale:'en',strength: 2}).sort({author:1})
    .then(authors=>res.json(authors))
    .catch(err=>res.json(err));
};

module.exports.getOneAuthor = (req, res) => {
  const { id } = req.params
  Author.findOne({_id:id})
    .then(author => res.json(author))
    .catch(err => res.json(err));
}

module.exports.createAuthor = (req, res) => {
  const { author } = req.body;
  Author.create({
    author
  })
    .then(author=>res.json(author))
    .catch(err => res.status(400).json(err))
}

module.exports.updateAuthor = (req, res) => {
  const { id } = req.params;
  Author.findByIdAndUpdate({_id:id}, req.body, {runValidators:true,new:true}
    )
    .then(updateAuthor => res.json(updateAuthor))
    .catch(err => res.status(400).json(err))
}

module.exports.deleteAuthor = (req, res) => {
  const { id } = req.params;
  Author.findByIdAndDelete({_id:id})
    .then(deleteConfirmation => res.json(deleteConfirmation))
    .catch(err => res.json(err));
}