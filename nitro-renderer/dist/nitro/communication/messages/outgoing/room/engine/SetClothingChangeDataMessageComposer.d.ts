import { IMessageComposer } from '../../../../../../api';
export declare class SetClothingChangeDataMessageComposer implements IMessageComposer<ConstructorParameters<typeof SetClothingChangeDataMessageComposer>> {
    private _data;
    constructor(objectId: number, gender: string, look?: string);
    getMessageArray(): [objectId: number, gender: string, look?: string];
    dispose(): void;
}
