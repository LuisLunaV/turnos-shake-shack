class Orden{

    constructor(){
        this.suscriptores=[];
    }
    suscribe( observador ){
        this.suscriptores.push( observador );
    }
    notificarCambio( data ){
        this.suscriptores.forEach( suscriptor =>{
            suscriptor.refresh( data )
        });
    }
}

class Observador{
  constructor( funcion ){
    this.funcion = funcion;
  }
  refresh( data ){
    this.funcion(data)
  }
}
const orden = new Orden();

module.exports={
    Observador,
    orden
}