import { IMessageComposer, IMessageConfiguration, IMessageEvent } from '../../../api';
export declare class MessageClassManager {
    private _messageIdByEvent;
    private _messageIdByComposer;
    private _messageInstancesById;
    constructor();
    dispose(): void;
    registerMessages(configuration: IMessageConfiguration): void;
    private registerMessageEventClass;
    private registerMessageComposerClass;
    registerMessageEvent(event: IMessageEvent): void;
    removeMessageEvent(event: IMessageEvent): void;
    getEvents(header: number): IMessageEvent[];
    getEventId(event: IMessageEvent): number;
    getComposerId(composer: IMessageComposer<unknown[]>): number;
}
