import { IDictionary } from './IDictionary';

export interface ITimelineEntry {
    eventData: IDictionary;
    eventName: string;
    eventOrder: number;
    timestamp: number;
}
