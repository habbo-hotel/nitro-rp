import { IDisposable, IEventDispatcher, INitroEvent } from '../../api';
import { Disposable } from './Disposable';
export declare class EventDispatcher extends Disposable implements IEventDispatcher, IDisposable {
    private _listeners;
    constructor();
    protected onDispose(): void;
    addEventListener(type: string, callback: Function): void;
    removeEventListener(type: string, callback: any): void;
    dispatchEvent(event: INitroEvent): boolean;
    private processEvent;
    removeAllListeners(): void;
}
