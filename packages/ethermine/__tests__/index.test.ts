import { Routes, Utils } from '../';

const ADDRESS = '0x4bd46f005099d400768dc057c96a60180e891cf9';
const WORKER = '051';

/*

TODO: write better tests
i can't be bothered to have specifics.

*/

describe('ETHERMINE TESTS', () => {
    describe('Utils/Routes', () => {
        describe('Miner Endpoints', () => {
            const miner = Utils.miner(ADDRESS);

            /* Test('dashboard', async () => {
                expect(await miner.dashboard()).not.toBeNull();
            }); */
            test('history', async () => {
                expect(await miner.history()).not.toBeNull();
            });
            test('payouts', async () => {
                expect(await miner.payouts()).not.toBeNull();
            });
            test('rounds', async () => {
                expect(await miner.rounds()).not.toBeNull();
            });
            test('settings', async () => {
                expect(await miner.settings()).not.toBeNull();
            });
            test('statistics', async () => {
                expect(await miner.statistics()).not.toBeNull();
            });
        });

        describe('Pool Endpoints', () => {
            test('statistics', async () => {
                expect(await Routes.pool.statistics()).not.toBeNull();
            });
            test('history', async () => {
                expect(await Routes.pool.history()).not.toBeNull();
            });
            test('networkStatistics', async () => {
                expect(await Routes.pool.networkStatistics()).not.toBeNull();
            });
            test('serverHashrateStatistics', async () => {
                expect(await Routes.pool.serverHashrateStatistics()).not.toBeNull();
            });
        });

        describe('Worker Endpoints', () => {
            const worker = Utils.worker(ADDRESS, WORKER);

            test('allStatistics', async () => {
                expect(await worker.allStatistics()).not.toBeNull();
            });
            test('history', async () => {
                expect(await worker.history()).not.toBeNull();
            });
            test('statistics', async () => {
                expect(await worker.statistics()).not.toBeNull();
            });
            /* Test('monitoring', async () => {
                expect(await worker.monitoring()).not.toBeNull();
            }); */
        });
    });
});
