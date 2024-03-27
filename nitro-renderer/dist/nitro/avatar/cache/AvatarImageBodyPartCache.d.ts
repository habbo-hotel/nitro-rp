import { IActiveActionData } from '../../../api';
import { AvatarImageActionCache } from './AvatarImageActionCache';
export declare class AvatarImageBodyPartCache {
    private _cache;
    private _currentAction;
    private _currentDirection;
    private _disposed;
    constructor();
    setAction(k: IActiveActionData, _arg_2: number): void;
    dispose(): void;
    disposeActions(k: number, _arg_2: number): void;
    getAction(): IActiveActionData;
    setDirection(k: number): void;
    getDirection(): number;
    getActionCache(k?: IActiveActionData): AvatarImageActionCache;
    updateActionCache(k: IActiveActionData, _arg_2: AvatarImageActionCache): void;
    private debugInfo;
}
