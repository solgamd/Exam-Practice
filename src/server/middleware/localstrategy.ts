import * as passport from 'passport';
import * as LocalStrategy from 'passport-local';

import { comparePassword } from '../utils/security/password';
// import DB from '../db';

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(new LocalStrategy.Strategy({
    usernameField: 'email',
    session: false
}, async (email, password, done) => {
    // try {
    //     let [user]: any = await DB.Users.findOneByEmail(email); // Does user exist?
    //     if(user && comparePassword(password, user.password)) {  // if user exists + compares password entered matches user's password stored (user.password)
    //         done(null, user);                                   // if user is valid, passes up user
    //     } else {
    //         done(null, false);                                  //if user invalid, access = false
    //     }
    // } catch (error) {
    //     done(error);
    // }    
}));