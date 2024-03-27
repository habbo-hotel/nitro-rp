import { IMessageComposer } from '../../../../../api';
export declare class GetDailyQuestMessageComposer implements IMessageComposer<ConstructorParameters<typeof GetDailyQuestMessageComposer>> {
    private _data;
    constructor(k: boolean, _arg_2: number);
    getMessageArray(): [k: boolean, _arg_2: number];
    dispose(): void;
}
