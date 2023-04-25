export type DormitoryDto = {
    'DEFAULT': {
        readonly id: number, 
        readonly building: {readonly id: number}, 
        readonly name: string, 
        readonly type: number, 
        readonly available: number, 
        readonly telephone: string
    }
}