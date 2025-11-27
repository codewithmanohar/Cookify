import mongoose from "mongoose";


const UserSchema = mongoose.Schema({
    name: String, 
    email: { type: String, unique:true}, 
    image : {type : String},
    role: { type: String, default: "user"}
});

export default mongoose.models.User || mongoose.model("User", UserSchema);