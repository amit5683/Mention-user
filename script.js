(function() {
  "use strict";
  
  angular.module("myApp", ['ngTable'])
    .controller("myCtrl", myCtrl);
  
  myCtrl.$inject = ["NgTableParams"];

  function myCtrl(NgTableParams) {
    let self = this;
    var data = [
        {firstName: "abc", lastName: "jdf", age: 21},
        {firstName: "dff", lastName: "fgg", age: 27},
        {firstName: "dwer", lastName: "jerfc", age: 26},
        {firstName: "ahyf", lastName: "yhftg", age: 29},
        {firstName: "dfed", lastName: "ekrr", age: 43},
        {firstName: "erfr", lastName: "toiy", age: 31},
        {firstName: "utee", lastName: "rtfds", age: 45},
        {firstName: "uyere", lastName: "atrf", age: 34},
        {firstName: "jkfe", lastName: "rkhg", age: 43},
        {firstName: "lejr", lastName: "ertef", age: 13},
        {firstName: "kebrj", lastName: "kwehr", age: 41},
        {firstName: "jehrr", lastName: "efrer", age: 34}
    ];

    self.tableParams = new NgTableParams({page:1,count:5}, {dataset: data});
  }
})();