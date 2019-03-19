const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema ({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    employeenum: {
        type: String
    }
});

const Employee = mongoose.model ('employee', EmployeeSchema);
module.exports = Employee