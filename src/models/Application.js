import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    company: {type: String, required: true},
    position: {type: String, required: true},
    status: {
        type: String,
        enum: ['Applied', 'Interviewing', 'Offer', 'Rejected'],
        default: 'Applied'
    },
    link: String,
    notes: String,

}, {timestamps: true});

export const Application = mongoose.model('Application', applicationSchema);