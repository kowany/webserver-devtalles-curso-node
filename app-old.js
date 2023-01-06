

const { rmSync } = require('fs');
const http = require('http')

const server = http.createServer( (req, res)  => {

    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, {'Content-Type': 'application/csv'});

    //     id: 1,
    //     nombre: 'Rosy'
    // }

    // res.write( 'id, nombre\n' );
    // res.write( '1, Rosy\n' );
    // res.write( '2, Vanessa\n' );
    // res.write( '3, Jorgito\n' );
    // res.write( '4, María\n' );
    res.write('Hola Mundo')
    res.end();
})
.listen( 8080 ); 

console.log('Escuchando en puerto 8080');