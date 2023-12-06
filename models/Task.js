import { Schema, model } from 'mongoose';


const TaskSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    completed: {
        type: Boolean,
        default: false,
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
},{ timestamps: true });

const Task = model('Task',TaskSchema);

export default Task;