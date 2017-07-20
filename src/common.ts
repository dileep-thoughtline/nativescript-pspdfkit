export class Common {

}

export class Guid {

    static next() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}

export enum PageMode {
    SINGLE = 0,
    DOUBLE = 1,
    AUTOMATIC = 2
}