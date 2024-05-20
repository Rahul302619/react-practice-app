export const defaultEmployeeDetail = {
    name: '',
    dob: '',
    address: ''
}

export const employeeReducer = (state, action) => {
    switch(action.type) {
        case 'UPDATE':
            return action.employeeDetail
        default:
            return state
    }
}