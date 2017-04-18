angular.module('twoTopApp.form', [])

.controller('formController', function ($scope, Table) {
  $scope.hello = 'hello';
  Table.get('*', (req, res) => {
    res.sendFile(`${__dirname}/twoTop/index.html`);
  });

  Table.post('/reservation', (req, res) => {
    db.collection('reservations').save(req.body, (err, result) => {
      if (err) {
        return console.log(err);
      }
      console.log('saved to data base, BEEP BEEP');
      res.redirect('/');
    });
  });
});
