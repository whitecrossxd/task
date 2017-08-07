var express = require ('express');

var app = express();

app.use(express.static('public'));

app.get('/calc', function (req, res) {
  let figure = JSON.parse(req.query.figure);

  if (figure.name === "Box") {
  	res.json({area: (figure.length*figure.width + figure.width*figure.height + figure.height*figure.length)*2, volume: figure.length*figure.width*figure.height});
  } else if (figure.name === 'Cylinder') {
  	res.json({area: 2*Math.PI*figure.radius + (figure.radius + figure.height), volume: Math.PI*Math.pow(figure.radius,2)*figure.radius});

  } else if (figure.name === 'Sphere') {
  	res.json({area: 4*Math.PI*Math.pow(figure.radius,2), volume: 4/3*Math.PI*Math.pow(figure.radius,3)});

  } else {
  	res.status(500).json({error: 'Error! No such figure suka!'});
  }
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});