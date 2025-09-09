const {Schema, model} = require("mongoose");

const TokenSchema = new Schema({
    user: {type: Schema.Types.ObjectId, default: null},
    refreshToken: {type: String, required: true},
    
})
module.exports = model("Token", TokenSchema);