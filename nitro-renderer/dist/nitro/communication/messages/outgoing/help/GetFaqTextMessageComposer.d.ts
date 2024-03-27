import { IMessageComposer } from '../../../../../api';
export declare class GetFaqTextMessageComposer implements IMessageComposer<ConstructorParameters<typeof GetFaqTextMessageComposer>> {
    private _data;
    constructor(questionId: number);
    getMessageArray(): [questionId: number];
    dispose(): void;
}
