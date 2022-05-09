import { IDataEvent } from '../interface/IDataEvent';
import { IDictionary } from '../interface/IDictionary';
import { IListeners } from '../interface/IListeners';

export class Yoki {

    store: IDataEvent[] = [];
    signal: IListeners = {};
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

    off(fn: Function): void {
        if (typeof fn !== 'function') {
            return;
        }

        const signal = this.signal;

        Object.keys(signal).forEach(key => {
            this.signal[key] = signal[key].filter(item => item !== fn);
        });
    }

    emit(name: string, data: IDictionary): void {
        const listeners = this.signal[name] || [];

        listeners.forEach(fn => {
            fn.call(null, data);
        });
    }

    update(eventName: string, eventData: IDictionary): void {
        const payload: any = this.data || {};
        eventData.timestamp = (new Date()).getTime();

        Object.keys(eventData).forEach((key) => {
            const value = eventData[key];

            if (this.isDefined(value)) {
                payload[key] = value;
            }
        });

        this.store.push({
            name: eventName,
            data: eventData
        });

        this.data = payload;
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
