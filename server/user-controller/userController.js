
import User from "../model/userModel.js";


 export const AddUser = async(request, response) =>{
    try {
        let exist = await User.findOne({ sub: request.body.sub});
        if(exist){
            response.status(200).json( {msg: 'User already exist'} );
            return;
        }
        const newUser =  new User(request.body);
        await newUser.save();
        return response.status(200).json(newUser);

    } catch (error) {
        return response.status(500).json(error.message);
    }
}


export const getUsers = async (request, response) =>{

    try {
         
        let users = await User.find({});
        // console.log(users);
    return response.status(200).json(users);

    } catch (error) {
        // console.log(error.message);
        return response.status(500).json(error.message);
    }


}