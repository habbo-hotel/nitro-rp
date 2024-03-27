import { IBinaryReader, IMessageDataWrapper } from '../../../../api';
export declare class EvaWireDataWrapper implements IMessageDataWrapper {
    private _header;
    private _buffer;
    constructor(header: number, buffer: IBinaryReader);
    readBytes(length: number): IBinaryReader;
    readByte(): number;
    readBoolean(): boolean;
    readShort(): number;
    readInt(): number;
    readFloat(): number;
    readDouble(): number;
    readString(): string;
    get header(): number;
    get bytesAvailable(): boolean;
}
