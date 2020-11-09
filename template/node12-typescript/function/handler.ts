import { IFunctionEvent, IFunctionContext } from './types';

export default async (event: IFunctionEvent, context: IFunctionContext) => {
	const result = {
		status: 'Received input: ' + JSON.stringify(event.body),
	};

	return context.status(200).succeed(result);
};
