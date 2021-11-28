require('../models/database');
const User = require('../models/User');

exports.homepage = async(req, res) =>
    res.render('index')




async function insertDymmyUserData(){
    try {
        await User.insertMany([
            {
                "name": "Dilum",
                "email": "tharakadiulum5@gmail.com"
            },
            {
                "name": "Tharaka",
                "email": "tharaka@gmail.com"
            },
            {
                "name": "Sachith",
                "email": "Sachith@gmail.com"
            },
        ]);

    } catch (error) {
        console.log('err', + error)
    }
}

// insertDymmyUserData();



exports.getAllUsers = async (req, res) => {
    try {

    const users = await User.find({});

    res.status(200).json({
        status:'success',
        data:{
            users:users,
        }
        
    });



    } catch (error) {
        console.log('err', + error)
    }
}

exports.getUser = async (req, res) => {
    console.log(`get user`);
    try {

    const Id=req.params.id;

    const user=await User.findById(Id);

    res.status(200).json({
        status:'success',
        data:{
            user:user,
        }
        
    });



    } catch (error) {
        console.log('err', + error)
    }
}


exports.newUser = async (req, res) => {
    try {

        // let imageUploadFile;
        // let uploadPath;
        // let newImageName;

        // if(!req.files || Object.keys(req.files).length === 0){
        //     console.log('No Files where uploaded.');
        // } else {

        //     imageUploadFile = req.files.image;
        //     newImageName = Date.now() + imageUploadFile.name;

        //     uploadPath = require('path').resolve('./') + '/public/uploads/' + newImageName;

        //     imageUploadFile.mv(uploadPath, function(err){
        //         if(err) return res.status(500).send(err);
        //     })

        // }

        const newUser=new User({

            username:req.body.username,
            email:req.body.email,
            address:req.body.address,
            gender:req.body.gender,
            password:req.body.password,
        });

        await newUser.save();

        req.flash('infoSubmit', 'User has been added.');
        res.redirect('/');
    } catch (error) {
        res.json(error);
        res.redirect('/');
    }

}



exports.addNewUser = async (req, res) => {
    
        console.log(`addNewUser`);
    try {
        
        const  user=new User({
           
            username:req.body.username,
            email:req.body.email,
            gender:req.body.gender,
            address:req.body.address,
            password:req.body.password,
        });

        await user.save();

        res.status(200).json({
            status:'success',
            data:{
                user:user,
                // user_Id:user.id,
            }
            
        });


        // Genarate LINK
        const link=`/`; // for redirecrtion

        console.log(link);
        res.redirect('/');
    } catch (error) {
        console.log('err', + error)

        res.status(404).json({
            status:'fail',
            error:error
            
        });
    }
}

exports.userNav = async (req, res) => {
    const infoErrorsObj = req.flash('infoErrors');
    const infoSubmitObj = req.flash('infoSubmit');
    res.render('users', { title: 'News Blog - Submit Users',infoErrorsObj,infoSubmitObj });
}

exports.EditUser = async (req, res) => {
    try {

        
        const Id=req.params.id;
        
        console.log(Id);

        let doc = await User.findOneAndUpdate(Id,req.body,{
            new:true,
            runValidators:true,
        });

        res.status(200).json({
            status:'success',
            data:{
                // user:user,
            }
            
        });


    } catch (error) {
        console.log('err', + error)

        res.status(404).json({
            status:'fail',
            error:error
            
        });
    }
}
exports.DeleteUser = async (req, res) => {
    try {

        console.log(`delete`);
        const Id=req.params.id;
        
        const doc= await User.findByIdAndDelete(Id);
        res.status(200).json({
            status:'success',
            data:{
                // user:user,
            }
            
        });


    } catch (error) {
        console.log('err', + error)

        res.status(404).json({
            status:'fail',
            error:error
            
        });
    }
}