import {getUsers,getSingleUser,addUser,deleteUser,editUser} from '../models/database.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
let SECRET_KEY='ieyn8y0894895t384gn0iergihetiugoeit04u5erg89gr30gjeroug0ue040gugugm-4ocgoe-orogf0u34ug34u0'


export default {
    getAllUsers : async(req,res)=>{
        res.send(await getUsers())
    },
    getUser :async(req,res)=>{
        res.send(await getSingleUser(+req.params.id))
    },
    getPost : async(req,res)=>{
        const {firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile} = req.body;
        bcrypt.hash(userPass, 10,async(err)=>{
            if (err) throw err
        const post = await addUser(firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile)
        res.send(await getUsers())

        const token = jwt.sign({ emailAdd, SECRET_KEY }, { expiresIn: '1h' });
        res.cookie('token', token, {httpOnly: true});
        res.send({
            msg: "Your account has been created successfully"
        })
    });
},

    rmvPostUser : async(req,res)=>{
        res.send(await deleteUser(+req.params.id))
        alert('user has been removed from the database')
    },

    getPatchUser : async (req,res)=>{
        const [user] = await getSingleUser(+req.params.id)
        let {firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile} = req.body   
        firstName ? firstName = firstName: {firstName} = user
        lastName ? lastName = lastName: {lastName} = user
        userAge ? userAge = userAge: {userAge} = user
        Gender ? Gender = Gender: {Gender} = user
        userRole ? userRole = userRole: {userRole} = user
        emailAdd ? emailAdd = emailAdd: {emailAdd} = user
        userPass ? userPass = userPass: {userPass} = user
        userProfile ? userProfile = userProfile: {userProfile} = user
        await editUser(firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile, +req.params.id)
        res.json(await getUsers())
    },
}
