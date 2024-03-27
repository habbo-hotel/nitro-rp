import { IConnection, IRoomHandlerListener } from '../../../api';
import { BaseHandler } from './BaseHandler';
export declare class WordQuizHandler extends BaseHandler {
    constructor(connection: IConnection, listener: IRoomHandlerListener);
    private onQuestionEvent;
    private onQuestionAnsweredEvent;
    private onQuestionFinishedEvent;
}
