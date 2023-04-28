import type { Executor } from '../';
import type { OperatorDto } from '../model/dto';
import type { OperatorInput, Page, ResponseBody, Void } from '../model/static';

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
        ResponseBody<Page<OperatorDto['OperatorController/DEFAULT_FETCHER']> | undefined>
    > {
        let _uri = '/operator/';
        let _separator = _uri.indexOf('?') === -1 ? '?' : '&';
        let _value: any = undefined;
        _value = options.operatorInput?.gender;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'gender='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        _value = options.operatorInput?.id;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'id='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        _value = options.operatorInput?.name;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'name='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        _value = options.operatorInput?.password;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'password='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        _value = options.operatorInput?.phone;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'phone='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        _value = options.operatorInput?.roleId;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'roleId='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        _value = options.operatorInput?.username;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'username='
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
        return (await this.executor({uri: _uri, method: 'GET'})) as ResponseBody<Page<OperatorDto['OperatorController/DEFAULT_FETCHER']> | undefined>
    }
    
    async put(options: OperatorControllerOptions['put']): Promise<
        ResponseBody<Void | undefined>
    > {
        let _uri = '/operator/';
        return (await this.executor({uri: _uri, method: 'PUT', body: options.body})) as ResponseBody<Void | undefined>
    }
}

export type OperatorControllerOptions = {
    'delete': {readonly id: number},
    'get': {
        readonly page?: number,
        readonly size?: number,
        readonly operatorInput?: OperatorInput
    },
    'put': {readonly body: OperatorInput}
}