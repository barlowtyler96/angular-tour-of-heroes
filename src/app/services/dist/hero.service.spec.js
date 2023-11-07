"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var hero_service_1 = require("./hero.service");
describe('HeroService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(hero_service_1.HeroService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
