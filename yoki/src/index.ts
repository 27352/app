import { Yoki } from './datalayer/Yoki';
export { Yoki } from './datalayer/Yoki';

window && ((<any>window).yoki = new Yoki());
