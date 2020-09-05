const mongoose = require('mongoose')
const Order = mongoose.model('order')
const User = mongoose.model('user')


exports.takeOrderFromUser = async(req,res) => {

  try{
    const saveDetail = new Order(req.body)
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

exports.getNewData = async(req,res) => {

  const userData = await User.find({})
	const result = []
	 
	for(i=0 ; i<userData.length; i++){
		const orderData = await Order.find({userId: userData[i].userId}).populate('user')
		
		total = 0
		orderData.forEach(order => {
			total += order.subTotal			 
		})
		const average = total/orderData.length

		const userOrder = {
			'userId': userData[i].userId,
			'name': userData[i].name,
			'noOfOrders': orderData.length,
			'averageBillValue': average
		}

		result.push(userOrder)

	}

	res.json({'staus': 200, 'result': result})

}

exports.updataData = async(req,res) => {

	const userData = await User.find({})
	const result = []
	
	for(i=0 ; i<userData.length; i++){
		const orderData = await Order.find({userId: userData[i].userId}).populate('user')	
	
		const userOrder = {
			'userId': userData[i].userId,
			'noOfOrders': orderData.length,
		}
		result.push(userOrder)

		await User.findOneAndUpdate({userId: result[i].userId},
			{$set : {"noOfOrders": result[i].noOfOrders}},
			{
				upsert:false,
				multi:true,
				strict:false
			},
			function (err , user) {
				if (err) throw (err)
				else { temp(result[i].userId)}
			}
		)
	}

	const updatedUserData = await User.find({})
	//res.json({'status': 200, result: updatedUserData})
	console.log(updatedUserData)

}

const temp = async(userId) => {
	const updatedUserData = await User.findOne({userId: userId})
	console.log(updatedUserData)
}