import type { Executor } from '../';
import type { MenuDto } from '../model/dto';
import type { ResponseBody } from '../model/static';

export class MenuController {
    
    constructor(private executor: Executor) {}
    
    async get(options: MenuControllerOptions['get']): Promise<
        ResponseBody<ReadonlyArray<MenuDto['DEFAULT']> | undefined>
    > {
        let _uri = '/menu/';
        let _separator = _uri.indexOf('?') === -1 ? '?' : '&';
        let _value: any = undefined;
        _value = options.operatorId;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'operatorId='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        return (await this.executor({uri: _uri, method: 'GET'})) as ResponseBody<ReadonlyArray<MenuDto['DEFAULT']> | undefined>
    }
}

export type MenuControllerOptions = {
    'get': {readonly operatorId: number}
}