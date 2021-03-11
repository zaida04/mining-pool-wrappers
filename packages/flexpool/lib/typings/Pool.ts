import { BaseResponse } from './Common';

/**
 * @description Returns pool hashrate (splitted by servers)
 * @destination ​/pool​/hashrate
 */
export interface GetPoolHashrate extends BaseResponse {
    result: {
        EU1: number;
        US1: number;
        total: number;
    };
}

/**
 * @description Returns pool hashrate chart (splitted by servers)
 * @destination ​/pool​/hashrateChart
 */
export interface GetPoolHashrateChart extends BaseResponse {
    result: { EU1: number; US1: number; total: number; timestamp: number }[];
}

/**
 * @description Returns miners online count
 * @destination ​/pool​/minersOnline
 */
export interface GetPoolMinersOnline extends BaseResponse {
    result: number;
}

/**
 * @description Returns workers online count
 * @destination ​/pool​/workersOnline
 */
export interface GetPoolWorkersOnline extends BaseResponse {
    result: number;
}

/**
 * @description Returns paged mined blocks
 * @destination ​/pool​/blocks
 */
export interface GetPoolBlocks extends BaseResponse {
    result: {
        data: {
            number: number;
            type: string;
            miner: string;
            difficulty: number;
            timestamp: number;
            confirmed: boolean;
            round_time: number;
            luck: number;
            server_name: string;
            block_reward: number;
            block_fees: number;
            uncle_inclusion_rewards: number;
            total_rewards: number;
            hash: string;
        }[];
        total_pages: number;
        total_items: number;
        items_per_page: number;
    };
}

/**
 * @description Returns the amount of blocks mined
 * @destination ​/pool​/blockCount
 */
export interface GetPoolBlockCount extends BaseResponse {
    result: {
        confirmed: number;
        unconfirmed: number;
    };
}

/**
 * @description Returns top miners
 * @destination ​/pool​/topMiners
 */
export interface GetPoolTopMiners extends BaseResponse {
    result: {
        address: string;
        hashrate: number;
        pool_donation: number;
        balance: number;
        total_workers: number;
        first_joined: number;
    }[];
}

/**
 * @description Returns top donators
 * @destination ​/pool​/topDonators
 */
export interface GetPoolTopDonors extends BaseResponse {
    result: {
        address: string;
        total_donated: number;
        pool_donation: number;
        hashrate: number;
        first_joined: number;
    }[];
}

/**
 * @description Returns average luck and roundtime
 * @destination ​/pool​/avgLuckRoundtime
 */
export interface GetPoolAverageLuckRoundTime extends BaseResponse {
    result: {
        luck: number;
        round_time: number;
    };
}

/**
 * @description Returns current luck
 * @destination ​/pool​/currentLuck
 */
export interface GetPoolCurrentLuck extends BaseResponse {
    result: number;
}
