import { IConnection, IRoomHandlerListener } from '../../../api';
import { BaseHandler } from './BaseHandler';
export declare class GenericErrorHandler extends BaseHandler {
    constructor(connection: IConnection, listener: IRoomHandlerListener);
    private onRoomGenericError;
}
