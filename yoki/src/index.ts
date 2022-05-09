import { Yoki } from './datalayer/Yoki';
export { Yoki } from './datalayer/Yoki';

window && ((<any>window).yoki = new Yoki());

// ((w:any) => {
//     w.ts = w.ts || {};
//     w.ts.Yoki = Yoki;
// })(window || {});
