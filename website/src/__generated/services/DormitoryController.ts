import type { Executor } from '../';
import type { DormitoryDto } from '../model/dto';
import type { DormitoryInput, Page, ResponseBody, Void } from '../model/static';

export class DormitoryController {
    
    constructor(private executor: Executor) {}
    
    async delete(options: DormitoryControllerOptions['delete']): Promise<
        ResponseBody<Void | undefined>
    > {
        let _uri = '/dormitory/';
        _uri += encodeURIComponent(options.id);
        return (await this.executor({uri: _uri, method: 'DELETE'})) as ResponseBody<Void | undefined>
    }
    
    async get(options: DormitoryControllerOptions['get']): Promise<
        ResponseBody<Page<DormitoryDto['DEFAULT']> | undefined>
    > {
        let _uri = '/dormitory/';
        let _separator = _uri.indexOf('?') === -1 ? '?' : '&';
        let _value: any = undefined;
        _value = options.dormitoryInput.buildingId;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'buildingId='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        _value = options.dormitoryInput.id;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'id='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        _value = options.dormitoryInput.name;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'name='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        _value = options.dormitoryInput.telephone;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'telephone='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        _value = options.dormitoryInput.type;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'type='
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
        return (await this.executor({uri: _uri, method: 'GET'})) as ResponseBody<Page<DormitoryDto['DEFAULT']> | undefined>
    }
    
    async put(options: DormitoryControllerOptions['put']): Promise<
        ResponseBody<Void | undefined>
    > {
        let _uri = '/dormitory/';
        return (await this.executor({uri: _uri, method: 'PUT', body: options.body})) as ResponseBody<Void | undefined>
    }
}

export type DormitoryControllerOptions = {
    'delete': {readonly id: number},
    'get': {
        readonly page: number, 
        readonly size: number, 
        readonly dormitoryInput: DormitoryInput
    },
    'put': {readonly body: DormitoryInput}
}