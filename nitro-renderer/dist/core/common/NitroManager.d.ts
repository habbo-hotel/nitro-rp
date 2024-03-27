import { IEventDispatcher, INitroManager } from '../../api';
import { Disposable } from './Disposable';
export declare class NitroManager extends Disposable implements INitroManager {
    private _events;
    private _isLoaded;
    private _isLoading;
    constructor();
    init(): void;
    protected onInit(): void;
    protected onDispose(): void;
    reload(): void;
    get events(): IEventDispatcher;
    get isLoaded(): boolean;
    get isLoading(): boolean;
}
