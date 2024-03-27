import { ICommunicationManager, IConnection, IConnectionStateListener, IMessageEvent, INitroCommunicationDemo, INitroCommunicationManager } from '../../api';
import { NitroManager } from '../../core';
export declare class NitroCommunicationManager extends NitroManager implements INitroCommunicationManager, IConnectionStateListener {
    private _communication;
    private _connection;
    private _messages;
    private _demo;
    constructor(communication: ICommunicationManager);
    protected onInit(): void;
    protected onDispose(): void;
    private onConnectionOpenedEvent;
    private onConnectionClosedEvent;
    private onConnectionErrorEvent;
    private onConnectionAuthenticatedEvent;
    connectionInit(socketUrl: string): void;
    registerMessageEvent(event: IMessageEvent): IMessageEvent;
    removeMessageEvent(event: IMessageEvent): void;
    get demo(): INitroCommunicationDemo;
    get connection(): IConnection;
}
