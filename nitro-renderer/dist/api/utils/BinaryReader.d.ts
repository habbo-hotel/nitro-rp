import { IBinaryReader } from './IBinaryReader';
export declare class BinaryReader implements IBinaryReader {
    private _position;
    private _dataView;
    constructor(buffer: ArrayBuffer);
    readBytes(length: number): IBinaryReader;
    readByte(): number;
    readShort(): number;
    readInt(): number;
    readFloat(): number;
    readDouble(): number;
    remaining(): number;
    toString(encoding?: string): string;
    toArrayBuffer(): ArrayBuffer;
}
