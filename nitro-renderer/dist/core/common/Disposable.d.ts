import { IDisposable } from '../../api';
export declare class Disposable implements IDisposable {
    protected _isDisposed: boolean;
    protected _isDisposing: boolean;
    constructor();
    dispose(): void;
    protected onDispose(): void;
    get disposed(): boolean;
    get isDisposing(): boolean;
}
