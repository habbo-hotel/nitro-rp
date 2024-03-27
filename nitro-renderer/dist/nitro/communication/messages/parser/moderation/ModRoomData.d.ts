import { IDisposable, IMessageDataWrapper } from '../../../../../api';
export declare class ModRoomData implements IDisposable {
    private _exists;
    private _name;
    private _desc;
    private _tags;
    private _disposed;
    constructor(k: IMessageDataWrapper);
    get name(): string;
    get desc(): string;
    get tags(): string[];
    get exists(): boolean;
    get disposed(): boolean;
    dispose(): void;
}
