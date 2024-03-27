import { FurnitureLogic } from './FurnitureLogic';
export declare class FurnitureRentableSpaceLogic extends FurnitureLogic {
    getEventTypes(): string[];
    update(time: number): void;
    get widget(): string;
}
