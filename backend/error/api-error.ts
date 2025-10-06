class ApiError extends Error {
    status;
    errors;
    constructor(status: any, message: any, errors?: any){
        super(message)
    this.status = status
    this.errors = errors
    }
    

    static Unauthorized() {
        return new ApiError(401, "Пользователь не авторизован")
    }
    
    static BadRequest(message: string, errors = []) {
        return new ApiError(400, message,errors)
    }
}

export default ApiError