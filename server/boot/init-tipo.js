'use strict';

var tipos = require('./init/tipos.json');
/**
 * Inicializa la colección de tipos de pokemons
 */
module.exports = function initTipo(app, cb) {
  /*
   * The `app` object provides access to a variety of LoopBack resources such as
   * models (e.g. `app.models.YourModelName`) or data sources (e.g.
   * `app.datasources.YourDataSource`). See
   * http://docs.strongloop.com/display/public/LB/Working+with+LoopBack+objects
   * for more info.
   */

  var ds = app.dataSources.mongo;

  // Antes de inicializar es necesario verificar que está abierta la conexión con la base de datos
  // para evitar este problema: https://github.com/strongloop/loopback/issues/1186
  if (ds.connected) {
    _inicializarTipos(app.models.Tipo, cb);
  } else {
    ds.once('connected', function() {
      _inicializarTipos(app.models.Tipo, cb);
    });
  }
};

function _inicializarTipos(Tipo, cb) {
  var promesasInicializacion = tipos.map(function(tipo) {
    return Tipo.findOrCreate({where: {id: tipo.id}}, tipo);
  });

  Promise.all(promesasInicializacion)
  .then(function() {
    cb();
  })
  .catch(function(err) {
    console.error('Error inicializando tipos de pokemon', err);
    cb(err);
  });
}
