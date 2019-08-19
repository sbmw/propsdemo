import "reflect-metadata";

import { container } from "inversify-props";
import Vue from "vue";

import { App } from "./component/app";
import { Types } from "./constants/types";
import { IMyService } from "./service/iMyService";
import { MyService } from "./service/myService";

export class Main {
    public constructor() {
        container.addSingleton<IMyService>(MyService, Types.MyService);

        new Vue({
            el: "#app",
            render: x => x(App),
        });
    }
}

export default new Main();
