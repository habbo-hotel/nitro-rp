import { IPollChoice } from '../../../../../api';
export declare class PollChoice implements IPollChoice {
    private _value;
    private _choiceText;
    private _choiceType;
    constructor(value: string, choiceText: string, choiceType: number);
    get value(): string;
    set value(value: string);
    get choiceText(): string;
    set choiceText(choiceText: string);
    get choiceType(): number;
    set choiceType(choiceType: number);
}
