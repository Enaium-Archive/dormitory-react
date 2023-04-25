import type { Executor } from '../';
import type { OperatorDto } from '../model/dto';
import type { Page, ResponseBody, Void } from '../model/static';

export class OperatorController {
    
    constructor(private executor: Executor) {}
    
    async delete(options: OperatorControllerOptions['delete']): Promise<
        ResponseBody<Void | undefined>
    > {
        let _uri = '/operator/';
        _uri += encodeURIComponent(options.id);
        return (await this.executor({uri: _uri, method: 'DELETE'})) as ResponseBody<Void | undefined>
    }
    
    async get(options: OperatorControllerOptions['get']): Promise<
        ResponseBody<OperatorDto['DEFAULT'] | undefined>
    > {
        let _uri = '/operator/';
        _uri += encodeURIComponent(options.id);
        return (await this.executor({uri: _uri, method: 'GET'})) as ResponseBody<OperatorDto['DEFAULT'] | undefined>
    }
    
    async get_2(options: OperatorControllerOptions['get_2']): Promise<
        ResponseBody<Page<OperatorDto['DEFAULT']> | undefined>
    > {
        let _uri = '/operator/';
        let _separator = _uri.indexOf('?') === -1 ? '?' : '&';
        let _value: any = undefined;
        _value = options.page;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'page='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        _value = options.size;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'size='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        return (await this.executor({uri: _uri, method: 'GET'})) as ResponseBody<Page<OperatorDto['DEFAULT']> | undefined>
    }
}

export type OperatorControllerOptions = {
    'delete': {readonly id: number},
    'get': {readonly id: number},
    'get_2': {readonly page: number, readonly size: number}
}