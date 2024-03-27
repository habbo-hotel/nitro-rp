import { IConnection, IRoomHandlerListener } from '../../../api';
import { BaseHandler } from './BaseHandler';
export declare class PetPackageHandler extends BaseHandler {
    constructor(connection: IConnection, listener: IRoomHandlerListener);
    private onOpenPetPackageRequested;
    private onOpenPetPackageResult;
}
