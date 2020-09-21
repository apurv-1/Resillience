const mongoose = require('mongoose');

const counsellingSchema = new mongoose.Schema({
    parentname:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    tuition: {
        type: String,
        required: true
    }
})

mongoose.model("Counselling",counsellingSchema);