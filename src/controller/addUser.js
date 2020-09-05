const mongoose = require('mongoose')
const User = mongoose.model('user')


exports.addUser = async(req,res) => {

    // req.body.orderId
    // req.body.userId
    // req.body.subTotal
    // req.body.date


    if(req.body.name === ''){
        res.json('no empty places')
    }

    try{
        const saveDetail = new User(req.body)
        await saveDetail.save()
        res.json({msg:'Data Saved Succcessfully'})
    
        }
        catch(err){
            if(err){
                console.log('admin err')
                res.json({msg:'Some Server Error'})
            }
        }


}