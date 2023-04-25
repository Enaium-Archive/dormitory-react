export type AbsentDto = {
    'DEFAULT': {
        readonly id: number, 
        readonly building: {readonly id: number}, 
        readonly dormitory: {readonly id: number}, 
        readonly student: {readonly id: number}, 
        readonly account: {readonly id: number}, 
        readonly createDate: string, 
        readonly reason: string
    }
}