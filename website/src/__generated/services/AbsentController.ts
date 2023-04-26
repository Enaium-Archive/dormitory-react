import type { Executor } from '../';
import type { AbsentDto } from '../model/dto';
import type { AbsentInput, Page, ResponseBody, Void } from '../model/static';

export class AbsentController {
    
    constructor(private executor: Executor) {}
    
    async delete(options: AbsentControllerOptions['delete']): Promise<
        ResponseBody<Void | undefined>
    > {
        let _uri = '/absent/';
        _uri += encodeURIComponent(options.id);
        return (await this.executor({uri: _uri, method: 'DELETE'})) as ResponseBody<Void | undefined>
    }
    
    async get(options: AbsentControllerOptions['get']): Promise<
        ResponseBody<Page<AbsentDto['AbsentController/DEFAULT_FETCHER']> | undefined>
    > {
        let _uri = '/absent/';
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
        return (await this.executor({uri: _uri, method: 'GET'})) as ResponseBody<Page<AbsentDto['AbsentController/DEFAULT_FETCHER']> | undefined>
    }
    
    async put(options: AbsentControllerOptions['put']): Promise<
        ResponseBody<Void | undefined>
    > {
        let _uri = '/absent/';
        return (await this.executor({uri: _uri, method: 'PUT', body: options.body})) as ResponseBody<Void | undefined>
    }
}

export type AbsentControllerOptions = {
    'delete': {readonly id: number},
    'get': {readonly page: number, readonly size: number},
    'put': {readonly body: AbsentInput}
}