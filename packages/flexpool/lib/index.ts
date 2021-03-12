import { Rest as RestHandler } from './rest';
import * as api from './typings';

const rest = new RestHandler('https://flexpool.io/api/v1');

export * from './typings';
export const Routes = {
    miner: {
        balance: (address: string): Promise<Pick<api.GetMinerBalance, 'result'>> =>
            rest.get<api.GetMinerBalance>(`/miner/${address}/balance`),
        currentStats: (address: string): Promise<Pick<api.GetMinerCurrentStats, 'result'>> =>
            rest.get<api.GetMinerCurrentStats>(`/miner/${address}/current`),
        daily: (address: string): Promise<Pick<api.GetMinerDailyStats, 'result'>> =>
            rest.get<api.GetMinerDailyStats>(`/miner/${address}/daily`),
        stats: (address: string): Promise<Pick<api.GetMinerStats, 'result'>> =>
            rest.get<api.GetMinerStats>(`/miner/${address}/stats`),
        workerCount: (address: string): Promise<Pick<api.GetMinerWorkerCount, 'result'>> =>
            rest.get<api.GetMinerWorkerCount>(`/miner/${address}/workerCount`),
        workers: (address: string): Promise<Pick<api.GetMinerWorkers, 'result'>> =>
            rest.get<api.GetMinerWorkers>(`/miner/${address}/workers`),
        /* Doesn't work??: CheckExists: (address: string): Promise<Pick<api.GetMinerExists> =>
            rest.get<api.GetMinerExists>(`/miner/${address}/exists`), */
        chart: (address: string): Promise<Pick<api.GetMinerChart, 'result'>> =>
            rest.get<api.GetMinerChart>(`/miner/${address}/chart`),
        payments: (address: string, page = 1): Promise<Pick<api.GetMinerPayments, 'result'>> =>
            rest.get<api.GetMinerPayments>(`/miner/${address}/payments?page=${page}`),
        paymentCount: (address: string): Promise<Pick<api.GetMinerPaymentCount, 'result'>> =>
            rest.get<api.GetMinerPaymentCount>(`/miner/${address}/paymentCount`),
        paymentsChart: (address: string): Promise<Pick<api.GetMinerPaymentChart, 'result'>> =>
            rest.get<api.GetMinerPaymentChart>(`/miner/${address}/paymentsChart`),
        blocks: (address: string, page = 1): Promise<Pick<api.GetMinerBlocks, 'result'>> =>
            rest.get<api.GetMinerBlocks>(`/miner/${address}/blocks?page=${page}`),
        blockCount: (address: string): Promise<Pick<api.GetMinerBlockCount, 'result'>> =>
            rest.get<api.GetMinerBlockCount>(`/miner/${address}/blockCount`),
        details: (address: string): Promise<Pick<api.GetMinerDetails, 'result'>> =>
            rest.get<api.GetMinerDetails>(`/miner/${address}/details`),
        estimatedDailyRevenue: (address: string): Promise<Pick<api.GetMinerEstimatedDailyRevenue, 'result'>> =>
            rest.get<api.GetMinerEstimatedDailyRevenue>(`/miner/${address}/estimatedDailyRevenue`),
        roundShare: (address: string): Promise<Pick<api.GetMinerRoundShare, 'result'>> =>
            rest.get<api.GetMinerRoundShare>(`/miner/${address}/roundShare`),
        totalPaid: (address: string): Promise<Pick<api.GetMinerTotalPaid, 'result'>> =>
            rest.get<api.GetMinerTotalPaid>(`/miner/${address}/totalPaid`),
        totalDonated: (address: string): Promise<Pick<api.GetMinerTotalDonated, 'result'>> =>
            rest.get<api.GetMinerTotalDonated>(`/miner/${address}/totalDonated`),
    },
    pool: {
        hashrateChart: (): Promise<Pick<api.GetPoolHashrateChart, 'result'>> =>
            rest.get<api.GetPoolHashrateChart>(`/pool/hashrateChart`),
        workersOnline: (): Promise<Pick<api.GetPoolWorkersOnline, 'result'>> =>
            rest.get<api.GetPoolWorkersOnline>(`/pool/workersOnline`),
        averageLuckRoundtime: (): Promise<Pick<api.GetPoolAverageLuckRoundTime, 'result'>> =>
            rest.get<api.GetPoolAverageLuckRoundTime>(`/pool/avgLuckRoundtime`),
        minersOnline: (): Promise<Pick<api.GetPoolMinersOnline, 'result'>> =>
            rest.get<api.GetPoolMinersOnline>(`/pool/minersOnline`),
        blocks: (page = 1): Promise<Pick<api.GetPoolBlocks, 'result'>> =>
            rest.get<api.GetPoolBlocks>(`/pool/blocks?page=${page}`),
        blockCount: (): Promise<Pick<api.GetPoolBlockCount, 'result'>> =>
            rest.get<api.GetPoolBlockCount>(`/pool/blockCount`),
        topMiners: (): Promise<Pick<api.GetPoolTopMiners, 'result'>> =>
            rest.get<api.GetPoolTopMiners>(`/pool/topMiners`),
        topDonators: (): Promise<Pick<api.GetPoolTopDonors, 'result'>> =>
            rest.get<api.GetPoolTopDonors>(`/pool/topDonators`),
        hashrate: (): Promise<Pick<api.GetPoolHashrate, 'result'>> => rest.get<api.GetPoolHashrate>(`/pool/hashrate`),
        currentLuck: (): Promise<Pick<api.GetPoolCurrentLuck, 'result'>> =>
            rest.get<api.GetPoolCurrentLuck>(`/pool/currentLuck`),
    },
    worker: {
        current: (address: string, worker: string): Promise<Pick<api.GetWorker, 'result'>> =>
            rest.get<api.GetWorker>(`/worker/${address}/${worker}/current`),
        daily: (address: string, worker: string): Promise<Pick<api.GetWorkerDaily, 'result'>> =>
            rest.get<api.GetWorkerDaily>(`/worker/${address}/${worker}/daily`),
        stats: (address: string, worker: string): Promise<Pick<api.GetWorkerStats, 'result'>> =>
            rest.get<api.GetWorkerStats>(`/worker/${address}/${worker}/stats`),
        chart: (address: string, worker: string): Promise<Pick<api.GetWorkerChart, 'result'>> =>
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
