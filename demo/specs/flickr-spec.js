// Start the driver with webdriver-manager start
// Run with protractor protractor.config.js

// protractor is for end to end testing
// browser.get will get a url
// element(by.model('')) will get a promised element
// element(by.css('')) will get an element by css
// $('') shorthand
// sendKeys writes in a field
// click clicks a button


describe('flickr search page', function() {

  it('should search photos', function() {
    // browser.get('http://google.co.uk');

    browser.get('http://localhost:8000/');

    // Elements are promises,
    // they don't come into existence until they appear on the page
    var searchField = element(by.model('tag'));
    var searchButton = element(by.css('button'));
    // var searchButton = $('button');
    var images = element.all(by.css('ul img'));

    searchField.sendKeys('cats');
    browser.pause();
    searchButton.click();
    images.then(
      function(els) {
        var length = els.length;
        expect(length).toEqual(20);
      }
    );

    browser.sleep(5000);
  });
});





  // final state
  // it('should search photos', function() {

  //   // Elements are promises,
  //   // they don't come into existence until they appear on the page
  //   var searchField = element(by.model('tag'));
  //   // var searchButton = element(by.css('button'));
  //   var searchButton = $('button');

  //   // We can drive the browser
  //   // browser.get('http://google.com');
  //   browser.get('http://localhost:8000');
  //   searchField.sendKeys('cats');
  //   searchButton.click();

  //   var images = element.all(by.css('ul img'));
  //   images.then(
  //     function(els) {
  //       var length = els.length;
  //       expect(length).toEqual(20);
  //     },
  //     function(err){
  //       console.log(err);
  //     }
  //   );
  // });
// });
