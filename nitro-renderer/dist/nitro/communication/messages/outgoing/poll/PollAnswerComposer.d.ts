import { IMessageComposer } from '../../../../../api';
export declare class PollAnswerComposer implements IMessageComposer<any> {
    private _data;
    constructor(pollId: number, questionId: number, answers: string[]);
    getMessageArray(): any;
    dispose(): void;
}
