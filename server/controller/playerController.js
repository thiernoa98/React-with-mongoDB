// const Player = require('../model/players');
const Pokemon = require('../model/players');

async function getAllPokemon(req, res) {
    try {
        // result awaits the promise
        let result = await Pokemon.find({})

        res.json({
            message: "success",
            payload: result
        });
    } catch (err) {
        console.log(`getAllPokemon error: ${err}`)

        res.json({
            message: "failure",
            payload: err
        });
    }
}

module.exports = {getAllPokemon}

// async function createPlayer(req,res) {
//     try {
//         let newPlayer = {
//             playernum: req.body.playernum,
//             name: req.body.name,
//             position: req.body.position
//         }

//         await Player.create(newPlayer);

//         res.json({
//             message: 'success',
//             payload: newPlayer
//         })
//     } catch (error) {
//         //creating an eror to show on the console and postman client server
//         let errorObj = {
//             message: 'failed to create player',
//             payload: error
//         }

//         //for postman
//         res.json(errorObj);

//         //console
//         console.log(errorObj);
//     }
// }

//exeport to router
