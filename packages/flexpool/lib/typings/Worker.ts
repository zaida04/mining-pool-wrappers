import { BaseResponse } from './Common';

/**
 * @description Returns workers's current data
 * @destination /worker/:address/:worker/current
 */
export interface GetWorker extends BaseResponse {
    result: {
        reported_hashrate: number;
        effective_hashrate: number;
    };
}

/**
 * @description Returns workers's 24h data
 * @destination /worker/:address/:worker/daily
 */
export interface GetWorkerDaily extends BaseResponse {
    result: {
        reported_hashrate: number;
        effective_hashrate: number;
    };
}

/**
 * @description Returns miner's balance
 * @destination /worker/:address/:worker/stats
 */
export interface GetWorkerStats extends BaseResponse {
    result: {
        reported_hashrate: number;
        effective_hashrate: number;
        valid_shares: number;
        stale_shares: number;
        invalid_shares: number;
    };
}

/**
 * @description Returns miner's balance
 * @destination /worker/:address/:worker/chart
 */
export interface GetWorkerChart extends BaseResponse {
    result: {
        reported_hashrate: number;
        effective_hashrate: number;
        valid_shares: number;
        stale_shares: number;
        invalid_shares: number;
    }[];
}
