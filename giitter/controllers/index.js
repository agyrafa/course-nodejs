exports.index = (req, res) => {

    (req.session.email && req.session.nome) ? res.redirect('/posts') : res.redirect('/login');

};