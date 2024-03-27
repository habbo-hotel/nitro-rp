import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class RentableSpaceStatusMessageParser implements IMessageParser {
    static readonly SPACE_ALREADY_RENTED = 100;
    static readonly SPACE_EXTEND_NOT_RENTED = 101;
    static readonly SPACE_EXTEND_NOT_RENTED_BY_YOU = 102;
    static readonly CAN_RENT_ONLY_ONE_SPACE = 103;
    static readonly NOT_ENOUGH_CREDITS = 200;
    static readonly NOT_ENOUGH_PIXELS = 201;
    static readonly CANT_RENT_NO_PERMISSION = 202;
    static readonly CANT_RENT_NO_HABBO_CLUB = 203;
    static readonly CANT_RENT = 300;
    static readonly CANT_RENT_GENERIC = 400;
    private _rented;
    private _renterId;
    private _renterName;
    private _canRent;
    private _canRentErrorCode;
    private _timeRemaining;
    private _price;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get rented(): boolean;
    get renterId(): number;
    get renterName(): string;
    get canRent(): boolean;
    get price(): number;
    get timeRemaining(): number;
    get canRentErrorCode(): number;
}
