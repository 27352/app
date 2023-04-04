import { Yoki } from '../src/datalayer/Yoki';

describe('Yoki Tests', () => {

    let yoki: Yoki = new Yoki();

    const data: any = {
        id: 564938
    };

    it('the signal should be created', () => {
        yoki.on('update', () => {});
        expect(yoki.signal.update).toBeDefined();
    });

    it('the signal to be emitted', () => {
        const mock: any = {
            signal: () => {}
        };

        const spy = jest.spyOn(mock, 'signal');

        yoki.on('testEvent', mock.signal);
        yoki.update('testEvent', data);

        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(data);
    });

    it('update() should propagate the data', () => {
        yoki.update('testEvent', data);
        expect(yoki.data.id).toEqual(data.id);
    });

    // it('update should create the event info', () => {
    //     yoki.update('testEvent', data);
    //     expect(yoki.data.timestamp).toBeDefined();
    //     expect(yoki.data.eventName).toEqual('testEvent');
    // });

    it('snapshopt() should return the data', () => {
        yoki.update('testEvent', data);
        expect(yoki.snapshot().id).toEqual(data.id);
    });

});
