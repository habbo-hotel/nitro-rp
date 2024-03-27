import { IRoomSession } from '../../api';
import { RoomSessionEvent } from './RoomSessionEvent';
export declare class RoomSessionQueueEvent extends RoomSessionEvent {
    static QUEUE_STATUS: string;
    static QUEUE_TYPE_CLUB: string;
    static QUEUE_TYPE_NORMAL: string;
    static QUEUE_TARGET_VISITOR: number;
    static QUEUE_TARGET_SPECTATOR: number;
    private _name;
    private _target;
    private _queues;
    private _isActive;
    private _activeQueue;
    constructor(k: IRoomSession, _arg_2: string, _arg_3: number, _arg_4?: boolean);
    get isActive(): boolean;
    get queueSetName(): string;
    get queueSetTarget(): number;
    get queueTypes(): string[];
    getQueueSize(k: string): number;
    addQueue(k: string, _arg_2: number): void;
}
