require('./models')
// require the user model
const {User }= require('./models/User.js')
const Hotel = require('./models/Hotel')

const userTest = async () => {
  try {
    // CREATE a user
    // const newUser = new User({
    //   name: 'bing',
    //   email: 'bing@bang.com',
    //   password: 'bingbang'
    // })
  
    // await newUser.save()
    // console.log('newUser', newUser)

    // READ a user
    const foundUser =  await User.findById(
       "605cba523b343a2a1b70fbec"
    ).populate("hostHotels")

    console.log('foundUser', foundUser)

    // // UPDATE a user
    // foundUser.name = 'bangBang'

    // await foundUser.save()

    // const findUserAgain = await User.findOne({
    //   name: 'bangBang'
    // })

    // console.log('findUserAgain', findUserAgain)

    // // DESTROY a user
    // const deleteUser = await User.deleteOne({
    //   name: 'bangBang'
    // })

    // console.log('deleteUser', deleteUser)

    // we done
    process.exit()
  } catch (error) {
    console.log(error)
    process.exit()
  }
}

userTest()