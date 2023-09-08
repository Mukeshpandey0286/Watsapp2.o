import mongoose from "mongoose";

export const UserSchema = mongoose.Schema({
    iss:{
        type: String
    },
    azp:{
        type: String
    },
    aud:{
        type: String
    },
    sub:{
        type: String,
        required: true
    },
    email:{
        type: String
    },
    email_verified:{
        type: Boolean
    },
    nbf:{
        type: Number,
    },
    name:{
        type: String,
        required: true
    },
    picture:{
        type: String,
        required: true
    },
    given_name:{
        type: String
    },
    locale:{
        type: String
    },
    iat:{
        type: Number
    },
    exp:{
        type: Number
    },
    jti:{
        type: String
    }
});

// model for making a collection or table in DB of user:-

const user = mongoose.model('user', UserSchema);

export default user;