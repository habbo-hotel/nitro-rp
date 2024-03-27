import { IMessageComposer } from '../../../../../../api';
export declare class FurniturePlacePaintComposer implements IMessageComposer<ConstructorParameters<typeof FurniturePlacePaintComposer>> {
    private _data;
    constructor(furniId: number);
    getMessageArray(): [furniId: number];
    dispose(): void;
}
