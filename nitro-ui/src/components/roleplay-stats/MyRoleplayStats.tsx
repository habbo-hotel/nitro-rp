import { useSessionInfo } from "../../hooks";
import { RoleplayStatsContainer } from "./roleplay-stats-container/RoleplayStatsContainer";

export function MyRoleplayStats() {
    const { userInfo, } = useSessionInfo();
    return <RoleplayStatsContainer userID={userInfo.userId} />
}