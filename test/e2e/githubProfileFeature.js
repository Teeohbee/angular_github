describe('GitHub profile finder', function() {

  var searchBox = element(by.model('searchCtrl.searchTerm'));
  var searchButton = element(by.className('btn'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  })

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Github user search');
  });

  it('finds profiles', function() {
    searchBox.sendKeys('spike01');
    searchButton.click();
    expect(element(by.binding('user.login')).getText()).toEqual('spike01');
  });

  it('finds profiles in a list', function() {
    searchBox.sendKeys('spike01');
    searchButton.click();
    var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
    expect(profiles.get(0).getText()).toEqual('spike'); //This won't pass!
  });

  it('finds the last Spike', function() { //this is a silly test, but roll with it
  searchBox.sendKeys('spike');
  searchButton.click();

  var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
  expect(profiles.last().getText()).toEqual('SpikeTheMaster'); //This is, again, wrong.
});
});
