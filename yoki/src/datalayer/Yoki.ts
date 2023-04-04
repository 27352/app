import { IDictionary } from '../interface/IDictionary';
import { ISignals } from '../interface/ISignals';
import { ITimelineEntry } from '../interface/ITimelineEntry';

export class Yoki {

    signal: ISignals = {};
    data: IDictionary = {};
    timeline: ITimelineEntry[] = [];

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
        const eventOrder = this.timeline.length + 1;

        // Record the event on the timeline
        this.timeline.push({
            eventData: eventData,
            eventName: eventName,
            eventOrder: eventOrder,
            timestamp: (new Date()).getTime()
        });

        // Update the data snapshot
        Object.keys(eventData).forEach((key) => {
            const value = eventData[key];

            if (this.isDefined(value)) {
                this.data[key] = value;
            }
        });

        this.emit('update', eventData);
        this.emit(eventName, eventData);
    }

    snapshot(): IDictionary {
        return this.data;
    }

    clear(): void {
        this.data = {};
        this.timeline = [];
    }

    isDefined(s: string): boolean {
        return !(typeof s === 'undefined' || s === 'undefined' || s === null || s === '');
    }

}
