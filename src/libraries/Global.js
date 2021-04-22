global.baseUrl = process.env.REACT_APP_BASE_URL;
global.apiUrls = {
    init: "users/init",
    password: "users/auth/password",
    login: "users/auth",

    // Admin 
    employee: "employee/",
    get_employee: "employee",
    employeeType:'employeeType/',
    employeeType_list:'employeeType/search',
    departments:"department/",
    departments_list:'department/search',
    holiday:'holiday/',
    holiday_list:'holiday/search',

    // Hr
    career:'career/',
    career_list:'career/search',
    leave:'leave/',
    leave_list:'leave/search',  

    file: "utils/doc",
    kyc: "users/userdocuments",

    
};
