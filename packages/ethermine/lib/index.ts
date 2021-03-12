import { Rest as RestHandler } from './rest';
import * as api from './typings';

const rest = new RestHandler('https://api.ethermine.org');

export * from './typings';
export const Routes = {
    miner: {
        /* Dashboard: (miner: string): Promise<Pick<api.GetMinerDashboard, 'data'>> =>
            rest.get<api.GetMinerDashboard>(`/miner/${miner}/dashboard`),*/
        history: (miner: string): Promise<Pick<api.GetMinerHistory, 'data'>> =>
            rest.get<api.GetMinerHistory>(`/miner/${miner}/history`),
        payouts: (miner: string): Promise<Pick<api.GetMinerPayouts, 'data'>> =>
            rest.get<api.GetMinerPayouts>(`/miner/${miner}/payouts`),
        rounds: (miner: string): Promise<Pick<api.GetMinerRounds, 'data'>> =>
            rest.get<api.GetMinerRounds>(`/miner/${miner}/rounds`),
        settings: (miner: string): Promise<Pick<api.GetMinerSettings, 'data'>> =>
            rest.get<api.GetMinerSettings>(`/miner/${miner}/settings`),
        statistics: (miner: string): Promise<Pick<api.GetMinerCurrentStats, 'data'>> =>
            rest.get<api.GetMinerCurrentStats>(`/miner/${miner}/currentStats`),
    },
    pool: {
        statistics: (): Promise<Pick<api.GetPoolStats, 'data'>> => rest.get<api.GetPoolStats>(`/poolStats`),
        history: (): Promise<Pick<api.GetPoolMinedBlocksStats, 'data'>> =>
            rest.get<api.GetPoolMinedBlocksStats>(`/blocks/history`),
        networkStatistics: (): Promise<Pick<api.GetPoolNetworkStats, 'data'>> =>
            rest.get<api.GetPoolNetworkStats>(`/networkStats`),
        serverHashrateStatistics: (): Promise<Pick<api.GetPoolServerHashrateStats, 'data'>> =>
            rest.get<api.GetPoolServerHashrateStats>(`/servers/history`),
    },
    worker: {
        allStatistics: (miner: string): Promise<Pick<api.GetWorkerAllStatistics, 'data'>> =>
            rest.get<api.GetWorkerAllStatistics>(`/miner/${miner}/workers`),
        history: (miner: string, worker: string): Promise<Pick<api.GetWorkerHistory, 'data'>> =>
            rest.get<api.GetWorkerHistory>(`/miner/${miner}/worker/${worker}/history`),
        statistics: (miner: string, worker: string): Promise<Pick<api.GetWorkerStatistics, 'data'>> =>
            rest.get<api.GetWorkerStatistics>(`/miner/${miner}/worker/${worker}/currentStats`),
        /* Monitoring: (miner: string, worker: string): Promise<Pick<api.GetWorkerStatistics, 'data'>> =>
            rest.get<api.GetWorkerStatistics>(`/miner/${miner}/worker/${worker}/monitor`), */
    },
};

export const Utils = {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    miner: (miner: string) => ({
        /* Dashboard: () => Routes.miner.dashboard(miner),*/
        history: () => Routes.miner.history(miner),
        payouts: () => Routes.miner.payouts(miner),
        rounds: () => Routes.miner.rounds(miner),
        settings: () => Routes.miner.settings(miner),
        statistics: () => Routes.miner.statistics(miner),
    }),
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    worker: (miner: string, worker: string) => ({
        allStatistics: () => Routes.worker.allStatistics(miner),
        history: () => Routes.worker.history(miner, worker),
        statistics: () => Routes.worker.statistics(miner, worker),
        /* Monitoring: () => Routes.worker.monitoring(miner, worker), */
    }),
};
