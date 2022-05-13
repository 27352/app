import { IDictionary } from '../interface/IDictionary';
import { ISignals } from '../interface/ISignals';

export class Yoki {

    store: IDictionary[] = [];
    signal: ISignals = {};
    data: IDictionary = {};

    on(name: string, fn: Function): void {
        if (typeof fn !== 'function') {
            return;
        }

        if (!this.signal[name]) {
            this.signal[name] = [];
        }

        this.signal[name].push(fn);
    }

    emit(name: string, data: IDictionary): void {
        const signals = this.signal[name] || [];

        signals.forEach(fn => {
            fn.call(null, data);
        });
    }

    update(eventName: string, eventData: IDictionary): void {
        eventData.eventName = eventName;
        eventData.timestamp = (new Date()).getTime();

        Object.keys(eventData).forEach((key) => {
            const value = eventData[key];

            if (this.isDefined(value)) {
                this.data[key] = value;
            }
        });

        this.store.push(eventData);

        this.emit('update', eventData);
        this.emit(eventName, eventData);
    }

    snapshot(): IDictionary {
        return this.data;
    }

    clear(): void {
        this.data = {};
        this.store = [];
    }

    isDefined(s: string): boolean {
        return !(typeof s === 'undefined' || s === 'undefined' || s === null || s === '');
    }

}
