export type MigrateDto = {
    'MigrateController/DEFAULT_FETCHER': {
        readonly id: number, 
        readonly studentId: number, 
        readonly dormitoryId: number, 
        readonly reason: string, 
        readonly createDate: string, 
        readonly student: {
            readonly id: number, 
            readonly number: string, 
            readonly name: string, 
            readonly gender: boolean, 
            readonly state: string, 
            readonly createDate: string
        }, 
        readonly dormitory: {
            readonly id: number, 
            readonly name: string, 
            readonly type: number, 
            readonly telephone: string
        }
    }
}