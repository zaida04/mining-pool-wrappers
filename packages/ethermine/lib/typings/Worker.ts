/* istanbul ignore file */

import { BaseResponse } from './Common';

/**
 * @destination /miner/:miner/workers
 */
export interface GetWorkerAllStatistics extends BaseResponse {
    data: {
        worker: string;
        time: number;
        lastSeen: number;
        reportedHashrate: number;
        currentHashrate: number;
        validShares: number;
        invalidShares: number;
        staleShares: number;
    }[];
}

/**
 * @destination /miner/:miner/worker/:worker/history
 */
export interface GetWorkerHistory extends BaseResponse {
    data: {
        lastSeen: number;
        reportedHashrate: number;
        averageHashrate: number;
        currentHashrate: number;
        validShares: number;
        invalidShares: number;
        staleShares: number;
    }[];
}

/**
 * @destination /miner/:miner/worker/:worker/currentStats
 */
export interface GetWorkerStatistics extends BaseResponse {
    data: {
        time: number;
        lastSeen: number;
        reportedHashrate: number;
        averageHashrate: number;
        currentHashrate: number;
        validShares: number;
        invalidShares: number;
        staleShares: number;
    }[];
}

/**
 * @destination /miner/:miner/worker/:worker/monitor
 */
export interface GetWorkerMonitoring extends BaseResponse {
    data: {
        worker: string;
        lastSeen: number;
        currentHashrate: number;
        validShares: number;
        invalidShares: number;
        staleShares: number;
    }[];
}
