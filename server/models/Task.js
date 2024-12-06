const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: String,
    description: String,
    deadline: Date,
    completed: Boolean,
});

module.exports = mongoose.model('Task', TaskSchema);
