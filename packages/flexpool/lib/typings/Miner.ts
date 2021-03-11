import { BaseResponse } from './Common';

/**
 * @description Returns miner's balance
 * @destination /miner/:address/balance
 */
export interface GetMinerBalance extends BaseResponse {
    result: number;
}

/**
 * @description Returns current effective, and current reported hashrate
 * @destination /miner/:address/current
 */
export interface GetMinerCurrentStats extends BaseResponse {
    result: {
        reported_hashrate: number;
        effective_hashrate: number;
    };
}

/**
 * @description Returns miner's 24h average hashrates and total 24h shares
 * @destination /miner/:address/daily
 */
export interface GetMinerDailyStats extends BaseResponse {
    result: {
        reported_hashrate: number;
        effective_hashrate: number;
    };
}

/**
 * @description Returns miner's basic stats & mix with "current" and "daily"
 * @destination /miner/:address/stats
 */
export interface GetMinerStats extends BaseResponse {
    result: {
        reported_hashrate: number;
        effective_hashrate: number;
        valid_shares: number;
        stale_shares: number;
        invalid_shares: number;
    };
}

/**
 * @description Returns the online/offline worker count
 * @destination /miner/:address/workerCount
 */
export interface GetMinerWorkerCount extends BaseResponse {
    result: {
        online: number;
        offline: number;
    };
}

/**
 * @description Returns miner's workers
 * @destination /miner/:address/workers
 */
export interface GetMinerWorkers extends BaseResponse {
    result: {
        name: string;
        online: boolean;
        effective_hashrate: number;
        reported_hashrate: number;
        valid_shares: number;
        stale_shares: number;
        invalid_shares: number;
        last_seen: number;
    };
}

/**
 * @description Returns true if miner exists
 * @destination /miner/:address/exists
 */
export interface GetMinerExists extends BaseResponse {
    result: boolean;
}

/**
 * @description Returns 24H chart with hashrates & shares, 144 objects with hashrates & shares. All containing timestamp & 10m interval.
 * @destination ​/miner​/{address}​/chart
 */
export interface GetMinerChart extends BaseResponse {
    result: {
        effective_hashrate: number;
        reported_hashrate: number;
        valid_shares: number;
        stale_shares: number;
        invalid_shares: number;
        timestamp: number;
    }[];
}

/**
 * @description Returns paged payments. Paged by 10
 * @destination ​/miner​/{address}​/payments
 */
export interface GetMinerPayments extends BaseResponse {
    result: {
        data: { amount: number; timestamp: number; duratin: number; txid: string }[];
        total_pages: number;
        total_items: number;
        items_per_page: number;
    };
}

/**
 * @description Returns miner's payment count
 * @destination ​/miner​/{address}​/paymentCount
 */
export interface GetMinerPaymentCount extends BaseResponse {
    result: number;
}

/**
 * @description Returns last 30 payments
 * @destination /miner​/{address}​/paymentsChart
 */
export interface GetMinerPaymentChart extends BaseResponse {
    result: { amount: number; timestamp: number }[];
}

/**
 * @description Returns paged mined blocks. Paged by 10
 * @destination /miner/:address/blocks
 */
export interface GetMinerBlocks extends BaseResponse {
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
 * @description Returns the amount of confirmed/unconfirmed blocks that were mined by given miner
 * @destination /miner/:address/blockCount
 */
export interface GetMinerBlockCount extends BaseResponse {
    result: {
        confirmed: number;
        unconfirmed: number;
    };
}

/**
 * @description Returns miner's details: Payout Threshold (in weis), Pool donation (% / 100), Censored Email, Censored IP, First Joined (timestamp)
 * @destination /miner/:address/details
 */
export interface GetMinerDetails extends BaseResponse {
    result: {
        min_payout_threshold: number;
        pool_donation: number;
        censored_email: string;
        censored_ip: string;
        first_joined: number;
    };
}

/**
 * @description Returns miner's estimated daily revenue based on current block difficulty and average Flexpool's block reward.
 * @destination /miner/:address/estimatedDailyRevenue
 */
export interface GetMinerEstimatedDailyRevenue extends BaseResponse {
    result: number;
}

/**
 * @description Returns miner's round share (next block contribution)
 * @destination /miner/:address/roundShare
 */
export interface GetMinerRoundShare extends BaseResponse {
    result: number;
}

/**
 * @description Returns the value of all miner's rewards paid
 * @destination /miner/:address/totalPaid
 */
export interface GetMinerTotalPaid extends BaseResponse {
    result: number;
}

/**
 * @description Returns the value of all miner's donations
 * @destination /miner/:address/totalDonated
 */
export interface GetMinerTotalDonated extends BaseResponse {
    result: number;
}
