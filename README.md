mongo and crypt password:

node
var bcrypt = require('bcrypt');
bcrypt.hashSync('12345', 10);


mongo
use bookworm
db.users.insert({ email: 'ya@ya.ru', passwordHash: '' })
