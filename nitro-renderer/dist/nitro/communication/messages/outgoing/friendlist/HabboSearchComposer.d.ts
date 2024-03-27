import { IMessageComposer } from '../../../../../api';
export declare class HabboSearchComposer implements IMessageComposer<ConstructorParameters<typeof HabboSearchComposer>> {
    private _data;
    constructor(search: string);
    getMessageArray(): [search: string];
    dispose(): void;
}
