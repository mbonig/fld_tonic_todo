describe('App', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('should have <footer>', function () {
    expect(element(by.css('my-app footer')).getText()).toEqual("Webpack Angular 2 Starter");
  });

});
