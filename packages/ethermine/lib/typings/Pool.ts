/* istanbul ignore file */

import { BaseResponse } from './Common';

/**
 * @destination /poolStats
 */
export interface GetPoolStats extends BaseResponse {
    data: {
        minedBlocks: {
            number: number;
            miner: string;
            time: number;
        }[];
        poolStats: {
            hashRate: number;
            miners: number;
            workers: number;
        };
        prices: {
            usd: number;
            btc: number;
        };
    };
}

/**
 * @destination /blocks/history
 */
export interface GetPoolMinedBlocksStats extends BaseResponse {
    data: {
        time: number;
        nbrBlocks: number;
        difficulty: number;
    }[];
}

/**
 * @destination /networkStats
 */
export interface GetPoolNetworkStats extends BaseResponse {
    data: {
        time: number;
        blockTime: number;
        difficulty: number;
        hashrate: number;
        usd: number;
        btc: number;
    }[];
}

/**
 * @destination /servers/history
 */
export interface GetPoolServerHashrateStats extends BaseResponse {
    data: {
        time: number;
        hashrate: number;
        server: number;
    }[];
}
