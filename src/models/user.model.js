import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt"

const UserSchema = new Schema({
   
    FullName:{
        type: String,
        required: true,
        trim: true,
        index: true
    },
    UserName:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    password:{
        type: String,
        required: [true, "Password is required"],
        length: [8, "Password must be at least 8 characters long"]
        
    },
    Avatar:{
        type: String,
        required: true,
        default: "https://res.cloudinary.com/dqgjyjz5s/image/upload/v1646379571/avatars/default_avatar_u5z7qo.png"
    },
    coverImage:{
     type: String,
     required: true,
     default: "https://res.cloudinary.com/dqgjyjz5s/image/upload/v1646379571/avatars/default_coverImage_u5z7qo.png" 
    },
    refreshToken:{
        type: String
    },
    CreatedAt:{
        type: Date,
        default: Date.now()
    },
    UpdatedAt:{
        type: Date,
        default: Date.now()
    },
    watchHistory:{
        type: Array,
        default: []
    }
});


UserSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)

    next()
});


UserSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
};

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}





export default mongoose.model("User", UserSchema);