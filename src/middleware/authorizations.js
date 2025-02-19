import jwt from 'jsonwebtoken';

export const authorizationMiddleware = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) return res.json({message: "unauthoriza"})
    const token = req.headers.authorization.split(' ')[1]

    try {
        jwt.verify(token, 'nuuts tulhuur');
        next();
    } catch (err) {
        return res.json({ message: "unauthorized!!!"})
    }
}