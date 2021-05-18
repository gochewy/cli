import { Answers } from "../files/constants";
export declare const installMinimalProject: (directory: string) => void;
export declare const addSubtrees: (directory: string, module: string, url: string) => void;
export declare const installAllApps: (directory: string) => Promise<void>;
export declare const installCustomApps: (directory: string, answers: Answers) => Promise<void>;