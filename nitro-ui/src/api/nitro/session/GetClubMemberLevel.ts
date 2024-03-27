import { HabboClubLevelEnum } from '@nitro-rp/renderer';
import { GetConfiguration } from '..';
import { GetSessionDataManager } from './GetSessionDataManager';

export function GetClubMemberLevel(): number
{
    if(GetConfiguration<boolean>('hc.disabled', false)) return HabboClubLevelEnum.VIP;
    
    return GetSessionDataManager().clubLevel;
}
