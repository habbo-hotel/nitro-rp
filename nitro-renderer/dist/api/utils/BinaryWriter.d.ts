import { IBinaryWriter } from './IBinaryWriter';
export declare class BinaryWriter implements IBinaryWriter {
    private _buffer;
    private _position;
    constructor();
    writeByte(byte: number): IBinaryWriter;
    writeBytes(bytes: ArrayBuffer | number[]): IBinaryWriter;
    writeShort(short: number): IBinaryWriter;
    writeInt(integer: number): IBinaryWriter;
    writeString(string: string, includeLength?: boolean): IBinaryWriter;
    private appendArray;
    getBuffer(): ArrayBuffer;
    get position(): number;
    set position(pos: number);
    toString(encoding?: string): string;
}
