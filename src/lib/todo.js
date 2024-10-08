const { default: mongoose } = require("mongoose");

const Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    }
}, {
    timeStamp: true,
});

export const TodoModel = mongoose.models.todo || mongoose.model('todos', Schema);