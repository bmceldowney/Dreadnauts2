angular.module('controllers', []);

angular.module('controllers').controller('StatsCtrl', ['$scope', 'dataService', 'filterService', function ($scope, dataService, filterService) {

    dataService.getData(dataRetrieved);

    function dataRetrieved() {
        $scope.teams = dataService.teams;
        $scope.selectedTeam = $scope.teams[0];
        $scope.winLossData = dataService.getMatchData($scope.selectedTeam);
        $scope.coachData = dataService.getCoachData();
        $scope.selectedMatchup = null;

        $scope.filters = filterService.filterNames;

        setTotals();

        $scope.filterChanged = function (filterName) {
            switch (filterName) {
                case 'all':
                    break;

            }
        }

        $scope.$watch('selectedTeam', function (newValue) {
            if (!newValue) return;

            $scope.winLossData = dataService.getMatchData(newValue);

            setTotals();
        })

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
    }
}]);

angular.module('controllers')
    .controller('customizeCtrl', ['$scope', '$http', 'staticData', '$document', 
        function ($scope, $http, staticData, $document) {
            var teamId = $document[0].URL.split('/').pop();
            var url = '/teams/' + teamId
            
            $http({method: 'GET', url: url, headers: {'Accept': 'application/json'}})
                .then(function(response){
                    $scope.team = response.data;
                    $scope.players = response.data.players;
                    $scope.cost = calculateCredits($scope.team);
                });
                
            function calculateCredits (team) {
                var retval = 0;
                
                retval += team.dice * 6;
                retval += team.cards * 10;
                
                team.players.forEach(function(player){
                    retval += player.cost;
                })
                
                return retval;
            }
        }]);

angular.module('filters', ['services']);

angular.module('filters').filter('constant', function (staticData) {
    return function (value) {
        return value ? staticData.Constants[value] : '';
    }
});

angular.module('filters').filter('enum', function (staticData) {
    return function (value) {
        return value ? staticData.Enums[value] : '';
    }
});
