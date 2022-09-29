interface Location {
    start: {
        offset: number;
        line: number;
        column: number;
    };
    end: {
        offset: number;
        line: number;
        column: number;
    };
}
export declare abstract class BaseDinoQLObject {
    location: Location;
}
export {};
