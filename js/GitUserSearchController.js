githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {

  // var access_token = '81c45763ea864067f79f604c773ea9dbd849e756'
  var self = this;
  var searchResource = $resource('https://api.github.com/search/users');
  

  self.doSearch = function() {
    self.searchResult = searchResource.get(
      { q: self.searchTerm }
    );
  };

}]);

