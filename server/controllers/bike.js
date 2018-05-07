const Bike = require('mongoose').model('Bike');
const User = require('mongoose').model('User');

module.exports={
    index(request, response) {
        Bike.find({})
        .then(bikes => response.json(bikes))
        .catch(error => console.log(error));
    },

    update(request, response) {
        Bike.findByIdAndUpdate(request.params.playerID, request.body, { new: true })
        //Player.findByIdAndUpdate(request.params.playerID, request.body, { new: true })
          .then(book => response.json(book))
          .catch(console.log);
      },

    // create(request, response) {
        
    //     Bike.create(request.body)
    //     .then(player => response.json(player))
    //     .catch(error => console.log(error));
    // },

    create(req, res) {
        console.log("in the bike create controller")
        console.log('session ', req.session.user)
        console.log('with id ', req.session.user._id)

        User.findOne({ _id: req.session.user._id }, function (err, user) {
            if (user) {
                console.log("in the bike create controller found user")
                var bike = new Bike(req.body);
                bike._user = user._id;
                user.bike.push(bike);
                bike.save(function (err) {
                    user.save(function (err) {
                        if (err) { console.log(err) }
                        else {
                            res.json({ message: "Success!" })
                        }
                    })
                })
            }
            else {
                res.json(err)
            }
        })
    },

    destroy(request, response) {
        Bike.findByIdAndRemove(request.params.bikeID)
          .then(bike => response.json(bike))
          .catch(console.log);
      },

    show(request, response) {
        Bike.findById(request.params.playerID)
        .then(    
            player => response.json(player))
        .catch(error =>
        response
            .status(500)
            .json(errorMessage(error)));
        }

    // create(request, response) {
    //     Player.create(request.body)
    //       .then(player => response.json(player))
    //       .catch(error => {
    //           console.log('error in create controller');
    //         const errors = Object.keys(error.errors).map(
    //           key => error.errors[key].message
    //         );
    
    //         response.json(errors);
    //       });
    //   },


    
}