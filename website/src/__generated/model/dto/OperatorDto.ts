export type OperatorDto = {
    'OperatorController/DEFAULT_FETCHER': {
        readonly id: number, 
        readonly username: string, 
        readonly name: string, 
        readonly gender: boolean, 
        readonly phone: number, 
        readonly roleId: number, 
        readonly role: {
            readonly id: number, 
            readonly name: string
        }
    }
}