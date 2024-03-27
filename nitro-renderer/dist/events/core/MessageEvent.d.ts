import { IConnection, IMessageEvent, IMessageParser } from '../../api';
export declare class MessageEvent implements IMessageEvent {
    private _callBack;
    private _parserClass;
    private _parser;
    private _connection;
    constructor(callBack: Function, parser: {
        new (): IMessageParser;
    });
    dispose(): void;
    get callBack(): Function;
    get parserClass(): Function;
    get parser(): IMessageParser;
    set parser(parser: IMessageParser);
    get connection(): IConnection;
    set connection(connection: IConnection);
}
