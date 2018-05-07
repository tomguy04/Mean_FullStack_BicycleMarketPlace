const User = require('mongoose').model('User');

module.exports = {

    // app.get('/', function(req, res) {
    //     Post.find({}) //find all the Posts
    //     .populate('comments') //gather this posts's comments
    //     .exec((err,post) => { //add this post's comments ids to the comment array.
    //         res.render('index', {posts:post}); //render the page with all the posts and comments
    //     })

   

    findOne(request, response){
        console.log(request.params.userID);
        User.findById(request.params.userID)//.populate('bike')
        .then(user =>{
            if (!user){
                throw Error();
            }
            //console.log('found the listing user ', user )
            //return user
            response.json(user)
            }
        )
        .catch(() =>{
            console.log('findOne fail');
        })
    },
    
    // show(request, response) {
    //     Book.findById(request.params.bookID)
    //       .then(book => response.json(book))
    //       .catch(console.log);
    //   },


    //
    show(req, res) {
        console.log(req.session.user._id, "do you exist here?");
        if (req.session.user._id === undefined) {
            res.json({session: false})
        }
        else {
            User.findOne({_id: req.session.user._id}, function(err, user)
            
        {
            if(user)
            {

                //user.populate('bike')//.exec((err,bike) => {console.log('in show bike ', user)})
                //console.log('users bikes ', user.bike);
                res.json({
                    //bikes:user.populate('bike').exec((err,bike) => {console.log('in show bike ', user)}),
                    session: req.session.user, user:user,

     
                });
            }
        }).populate('bike').exec((err,bike) => {console.log('show bike', bike)})
        //
        }

    },

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