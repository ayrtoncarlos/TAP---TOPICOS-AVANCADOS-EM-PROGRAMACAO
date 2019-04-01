const fs = require('fs');
const archiver = require('archiver');
const extract = require('extract-zip');

var funcao = process.argv[2];
var diretorio = process.argv[3];
var destino = process.argv[4];

if(process.argv.length > 5){

    console.log("Número de argumentos excedeu a quantidade limite.");
    console.log("Exemplos:");
    console.log("\tCompactar --> NODE .\\INDEX.JS COMPACTAR DIRETORIOPARACOMPACTAR DIRETORIOPARAGUARDAROARQUIVO.");
    console.log("\tDescompactar --> NODE .\\INDEX.JS DESCOMPACTAR DIRETORIODOARQUIVO DIRETORIOPARADESCOMPACTAR.");
    process.exit(-1);
}

if(funcao == 'compactar'){

    var saida = fs.createWriteStream(destino);

    saida.on('close', () => {

        console.log('Arquivo compactado com sucesso.')
        console.log(compactador.pointer() + ' bytes totais.');
    });

    var compactador = archiver('zip', { zlib: {level: 9}});

    compactador.pipe(saida);

    compactador.directory(diretorio, false);

    compactador.finalize();
}
else if(funcao == 'descompactar'){

    extract(diretorio, {dir: destino}, function(err) {
        
        if(err){
            console.log(err);
        }
        console.log('Arquivo extraido com sucesso.');
    });
}