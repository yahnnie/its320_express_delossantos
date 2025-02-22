import mongoose from 'mongoose';

const quoteSchema = mongoose.Schema({
    quote: {
        type: String,
        require: ['PLease provide a famous quote'],
    },
    author: {
        type: String,
        require: ['PLease enter the author of the quote'],
    },
    published: {
        type: String,
        require: ['PLease enter the published date']
    },
    title: {
        type: String,
        require: ['PLease provide the title of the quote'],
    }
})

//export default userSchema;
export default mongoose.model('Quote', quoteSchema)