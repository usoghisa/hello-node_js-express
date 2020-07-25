var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('<!DOCTYPE html>
<html>
<body>

<?php
echo "My first PHP script!";
?>

</body>
</html>');
});

app.listen(process.env.PORT || 3000);
