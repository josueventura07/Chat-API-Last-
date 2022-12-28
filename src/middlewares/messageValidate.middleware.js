const { ownerValidate } = require('../messages/messages.controllers')

const messageValidate = ( req, res, next ) => {
    
    const id = req.params.message_id
    const userId = req.user.id
     
    ownerValidate(id, userId)
        .then(data => {
            if(data) {
                next()
            } else {
                res.status(400).json({message: `Invalid ID or Unauthorized`})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

module.exports = messageValidate