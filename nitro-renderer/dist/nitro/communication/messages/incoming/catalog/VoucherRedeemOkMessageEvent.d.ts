import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { VoucherRedeemOkMessageParser } from '../../parser';
export declare class VoucherRedeemOkMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): VoucherRedeemOkMessageParser;
}
