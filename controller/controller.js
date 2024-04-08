const videoSchema = require('../model/api.schema')

const getVideoData = async (req , res) => {
    const data = await videoSchema.find(req.query)
    return res.status(200).json(data)
}

const getVideoDataById = async(req , res) => {
    const {id} = req.params
    const data = await videoSchema.findById(id)
    return res.status(200).json(data)
}



const patchVideoViewInc = async( req , res) => {
    const {id} = req.params;
    const data = await videoSchema.findById(id)
    data.viewCount++
    await data.save()
    return res.status(200).json(data)
}

const patchVideoVotesUpDate = async( req  , res) => {
    const {id} = req.params;
    const {voteType , voteChange} = req.body
    const data = await videoSchema.findById(id)

    let changeVoteType = ""

    if(voteType === "upVotes"){
        changeVoteType = "upVotes"
    }else{
        changeVoteType = "downVotes"
    }

    let prevVotes= data.votes[changeVoteType]

    let newVotes = prevVotes

    if(voteChange  === "increase"){
        newVotes +=1
    }else if(voteChange === "decrease"){
        newVotes -=1
    }

    newVotes = Math.max(newVotes , 0)

    data.votes[changeVoteType] = newVotes

    await data.save()
    return res.status(200).json(data)
}


const postVideoData = async (req , res) => {
    const {body} = req
    console.log(body);
    try {
        const result = await videoSchema.create(body)
        if(!result){
            return res.status(404).json({
                msg : 'something in wrong !'
            })
        }
        return res.status(200).json(result)
    } catch (error) {
        return res.status(404).json(error)
    }
}


module.exports = {
    getVideoData,
    getVideoDataById,
    patchVideoViewInc,
    patchVideoVotesUpDate,
    postVideoData,
}