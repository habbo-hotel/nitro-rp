import { IMessageComposer } from '../../../../../api';
export declare class CreateFlatMessageComposer implements IMessageComposer<ConstructorParameters<typeof CreateFlatMessageComposer>> {
    private _data;
    constructor(roomName: string, roomDesc: string, modelName: string, categoryId: number, maxVisitors: number, tradeType: number);
    getMessageArray(): [roomName: string, roomDesc: string, modelName: string, categoryId: number, maxVisitors: number, tradeType: number];
    dispose(): void;
}
