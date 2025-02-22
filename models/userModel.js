import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: [true, 'PLease provide a famous quotes'],
    },
    email: {
        type: String,
        require: [true, 'PLease enter your email'],
    },
    password: {
        type: String,
        require: [true, 'PLease enter your password']
    }
})

//export default userSchema;
export default mongoose.model('User', userSchema)