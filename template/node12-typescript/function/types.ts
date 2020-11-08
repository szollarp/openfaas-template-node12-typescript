import { IncomingHttpHeaders } from 'http';
import { Send } from 'express';

type ReqQuery = {
	[key: string]: undefined | string | string[] | ReqQuery | ReqQuery[];
};

export type FaaSHandlerEvent = {
	body: any;
	headers: IncomingHttpHeaders;
	method: string;
	query: ReqQuery;
	path: string;
};

export type FaasHandlerContext = {
	cb: (err: Error, functionResult: any) => Send;
	status: (value?: number) => FaasHandlerContext;
	headers: (value?: IncomingHttpHeaders) => FaasHandlerContext;
	succeed: (value?: any) => Send;
	fail: (value?: any) => Send;
};
