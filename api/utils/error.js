export const errorHandler =(staturCode, message) =>{
  const error = new Error();
  error.statusCode = staturCode;
  error.message = message;
  return error;
};