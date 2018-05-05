const User = require('mongoose').model('User');

module.exports = {
    login(request, response) { 
        console.log('login', request.body);

        User.findOne({ email: request.body.username})
        .then(user =>{
            if(!user) { throw Error(); }

            return User.validatePassword(request.body.password, user.password).then(
                ()=>{
                    //login
                    completeLogin(request, response, user);
                }
            );
        })
        .catch(() => {
            response.status(400).json({ message: 'email/password combo not found'});
        });
    },
    register(request, response) {
        console.log('reg', request.body);

        User.create(request.body)
            .then(user => {
                //send conf email 
                //login
                completeLogin(request, response, user);
            })
            .catch(error => console.log)       
    },


    logout(request, response) { 
        console.log('logging out');

        request.session.destroy();

        response.clearCookie('userID');
        response.clearCookie('expiration');

        response.json(true);
    }
};

function completeLogin(request, response, user){
    console.log('in the complete login');
    request.session.user = user.toObject();
    delete request.session.user.password; //password is gone so it can't be monitored or hacked and then copied.

    //create cookie
    response.cookie('userID', user._id.toString()) //turn object into string
    response.cookie('expiration', Date.now() + 864000 * 1000);

    response.json(user);
}