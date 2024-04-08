const { default: mongoose, model } = require("mongoose");

const videoSchema = new mongoose.Schema({
    videoLink : {
        type : String,
    },
    title : {
        type : String,
    },
    genre : {
        type : String,
    },
    contentRating : {
        type : String,
    },
    releaseDate : {
        type: Date,
        default: Date.now
    },
    previewImage : {
        type : String,
    },
    votes : {
        upVotes :{
            type : Number,
            default : 0
        },
        downVotes : {
            type : Number,
            default : 0
        },
    },
    viewCount : {
        type : Number,
        default : 0
    }
})

module.exports = mongoose.model('video-Data' , videoSchema)