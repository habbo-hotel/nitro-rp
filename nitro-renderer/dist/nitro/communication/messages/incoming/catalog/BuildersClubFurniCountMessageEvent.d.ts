import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { BuildersClubFurniCountMessageParser } from '../../parser';
export declare class BuildersClubFurniCountMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): BuildersClubFurniCountMessageParser;
}
