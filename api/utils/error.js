//to handle error which is not error like small length of 
// small length of password or something like that 
//to create manual error

export const errorHandler=(statusCode,message)=>{
    const error=new Error();
    error.statusCode=statusCode;
    error.message=message;

    return error;
}

