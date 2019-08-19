import { injectable } from "inversify-props";

import { IMyService } from "./iMyService";

@injectable()
export class MyService implements IMyService {
    public getGreeting(): string {
        return "Hello From Service!";
    }
}
