"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HeroService = void 0;
var core_1 = require("@angular/core");
var mock_heroes_1 = require("../mock-heroes");
var rxjs_1 = require("rxjs");
var HeroService = /** @class */ (function () {
    function HeroService(messageService) {
        this.messageService = messageService;
    }
    HeroService.prototype.getHeroes = function () {
        var heroes = rxjs_1.of(mock_heroes_1.HEROES);
        this.messageService.add('HeroService: fetched heroes');
        return heroes;
    };
    HeroService.prototype.getHero = function (id) {
        var hero = mock_heroes_1.HEROES.find(function (h) { return h.id === id; });
        this.messageService.add("HeroService: fetched hero id=" + id);
        return rxjs_1.of(hero);
    };
    HeroService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
