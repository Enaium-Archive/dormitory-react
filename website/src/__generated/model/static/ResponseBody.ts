export interface ResponseBody<T> {
    
    readonly code: number;
    
    readonly message: string;
    
    readonly metadata: T;
}
