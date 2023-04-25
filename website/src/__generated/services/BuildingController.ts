import type { Executor } from '../';
import type { BuildingDto } from '../model/dto';
import type { BuildingInput, Page, ResponseBody, Void } from '../model/static';

export class BuildingController {
    
    constructor(private executor: Executor) {}
    
    async delete(options: BuildingControllerOptions['delete']): Promise<
        ResponseBody<Void | undefined>
    > {
        let _uri = '/building/';
        _uri += encodeURIComponent(options.id);
        return (await this.executor({uri: _uri, method: 'DELETE'})) as ResponseBody<Void | undefined>
    }
    
    async get(options: BuildingControllerOptions['get']): Promise<
        ResponseBody<Page<BuildingDto['DEFAULT']> | undefined>
    > {
        let _uri = '/building/';
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
        return (await this.executor({uri: _uri, method: 'GET'})) as ResponseBody<Page<BuildingDto['DEFAULT']> | undefined>
    }
    
    async put(options: BuildingControllerOptions['put']): Promise<
        ResponseBody<Void | undefined>
    > {
        let _uri = '/building/';
        return (await this.executor({uri: _uri, method: 'PUT', body: options.body})) as ResponseBody<Void | undefined>
    }
}

export type BuildingControllerOptions = {
    'delete': {readonly id: number},
    'get': {readonly page: number, readonly size: number},
    'put': {readonly body: BuildingInput}
}