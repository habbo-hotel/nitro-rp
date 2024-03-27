import { HabboClubLevelEnum } from '@nitro-rp/renderer';
import { GetSessionDataManager } from './GetSessionDataManager';

export function HasHabboClub(): boolean
{
    return (GetSessionDataManager().clubLevel >= HabboClubLevelEnum.CLUB);
}
