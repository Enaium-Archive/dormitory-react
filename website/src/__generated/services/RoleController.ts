import type { Executor } from '../';
import type { RoleDto } from '../model/dto';
import type { ResponseBody } from '../model/static';

export class RoleController {
    
    constructor(private executor: Executor) {}
    
    async get(): Promise<
        ResponseBody<ReadonlyArray<RoleDto['DEFAULT']> | undefined>
    > {
        let _uri = '/role/';
        return (await this.executor({uri: _uri, method: 'GET'})) as ResponseBody<ReadonlyArray<RoleDto['DEFAULT']> | undefined>
    }
}

export type RoleControllerOptions = {
    'get': {}
}