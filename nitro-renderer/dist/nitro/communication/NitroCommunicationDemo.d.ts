import { INitroCommunicationDemo, INitroCommunicationManager } from '../../api';
import { NitroManager } from '../../core';
export declare class NitroCommunicationDemo extends NitroManager implements INitroCommunicationDemo {
    private _communication;
    private _handShaking;
    private _didConnect;
    private _pongInterval;
    constructor(communication: INitroCommunicationManager);
    protected onInit(): void;
    protected onDispose(): void;
    private onConnectionOpenedEvent;
    private onConnectionClosedEvent;
    private onConnectionErrorEvent;
    private tryAuthentication;
    private onClientPingEvent;
    private onAuthenticatedEvent;
    private startHandshake;
    private completeHandshake;
    private startPonging;
    private stopPonging;
    private sendPong;
    private dispatchCommunicationDemoEvent;
    private getSSO;
}
