import { HabboClubLevelEnum } from '@nitro-rp/renderer';
import { GetSessionDataManager } from './GetSessionDataManager';

export function HasHabboVip(): boolean
{
    return (GetSessionDataManager().clubLevel >= HabboClubLevelEnum.VIP);
}
