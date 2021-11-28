const mongoose=require('mongoose');

mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true, useUnifiedTopology:true});

// ///////////
// mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true, useUnifiedTopology:true, autoIndex: true});
// ///////////

const db=mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log('Connected')
});


//Models
require('./Category');
require('./News');
require('./User');