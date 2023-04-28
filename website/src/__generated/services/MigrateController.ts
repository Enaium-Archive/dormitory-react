import type { Executor } from '../';
import type { MigrateDto } from '../model/dto';
import type { MigrateInput, Page, ResponseBody, Void } from '../model/static';

export class MigrateController {
    
    constructor(private executor: Executor) {}
    
    async delete(options: MigrateControllerOptions['delete']): Promise<
        ResponseBody<Void | undefined>
    > {
        let _uri = '/migrate/';
        _uri += encodeURIComponent(options.id);
        return (await this.executor({uri: _uri, method: 'DELETE'})) as ResponseBody<Void | undefined>
    }
    
    async get(options: MigrateControllerOptions['get']): Promise<
        ResponseBody<Page<MigrateDto['MigrateController/DEFAULT_FETCHER']> | undefined>
    > {
        let _uri = '/migrate/';
        let _separator = _uri.indexOf('?') === -1 ? '?' : '&';
        let _value: any = undefined;
        _value = options.migrateInput?.createDate;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'createDate='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        _value = options.migrateInput?.dormitoryId;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'dormitoryId='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        _value = options.migrateInput?.id;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'id='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        _value = options.migrateInput?.reason;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'reason='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        _value = options.migrateInput?.studentId;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'studentId='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
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
        return (await this.executor({uri: _uri, method: 'GET'})) as ResponseBody<Page<MigrateDto['MigrateController/DEFAULT_FETCHER']> | undefined>
    }
    
    async put(options: MigrateControllerOptions['put']): Promise<
        ResponseBody<Void | undefined>
    > {
        let _uri = '/migrate/';
        return (await this.executor({uri: _uri, method: 'PUT', body: options.body})) as ResponseBody<Void | undefined>
    }
}

export type MigrateControllerOptions = {
    'delete': {readonly id: number},
    'get': {
        readonly page?: number,
        readonly size?: number,
        readonly migrateInput?: MigrateInput
    },
    'put': {readonly body: MigrateInput}
}