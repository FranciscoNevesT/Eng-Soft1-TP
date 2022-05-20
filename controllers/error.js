

exports.getPage404 = (req, res, next) => {
    res.status(404).render('../views/404.html', { pageTitle: 'Page Not Found' });
}