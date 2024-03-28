import { useSessionInfo } from "../../hooks";
import { RoleplayStatsContainer } from "./roleplay-stats-container/RoleplayStatsContainer";

export function MyRoleplayStats() {
    const { userInfo} = useSessionInfo();
    if (!userInfo?.userId) {
        return null;
    }
    return <RoleplayStatsContainer userID={userInfo.userId} />
}