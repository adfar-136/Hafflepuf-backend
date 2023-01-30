var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const UserModel = require("./database")
const passport = require("passport")
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'Random string';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    UserModel.findOne({id: jwt_payload.id}, function(err, user) {
        console.log(jwt_payload);
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));