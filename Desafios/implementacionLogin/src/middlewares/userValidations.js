const validationLogin = (req, res, next) => {
    if (req.session.info.loggedIn && req.session.info) next()
    else res.status(401).json({ msg: 'Not authorized' })
}

const isAdmin = (req, res, next) => {
    if (req.session.info.admin) next()
    else res.json({ msg: 'Not authorized' })
}