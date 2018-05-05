const Player = require('mongoose').model('Player');

module.exports={
    index(request, response) {
        Player.find({})
        .then(players => response.json(players))
        .catch(error => console.log(error));
    },

    update(request, response) {
        Player.findByIdAndUpdate(request.params.playerID, request.body, { new: true })
        //Player.findByIdAndUpdate(request.params.playerID, request.body, { new: true })
          .then(book => response.json(book))
          .catch(console.log);
      },

    create(request, response) {
        
        Player.create(request.body)
        .then(player => response.json(player))
        .catch(error => console.log(error));
    },

    destroy(request, response) {
        Player.findByIdAndRemove(request.params.playerID)
          .then(player => response.json(player))
          .catch(console.log);
      },

    show(request, response) {
    Player.findById(request.params.playerID)
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