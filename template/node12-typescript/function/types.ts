import { IncomingHttpHeaders } from 'http';
import { ParsedQs } from 'qs';

export interface IKeyValue {
	[key: string]: any;
}

export interface IFunctionContext {
	httpHeaders: IKeyValue;
	httpStatus: number;
	fail(value: any): void;
	headers(): IKeyValue;
	headers(IKeyValue): IFunctionContext;
	status(): number;
	status(number): IFunctionContext;
	succeed(value: any): void;
}

export interface IFunctionEvent<ReqBody = any, ReqQuery = ParsedQs> {
	body: ReqBody;
	headers: IncomingHttpHeaders;
	method: string;
	query: ReqQuery;
	path: string;
	getSecret(string): Promise<string>;
}
