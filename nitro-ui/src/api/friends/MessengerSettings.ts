import { FriendCategoryData } from '@nitro-rp/renderer';

export class MessengerSettings
{
    constructor(
        public userFriendLimit: number = 0,
        public normalFriendLimit: number = 0,
        public extendedFriendLimit: number = 0,
        public categories: FriendCategoryData[] = []) 
    {}
}
