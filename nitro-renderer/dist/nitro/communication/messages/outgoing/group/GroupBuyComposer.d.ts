import { IMessageComposer } from '../../../../../api';
export declare class GroupBuyComposer implements IMessageComposer<any[]> {
    private _data;
    constructor(name: string, description: string, roomId: number, colorA: number, colorB: number, badge: number[]);
    getMessageArray(): any[];
    dispose(): void;
}
