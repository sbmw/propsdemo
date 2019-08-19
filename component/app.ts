import { Inject } from "inversify-props";
import Vue from "vue";
import { Component } from "vue-property-decorator";

import { Types } from "../constants/types";
import { IMyService } from "../service/iMyService";
import template from "./app.htm";

@Component({ template })
export class App extends Vue {
    @Inject(Types.MyService)
    private myService: IMyService;
}
