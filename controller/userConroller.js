import User from '../models/userModel.js'

function createUser(req,res) {
    const { username, email, password } = req.body;

    if (!username || !email || !password) { 
        res.send('Please fill all fields')
    }
   // const exists = User.findOne({username})

    //if (exists) { 
    //    res.status(409).send('User exists')
    //    throw new Error ('Username Exists')

    //}

    const newUser = User.create({
        username, email, password
    })

    if (!newUser) {
        res.status(500).send('Error while creating user.')
    }
    return res.status(200).send('User successfully created.')
}

export { createUser };

