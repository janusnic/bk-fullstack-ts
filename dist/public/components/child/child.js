/// <reference path="../../../../typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import deps
//import 'zone.js';
//import 'reflect-metadata';
var angular2_1 = require('angular2/angular2');
//import { API } from '../../services/api';
// Annotation section
var Child = (function () {
    function Child() {
        this.name = 'YAY!!!!!';
        this.books = [];
        /*    api.getBooks()
            .then(r => r.json())
            .then(r => {
               this.books = r;
               console.log(this.books);
            });
            */
    }
    Child = __decorate([
        angular2_1.Component({
            selector: 'child' //,
        }),
        angular2_1.View({
            // this is a hack to bust the cache. Is there a better way to do this?
            templateUrl: 'components/child/child.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Child);
    return Child;
})();
exports.Child = Child;
