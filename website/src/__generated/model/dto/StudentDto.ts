export type StudentDto = {
    'DEFAULT': {
        readonly id: number, 
        readonly number: string, 
        readonly name: string, 
        readonly gender: number, 
        readonly dormitory: {readonly id: number}, 
        readonly state: string, 
        readonly createDate: string
    }
}