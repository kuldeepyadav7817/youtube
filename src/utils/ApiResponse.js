class ApiResponse{
    constructor(
        data,
        statusCode = 200,
        message = "Success",
        success = true
        
    ){
        this.data=data,
        this.statusCode=statusCode,
        this.message=message,
        this.success=success

    }
}

export default ApiResponse