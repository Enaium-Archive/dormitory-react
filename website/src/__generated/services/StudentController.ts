import type { Executor } from '../';
import type { StudentDto } from '../model/dto';
import type { Page, ResponseBody, StudentInput, Void } from '../model/static';

export class StudentController {
    
    constructor(private executor: Executor) {}
    
    async delete(options: StudentControllerOptions['delete']): Promise<
        ResponseBody<Void | undefined>
    > {
        let _uri = '/student/';
        _uri += encodeURIComponent(options.id);
        return (await this.executor({uri: _uri, method: 'DELETE'})) as ResponseBody<Void | undefined>
    }
    
    async get(options: StudentControllerOptions['get']): Promise<
        ResponseBody<Page<StudentDto['DEFAULT']> | undefined>
    > {
        let _uri = '/student/';
        let _separator = _uri.indexOf('?') === -1 ? '?' : '&';
        let _value: any = undefined;
        _value = options.studentInput?.createDate;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'createDate='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        _value = options.studentInput?.dormitoryId;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'dormitoryId='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        _value = options.studentInput?.gender;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'gender='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        _value = options.studentInput?.id;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'id='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        _value = options.studentInput?.name;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'name='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        _value = options.studentInput?.number;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'number='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        _value = options.studentInput?.state;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'state='
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
        return (await this.executor({uri: _uri, method: 'GET'})) as ResponseBody<Page<StudentDto['DEFAULT']> | undefined>
    }
    
    async put(options: StudentControllerOptions['put']): Promise<
        ResponseBody<Void | undefined>
    > {
        let _uri = '/student/';
        return (await this.executor({uri: _uri, method: 'PUT', body: options.body})) as ResponseBody<Void | undefined>
    }
}

export type StudentControllerOptions = {
    'delete': {readonly id: number},
    'get': {
        readonly page?: number,
        readonly size?: number,
        readonly studentInput?: StudentInput
    },
    'put': {readonly body: StudentInput}
}