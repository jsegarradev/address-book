export interface LoginSuccessResponse {
    error: boolean,
    code: number,
    message: string,
    data: {
        email: string,
        name: string,
        lastName: string,
        tokenId: string,
    },
}