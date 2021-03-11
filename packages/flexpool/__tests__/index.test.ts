import { Routes, Utils } from '../';

const ADDRESS = '0xe76454a33A9c58838eA7F03c6A97071AA1c4a473';
const WORKER = 'WORKER001';

/*

TODO: write better tests
i can't be bothered to have specifics.

*/

describe('Utils/Routes', () => {
    describe('Miner Endpoints', () => {
        const miner = Utils.miner(ADDRESS);

        test('balance', async () => {
            expect(await miner.balance()).not.toBeNull();
        });
        test('currentStats', async () => {
            expect(await miner.currentStats()).not.toBeNull();
        });
        test('daily', async () => {
            expect(await miner.daily()).not.toBeNull();
        });
        test('stats', async () => {
            expect(await miner.stats()).not.toBeNull();
        });
        test('workers', async () => {
            expect(await miner.workers()).not.toBeNull();
        });
        test('workerCount', async () => {
            expect(await miner.workerCount()).not.toBeNull();
        });
        /* Test('checkExists', async () => {
            expect(await miner.checkExists()).not.toBeNull();
        }); */
        test('chart', async () => {
            expect(await miner.chart()).not.toBeNull();
        });
        test('payments', async () => {
            expect(await miner.payments()).not.toBeNull();
        });
        test('paymentCount', async () => {
            expect(await miner.paymentCount()).not.toBeNull();
        });
        test('paymentsChart', async () => {
            expect(await miner.paymentsChart()).not.toBeNull();
        });
        test('blocks', async () => {
            expect(await miner.blocks()).not.toBeNull();
        });
        test('blockCount', async () => {
            expect(await miner.blockCount()).not.toBeNull();
        });
        test('details', async () => {
            expect(await miner.details()).not.toBeNull();
        });
        test('estimatedDailyRevenue', async () => {
            expect(await miner.estimatedDailyRevenue()).not.toBeNull();
        });
        test('roundShare', async () => {
            expect(await miner.roundShare()).not.toBeNull();
        });
        test('totalPaid', async () => {
            expect(await miner.totalPaid()).not.toBeNull();
        });
        test('totalDonated', async () => {
            expect(await miner.totalDonated()).not.toBeNull();
        });
    });

    describe('Pool Endpoints', () => {
        test('hashrateChart', async () => {
            expect(await Routes.pool.hashrateChart()).not.toBeNull();
        });
        test('workersOnline', async () => {
            expect(await Routes.pool.workersOnline()).not.toBeNull();
        });
        test('averageLuckRoundtime', async () => {
            expect(await Routes.pool.averageLuckRoundtime()).not.toBeNull();
        });
        test('minersOnline', async () => {
            expect(await Routes.pool.minersOnline()).not.toBeNull();
        });
        test('blocks', async () => {
            expect(await Routes.pool.blocks()).not.toBeNull();
        });
        test('blockCount', async () => {
            expect(await Routes.pool.blockCount()).not.toBeNull();
        });
        test('topMiners', async () => {
            expect(await Routes.pool.topMiners()).not.toBeNull();
        });
        test('topDonators', async () => {
            expect(await Routes.pool.topDonators()).not.toBeNull();
        });
        test('hashrate', async () => {
            expect(await Routes.pool.hashrate()).not.toBeNull();
        });
        test('currentLuck', async () => {
            expect(await Routes.pool.currentLuck()).not.toBeNull();
        });
    });

    describe('Worker Endpoints', () => {
        const worker = Utils.worker(ADDRESS, WORKER);

        test('current', async () => {
            expect(await worker.current()).not.toBeNull();
        });
        test('daily', async () => {
            expect(await worker.daily()).not.toBeNull();
        });
        test('stats', async () => {
            expect(await worker.stats()).not.toBeNull();
        });
        test('chart', async () => {
            expect(await worker.chart()).not.toBeNull();
        });
    });
});
