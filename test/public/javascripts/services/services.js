describe('dataService', function(){
    var httpBackend, $dataService;

    beforeEach(function(){
        module('app');
        inject(function($httpBackend){
            httpBackend = $httpBackend;
            httpBackend.when('GET', 'api/stats/games').respond(window.mockData);
        });
        inject(function(dataService){
            $dataService = dataService;
            httpBackend.flush();
        });
     });
    
    it('should get data from the server api', function(){
        var ffData = $dataService.getMatchData('forgefathers');
        var corpMatchup = ffData.filter(function(matchup){ return matchup.team === 'corporation' })[0];

        corpMatchup.data.total.should.have.length(1);
    });
    
    it('should get data indexed by coach', function(){
        var coachData = $dataService.getCoachData();
        
        coachData.coach2.matches.should.have.length(3);
    });

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });    
});
