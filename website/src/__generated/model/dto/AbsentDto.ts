export type AbsentDto = {
    'AbsentController/DEFAULT_FETCHER': {
        readonly id: number, 
        readonly createDate: string, 
        readonly reason: string, 
        readonly building: {
            readonly id: number, 
            readonly name: string
        }, 
        readonly dormitory: {
            readonly id: number, 
            readonly name: string, 
            readonly type: number, 
            readonly telephone: string
        }, 
        readonly student: {
            readonly id: number, 
            readonly number: string, 
            readonly name: string, 
            readonly gender: boolean, 
            readonly state: string, 
            readonly createDate: string
        }, 
        readonly operator: {
            readonly id: number, 
            readonly username: string, 
            readonly password: string, 
            readonly name: string, 
            readonly gender: number, 
            readonly phone: number, 
            readonly role: number
        }
    }
}