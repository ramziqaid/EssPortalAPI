var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelativeTimePipe } from './relative-time.pipe';
import { ExcerptPipe } from "./excerpt.pipe";
import { GetValueByKeyPipe } from './get-value-by-key.pipe';
const pipes = [
    RelativeTimePipe,
    ExcerptPipe,
    GetValueByKeyPipe
];
let SharedPipesModule = class SharedPipesModule {
};
SharedPipesModule = __decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        declarations: pipes,
        exports: pipes
    })
], SharedPipesModule);
export { SharedPipesModule };
//# sourceMappingURL=shared-pipes.module.js.map