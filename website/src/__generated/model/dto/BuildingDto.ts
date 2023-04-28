export type BuildingDto = {
    'BuildingController/DEFAULT_FETCHER': {
        readonly id: number, 
        readonly name: string, 
        readonly operator: {
            readonly id: number, 
            readonly username: string, 
            readonly password: string, 
            readonly name: string, 
            readonly gender: boolean, 
            readonly phone: number, 
            readonly roleId: number
        }
    }
}