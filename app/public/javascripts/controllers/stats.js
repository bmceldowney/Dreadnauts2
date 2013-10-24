angular.module('controllers', ['ngResource']);

angular.module('controllers').controller('StatsCtrl', ['$scope', 'dataService', 'filterService', function ($scope, dataService, filterService) {
    $scope.selectedMatchup = null;
    $scope.filters = filterService.filterNames;
    
    $scope.$on('dataLoaded', function(){
        $scope.teams = dataService.teams;
        $scope.selectedTeam = $scope.teams[0];
        $scope.winLossData = dataService.getMatchData($scope.selectedTeam);
        $scope.coachData = dataService.getCoachData();

        setTotals();
    })

    $scope.$watch('selectedTeam', function (newValue) {
        if (!newValue) return;

        $scope.winLossData = dataService.getMatchData(newValue);

        setTotals();
    })

    $scope.filterChanged = function (filterName) {
        switch (filterName) {
            case 'all':
                break;
        }
    }

    function setTotals() {
        $scope.winTotal = 0;
        $scope.lossTotal = 0;
        $scope.drawTotal = 0;
        $scope.totalAvgWinScore = 0;
        $scope.totalAvgLossScore = 0;

        $scope.winLossData.forEach(function (item) {
            $scope.winTotal += item.data.won.length;
            $scope.lossTotal += item.data.lost.length;
            $scope.drawTotal += item.data.draw.length;
        });

        $scope.matchTotal = $scope.winTotal + $scope.lossTotal + $scope.drawTotal;
        if (!$scope.matchTotal) return;

        var matchupsWithWins = $scope.winLossData.filter(function (item) { return item.data.avgWinScore; });
        if (matchupsWithWins.length) {
            $scope.totalAvgWinScore = Math.floor((matchupsWithWins.map(function (item) { return item.data.avgWinScore; })
                .reduce(function (prev, next) { return Number(prev) + Number(next) }) / matchupsWithWins.length) * 1000) / 1000;
        }

        var matchupsWithLosses = $scope.winLossData.filter(function (item) { return item.data.avgLossScore; });
        if (matchupsWithLosses.length) {
            $scope.totalAvgLossScore = Math.floor((matchupsWithLosses.map(function (item) { return item.data.avgLossScore; })
                .reduce(function (prev, next) { return Number(prev) + Number(next) }) / matchupsWithLosses.length) * 1000) / 1000;
        }

        $scope.totalRecordOptions = { width: 150 };
        $scope.totalRecordData = { name: 'win record' };
        $scope.totalRecordData.data = [
            { label: 'wins', value: $scope.winTotal },
            { label: 'losses', value: $scope.lossTotal },
            { label: 'draws', value: $scope.drawTotal }
        ]
    }
}]);

angular.module('controllers').controller('TeamEditCtrl',['$scope', '$resource', function($scope, $resource){
    var Team = $resource('api/team/:teamId', {teamId: '@id'});
    $scope.team = Team.get({teamId: 12});
    
}])

