describe('TeamEditCtrl', function(){
    var app, httpBackend, control, scope;

    beforeEach(function(){
        app = module('app');
        inject(function($rootScope, $httpBackend, $controller){
            httpBackend = $httpBackend;
            httpBackend.when('GET', 'api/team/12').respond('{ "test": "value" }');
            scope = $rootScope.$new();
            control = $controller('TeamEditCtrl', {$scope: scope});
        });
    });
    
    it('should get a team', function(){
        httpBackend.flush();
        scope.team.should.have.property('test', 'value');
    });
    

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });    
});
