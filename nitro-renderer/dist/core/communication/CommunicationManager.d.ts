import { ICommunicationManager, IConnection, IConnectionStateListener, IUpdateReceiver } from '../../api';
import { Disposable } from '../common';
export declare class CommunicationManager extends Disposable implements ICommunicationManager, IUpdateReceiver {
    private _connections;
    constructor();
    protected onDispose(): void;
    createConnection(stateListener?: IConnectionStateListener): IConnection;
    update(time: number): void;
}
