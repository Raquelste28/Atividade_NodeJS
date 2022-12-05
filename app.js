const express = require('express');

const app = express();

app.get('/',
    (req, res) => {
        res.send('Não fui o que os outros foram,' + 'não vi o que os outros viram.' + ' Mas por isso, o que amei,amei sozinho.' + ' -Edgar Allan Poe')
        res.end()
    })
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Serverstartedonport${PORT}`));