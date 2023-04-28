export type DormitoryDto = {
    'DormitoryController/DEFAULT_FETCHER': {
        readonly id: number, 
        readonly name: string, 
        readonly type: number, 
        readonly telephone: string, 
        readonly building: {
            readonly id: number, 
            readonly name: string
        }
    }
}