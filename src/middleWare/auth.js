const jwt=require("jsonwebtoken")


const authenticator = function (req, res, next) {
    try {
        let token = req.headers["x-api-key"];
        if (!token) {
            return res.status(400).send({
                status: false,
                message: "token is not present",
            });
        }
        let decodedToken = jwt.verify(token, "project-3");
        if (decodedToken) {
            req.authorId = decodedToken.authorId;
            next();
        } else {
            return res
                .status(401)
                .send({ status: false, message: "Token is not valid" });
        }
    } catch (err) {
        return res.status(500).send({ status: false, mess: err.message });
    }
};

module.exports.authenticator = authenticator;