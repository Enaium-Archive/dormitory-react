import type { Executor } from '../';
import type { OperatorInput, PutStateBody, ResponseBody, Void } from '../model/static';

export class StateController {
    
    constructor(private executor: Executor) {}
    
    async delete(): Promise<
        ResponseBody<Void | undefined>
    > {
        let _uri = '/state/';
        return (await this.executor({uri: _uri, method: 'DELETE'})) as ResponseBody<Void | undefined>
    }
    
    async put(options: StateControllerOptions['put']): Promise<
        ResponseBody<PutStateBody | undefined>
    > {
        let _uri = '/state/';
        return (await this.executor({uri: _uri, method: 'PUT', body: options.body})) as ResponseBody<PutStateBody | undefined>
    }
}

export type StateControllerOptions = {
    'delete': {},
    'put': {readonly body: OperatorInput}
}