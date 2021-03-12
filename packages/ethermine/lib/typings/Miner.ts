/* istanbul ignore file */

/**
 * @destination /miner/:miner/dashboard
 */

import { BaseResponse } from './Common';

/**
 * @destination /miner/:miner/dashboard
 */
export interface GetMinerDashboard extends BaseResponse {
    data: {
        statistics: {
            time: number;
            reportedHashrate: number;
            currentHashrate: number;
            validShares: number;
            invalidShares: number;
            staleShares: number;
        };
        workers: {
            worker: string;
            time: number;
            lastSeen: number;
            reportedHashrate: number;
            currentHashrate: number;
            validShares: number;
            invalidShares: number;
            staleShares: number;
        }[];
        currentStatistics: {
            time: number;
            lastSeen: number;
            reportedHashrate: number;
            averageHashrate: number;
            currentHashrate: number;
            validShares: number;
            invalidShares: number;
            staleShares: number;
            activeWorkers: number;
            unpaid: number;
            unconfirmed: number;
        }[];
        settings: {
            email: string;
            monitor: number;
            minPayout: number;
        };
    };
}

/**
 * @destination /miner/:miner/history
 */
export interface GetMinerHistory extends BaseResponse {
    data: {
        reportedHashrate: number;
        averageHashrate: number;
        currentHashrate: number;
        validShares: number;
        invalidShares: number;
        staleShares: number;
        activeWorkers: number;
    }[];
}

/**
 * @destination /miner/:miner/payouts
 */
export interface GetMinerPayouts extends BaseResponse {
    data: {
        paidOn: number;
        start: number;
        end: number;
        amount: number;
        txHash: string;
    }[];
}

/**
 * @destination /miner/:miner/rounds
 */
export interface GetMinerRounds extends BaseResponse {
    data: {
        block: number;
        amount: number;
    }[];
}

/**
 * @destination /miner/:miner/settings
 */
export interface GetMinerSettings extends BaseResponse {
    data: {
        email: string;
        monitor: number;
        minPayout: number;
        ip: string;
    };
}

/**
 * @destination /miner/:miner/currentStats
 */
export interface GetMinerCurrentStats extends BaseResponse {
    data: {
        time: number;
        lastSeen: number;
        reportedHashrate: number;
        averageHashrate: number;
        currentHashrate: number;
        validShares: number;
        invalidShares: number;
        staleShares: number;
        activeWorkers: number;
        unpaid: number;
        unconfirmed: number;
        coinsPerMin: number;
        usdPerMin: number;
        btcPerMin: number;
    };
}
