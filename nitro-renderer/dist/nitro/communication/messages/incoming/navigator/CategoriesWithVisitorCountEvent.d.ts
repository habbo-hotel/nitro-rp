import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { CategoriesWithVisitorCountParser } from '../../parser';
export declare class CategoriesWithVisitorCountEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): CategoriesWithVisitorCountParser;
}
