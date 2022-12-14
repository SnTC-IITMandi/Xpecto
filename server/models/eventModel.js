const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
    club: {
        type: String,
        required: true,
    },
    info: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },

    shortsummary: {
        type: String,
        required: true,
    },

    longsummary: {
        type: String,
        required:true
    },

    event_image: {
        type: String,
        required: true,
    },
    rulebook_link: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    problemset_link: {
        type: String,
        required: true,
    },

    createdAt: {
        type: String,
     required:true 
       },

    start_time: {
        day: {
            type: String,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
    },

    end_time: {
        day: {
            type: String,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
    },

    prices: {
        first: {
            type: String,
            required: true,
        },
        second: {
            type: String,
            required: true,
        },
        third: {
            type: String,
            required: true,
        },
    },

    coordinators:[ {
            name: {
                type: String,
                required: true,
            },
            contact: {
                type: String,
                required: true,
            },
        
    }
    ],

    // registeredUsers: [
    //     {
    //         user_id: {
    //             type: String,
    // unique:true
    //         },
    //     },
    // ],
    teamMaxSize: {
        type: String,
        required: true,
    },
    teamMinSize: {
        type: String,
        required: true,
    },
});
;

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
