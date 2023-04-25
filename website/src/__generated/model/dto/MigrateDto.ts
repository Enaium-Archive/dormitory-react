export type MigrateDto = {
    'DEFAULT': {
        readonly id: number, 
        readonly student: {readonly id: number}, 
        readonly dormitory: {readonly id: number}, 
        readonly reason: string, 
        readonly createDate: string
    }
}