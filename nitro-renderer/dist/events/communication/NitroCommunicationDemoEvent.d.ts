import { IConnection } from '../../api';
import { NitroEvent } from '../core';
export declare class NitroCommunicationDemoEvent extends NitroEvent {
    static CONNECTION_ESTABLISHED: string;
    static CONNECTION_CLOSED: string;
    static CONNECTION_ERROR: string;
    static CONNECTION_HANDSHAKING: string;
    static CONNECTION_HANDSHAKED: string;
    static CONNECTION_HANDSHAKE_FAILED: string;
    static CONNECTION_AUTHENTICATED: string;
    private _connection;
    constructor(type: string, connection: IConnection);
    get connection(): IConnection;
}
