exports.get = (req, res) => {
    res.render('posts.ejs', {
        user: req.session
    });
};

exports.novo = (req, res) => {
    req.session.nome = req.body.nome;
    req.session.email = req.body.email;

    res.status('200').redirect('/posts');
};