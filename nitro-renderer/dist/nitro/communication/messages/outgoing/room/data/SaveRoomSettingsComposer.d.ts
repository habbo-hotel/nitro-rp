import { IMessageComposer } from '../../../../../../api';
export declare class SaveRoomSettingsComposer implements IMessageComposer<ConstructorParameters<typeof SaveRoomSettingsComposer>> {
    private _data;
    constructor(roomId: number, roomName: string, roomDescription: string, lockState: number, password: string, userCount: number, categoryId: number, tagsCount: number, tags: string[], tradeState: number, allowPets: boolean, allowPetsEat: boolean, allowWalkthrough: boolean, hideWalls: boolean, wallThickness: number, floorThickness: number, muteState: number, kickState: number, banState: number, chatBubbleMode: number, chatBubbleWeight: number, chatBubbleSpeed: number, chatDistance: number, chatFloodProtection: number);
    getMessageArray(): [roomId: number, roomName: string, roomDescription: string, lockState: number, password: string, userCount: number, categoryId: number, tagsCount: number, tags: string[], tradeState: number, allowPets: boolean, allowPetsEat: boolean, allowWalkthrough: boolean, hideWalls: boolean, wallThickness: number, floorThickness: number, muteState: number, kickState: number, banState: number, chatBubbleMode: number, chatBubbleWeight: number, chatBubbleSpeed: number, chatDistance: number, chatFloodProtection: number];
    dispose(): void;
}
