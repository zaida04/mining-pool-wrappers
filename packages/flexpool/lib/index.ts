import { Rest as RestHandler } from './rest';
import * as api from './typings';

const rest = new RestHandler('https://flexpool.io/api/v1');

export * from './typings';
export const Routes = {
    miner: {
        balance: (address: string): Promise<api.GetMinerBalance> =>
            rest.get<api.GetMinerBalance>(`/miner/${address}/balance`),
        currentStats: (address: string): Promise<api.GetMinerCurrentStats> =>
            rest.get<api.GetMinerCurrentStats>(`/miner/${address}/current`),
        daily: (address: string): Promise<api.GetMinerDailyStats> =>
            rest.get<api.GetMinerDailyStats>(`/miner/${address}/daily`),
        stats: (address: string): Promise<api.GetMinerStats> => rest.get<api.GetMinerStats>(`/miner/${address}/stats`),
        workerCount: (address: string): Promise<api.GetMinerWorkerCount> =>
            rest.get<api.GetMinerWorkerCount>(`/miner/${address}/workerCount`),
        workers: (address: string): Promise<api.GetMinerWorkers> =>
            rest.get<api.GetMinerWorkers>(`/miner/${address}/workers`),
        /* Doesn't work??: CheckExists: (address: string): Promise<api.GetMinerExists> =>
            rest.get<api.GetMinerExists>(`/miner/${address}/exists`), */
        chart: (address: string): Promise<api.GetMinerChart> => rest.get<api.GetMinerChart>(`/miner/${address}/chart`),
        payments: (address: string, page = 1): Promise<api.GetMinerPayments> =>
            rest.get<api.GetMinerPayments>(`/miner/${address}/payments?page=${page}`),
        paymentCount: (address: string): Promise<api.GetMinerPaymentCount> =>
            rest.get<api.GetMinerPaymentCount>(`/miner/${address}/paymentCount`),
        paymentsChart: (address: string): Promise<api.GetMinerPaymentChart> =>
            rest.get<api.GetMinerPaymentChart>(`/miner/${address}/paymentsChart`),
        blocks: (address: string, page = 1): Promise<api.GetMinerBlocks> =>
            rest.get<api.GetMinerBlocks>(`/miner/${address}/blocks?page=${page}`),
        blockCount: (address: string): Promise<api.GetMinerBlockCount> =>
            rest.get<api.GetMinerBlockCount>(`/miner/${address}/blockCount`),
        details: (address: string): Promise<api.GetMinerDetails> =>
            rest.get<api.GetMinerDetails>(`/miner/${address}/details`),
        estimatedDailyRevenue: (address: string): Promise<api.GetMinerEstimatedDailyRevenue> =>
            rest.get<api.GetMinerEstimatedDailyRevenue>(`/miner/${address}/estimatedDailyRevenue`),
        roundShare: (address: string): Promise<api.GetMinerRoundShare> =>
            rest.get<api.GetMinerRoundShare>(`/miner/${address}/roundShare`),
        totalPaid: (address: string): Promise<api.GetMinerTotalPaid> =>
            rest.get<api.GetMinerTotalPaid>(`/miner/${address}/totalPaid`),
        totalDonated: (address: string): Promise<api.GetMinerTotalDonated> =>
            rest.get<api.GetMinerTotalDonated>(`/miner/${address}/totalDonated`),
    },
    pool: {
        hashrateChart: (): Promise<api.GetPoolHashrateChart> =>
            rest.get<api.GetPoolHashrateChart>(`/pool/hashrateChart`),
        workersOnline: (): Promise<api.GetPoolWorkersOnline> =>
            rest.get<api.GetPoolWorkersOnline>(`/pool/workersOnline`),
        averageLuckRoundtime: (): Promise<api.GetPoolAverageLuckRoundTime> =>
            rest.get<api.GetPoolAverageLuckRoundTime>(`/pool/avgLuckRoundtime`),
        minersOnline: (): Promise<api.GetPoolMinersOnline> => rest.get<api.GetPoolMinersOnline>(`/pool/minersOnline`),
        blocks: (page = 1): Promise<api.GetPoolBlocks> => rest.get<api.GetPoolBlocks>(`/pool/blocks?page=${page}`),
        blockCount: (): Promise<api.GetPoolBlockCount> => rest.get<api.GetPoolBlockCount>(`/pool/blockCount`),
        topMiners: (): Promise<api.GetPoolTopMiners> => rest.get<api.GetPoolTopMiners>(`/pool/topMiners`),
        topDonators: (): Promise<api.GetPoolTopDonors> => rest.get<api.GetPoolTopDonors>(`/pool/topDonators`),
        hashrate: (): Promise<api.GetPoolHashrate> => rest.get<api.GetPoolHashrate>(`/pool/hashrate`),
        currentLuck: (): Promise<api.GetPoolCurrentLuck> => rest.get<api.GetPoolCurrentLuck>(`/pool/currentLuck`),
    },
    worker: {
        current: (address: string, worker: string): Promise<api.GetWorker> =>
            rest.get<api.GetWorker>(`/worker/${address}/${worker}/current`),
        daily: (address: string, worker: string): Promise<api.GetWorkerDaily> =>
            rest.get<api.GetWorkerDaily>(`/worker/${address}/${worker}/daily`),
        stats: (address: string, worker: string): Promise<api.GetWorkerStats> =>
            rest.get<api.GetWorkerStats>(`/worker/${address}/${worker}/stats`),
        chart: (address: string, worker: string): Promise<api.GetWorkerChart> =>
            rest.get<api.GetWorkerChart>(`/worker/${address}/${worker}/chart`),
    },
};

export const Utils = {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    miner: (address: string) => ({
        balance: () => Routes.miner.balance(address),
        currentStats: () => Routes.miner.currentStats(address),
        daily: () => Routes.miner.daily(address),
        stats: () => Routes.miner.stats(address),
        workerCount: () => Routes.miner.workerCount(address),
        workers: () => Routes.miner.workers(address),
        /* CheckExists: () => Routes.miner.checkExists(address), */
        chart: () => Routes.miner.chart(address),
        payments: () => Routes.miner.payments(address),
        paymentCount: () => Routes.miner.paymentCount(address),
        paymentsChart: () => Routes.miner.paymentsChart(address),
        blocks: () => Routes.miner.blocks(address),
        blockCount: () => Routes.miner.blockCount(address),
        details: () => Routes.miner.details(address),
        estimatedDailyRevenue: () => Routes.miner.estimatedDailyRevenue(address),
        roundShare: () => Routes.miner.roundShare(address),
        totalPaid: () => Routes.miner.totalPaid(address),
        totalDonated: () => Routes.miner.totalDonated(address),
    }),
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    worker: (address: string, worker: string) => ({
        current: () => Routes.worker.current(address, worker),
        daily: () => Routes.worker.daily(address, worker),
        stats: () => Routes.worker.stats(address, worker),
        chart: () => Routes.worker.chart(address, worker),
    }),
};
