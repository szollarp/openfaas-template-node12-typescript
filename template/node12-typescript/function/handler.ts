import { FaasHandlerContext, FaaSHandlerEvent } from './types';

export default async (event: FaaSHandlerEvent, context: FaasHandlerContext) => {
	const result = {
		status: 'Received input: ' + JSON.stringify(event.body),
	};

	return context.status(200).succeed(result);
};
