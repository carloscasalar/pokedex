// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' &&
  module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {
  'use strict';

  var urlBase = "/api";
  var authHeader = 'authorization';

  function getHost(url) {
    var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
    return m ? m[1] : null;
  }

  var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
  var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.Tipo
 * @header lbServices.Tipo
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Tipo` model.
 *
 * **Details**
 *
 * Tipo de pokemon
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Tipo",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Tipos/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Tipo#create
             * @methodOf lbServices.Tipo
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tipo` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Tipos",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tipo#createMany
             * @methodOf lbServices.Tipo
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tipo` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Tipos",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tipo#upsert
             * @methodOf lbServices.Tipo
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tipo` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Tipos",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tipo#replaceOrCreate
             * @methodOf lbServices.Tipo
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tipo` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Tipos/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tipo#upsertWithWhere
             * @methodOf lbServices.Tipo
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tipo` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Tipos/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tipo#exists
             * @methodOf lbServices.Tipo
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Tipos/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tipo#findById
             * @methodOf lbServices.Tipo
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tipo` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Tipos/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tipo#replaceById
             * @methodOf lbServices.Tipo
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tipo` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Tipos/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tipo#find
             * @methodOf lbServices.Tipo
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tipo` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Tipos",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tipo#findOne
             * @methodOf lbServices.Tipo
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tipo` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Tipos/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tipo#updateAll
             * @methodOf lbServices.Tipo
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Tipos/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tipo#deleteById
             * @methodOf lbServices.Tipo
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tipo` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Tipos/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tipo#count
             * @methodOf lbServices.Tipo
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Tipos/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tipo#prototype$updateAttributes
             * @methodOf lbServices.Tipo
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tipo id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tipo` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Tipos/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tipo#createChangeStream
             * @methodOf lbServices.Tipo
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Tipos/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Pokemon.tipos.findById() instead.
            "::findById::Pokemon::tipos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Pokemons/:id/tipos/:fk",
              method: "GET",
            },

            // INTERNAL. Use Pokemon.tipos.destroyById() instead.
            "::destroyById::Pokemon::tipos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Pokemons/:id/tipos/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Pokemon.tipos.updateById() instead.
            "::updateById::Pokemon::tipos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Pokemons/:id/tipos/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Pokemon.tipos.link() instead.
            "::link::Pokemon::tipos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Pokemons/:id/tipos/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Pokemon.tipos.unlink() instead.
            "::unlink::Pokemon::tipos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Pokemons/:id/tipos/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Pokemon.tipos.exists() instead.
            "::exists::Pokemon::tipos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Pokemons/:id/tipos/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Pokemon.tipos() instead.
            "::get::Pokemon::tipos": {
              isArray: true,
              url: urlBase + "/Pokemons/:id/tipos",
              method: "GET",
            },

            // INTERNAL. Use Pokemon.tipos.create() instead.
            "::create::Pokemon::tipos": {
              url: urlBase + "/Pokemons/:id/tipos",
              method: "POST",
            },

            // INTERNAL. Use Pokemon.tipos.createMany() instead.
            "::createMany::Pokemon::tipos": {
              isArray: true,
              url: urlBase + "/Pokemons/:id/tipos",
              method: "POST",
            },

            // INTERNAL. Use Pokemon.tipos.destroyAll() instead.
            "::delete::Pokemon::tipos": {
              url: urlBase + "/Pokemons/:id/tipos",
              method: "DELETE",
            },

            // INTERNAL. Use Pokemon.tipos.count() instead.
            "::count::Pokemon::tipos": {
              url: urlBase + "/Pokemons/:id/tipos/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Tipo#patchOrCreate
             * @methodOf lbServices.Tipo
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tipo` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Tipo#updateOrCreate
             * @methodOf lbServices.Tipo
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tipo` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Tipo#patchOrCreateWithWhere
             * @methodOf lbServices.Tipo
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tipo` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Tipo#update
             * @methodOf lbServices.Tipo
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Tipo#destroyById
             * @methodOf lbServices.Tipo
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tipo` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Tipo#removeById
             * @methodOf lbServices.Tipo
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tipo` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Tipo#prototype$patchAttributes
             * @methodOf lbServices.Tipo
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tipo id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tipo` object.)
             * </em>
             */
        R["prototype$patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Tipo#modelName
        * @propertyOf lbServices.Tipo
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Tipo`.
        */
        R.modelName = "Tipo";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Pokemon
 * @header lbServices.Pokemon
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Pokemon` model.
 *
 * **Details**
 *
 * Contiene los detalles de los pokemons del pokédex
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Pokemon",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Pokemons/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Pokemon.evolucion() instead.
            "prototype$__get__evolucion": {
              url: urlBase + "/Pokemons/:id/evolucion",
              method: "GET",
            },

            // INTERNAL. Use Pokemon.evolucion.create() instead.
            "prototype$__create__evolucion": {
              url: urlBase + "/Pokemons/:id/evolucion",
              method: "POST",
            },

            // INTERNAL. Use Pokemon.evolucion.update() instead.
            "prototype$__update__evolucion": {
              url: urlBase + "/Pokemons/:id/evolucion",
              method: "PUT",
            },

            // INTERNAL. Use Pokemon.evolucion.destroy() instead.
            "prototype$__destroy__evolucion": {
              url: urlBase + "/Pokemons/:id/evolucion",
              method: "DELETE",
            },

            // INTERNAL. Use Pokemon.tipos.findById() instead.
            "prototype$__findById__tipos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Pokemons/:id/tipos/:fk",
              method: "GET",
            },

            // INTERNAL. Use Pokemon.tipos.destroyById() instead.
            "prototype$__destroyById__tipos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Pokemons/:id/tipos/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Pokemon.tipos.updateById() instead.
            "prototype$__updateById__tipos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Pokemons/:id/tipos/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Pokemon.tipos.link() instead.
            "prototype$__link__tipos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Pokemons/:id/tipos/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Pokemon.tipos.unlink() instead.
            "prototype$__unlink__tipos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Pokemons/:id/tipos/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Pokemon.tipos.exists() instead.
            "prototype$__exists__tipos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Pokemons/:id/tipos/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Pokemon.tipos() instead.
            "prototype$__get__tipos": {
              isArray: true,
              url: urlBase + "/Pokemons/:id/tipos",
              method: "GET",
            },

            // INTERNAL. Use Pokemon.tipos.create() instead.
            "prototype$__create__tipos": {
              url: urlBase + "/Pokemons/:id/tipos",
              method: "POST",
            },

            // INTERNAL. Use Pokemon.tipos.destroyAll() instead.
            "prototype$__delete__tipos": {
              url: urlBase + "/Pokemons/:id/tipos",
              method: "DELETE",
            },

            // INTERNAL. Use Pokemon.tipos.count() instead.
            "prototype$__count__tipos": {
              url: urlBase + "/Pokemons/:id/tipos/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pokemon#create
             * @methodOf lbServices.Pokemon
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pokemon` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Pokemons",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pokemon#createMany
             * @methodOf lbServices.Pokemon
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pokemon` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Pokemons",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pokemon#upsert
             * @methodOf lbServices.Pokemon
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pokemon` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Pokemons",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pokemon#replaceOrCreate
             * @methodOf lbServices.Pokemon
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pokemon` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Pokemons/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pokemon#upsertWithWhere
             * @methodOf lbServices.Pokemon
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pokemon` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Pokemons/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pokemon#exists
             * @methodOf lbServices.Pokemon
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Pokemons/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pokemon#findById
             * @methodOf lbServices.Pokemon
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pokemon` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Pokemons/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pokemon#replaceById
             * @methodOf lbServices.Pokemon
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pokemon` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Pokemons/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pokemon#find
             * @methodOf lbServices.Pokemon
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pokemon` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Pokemons",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pokemon#findOne
             * @methodOf lbServices.Pokemon
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pokemon` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Pokemons/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pokemon#updateAll
             * @methodOf lbServices.Pokemon
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Pokemons/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pokemon#deleteById
             * @methodOf lbServices.Pokemon
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pokemon` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Pokemons/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pokemon#count
             * @methodOf lbServices.Pokemon
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Pokemons/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pokemon#prototype$updateAttributes
             * @methodOf lbServices.Pokemon
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Pokemon id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pokemon` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Pokemons/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pokemon#createChangeStream
             * @methodOf lbServices.Pokemon
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Pokemons/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Pokemon.evolucion() instead.
            "::get::Pokemon::evolucion": {
              url: urlBase + "/Pokemons/:id/evolucion",
              method: "GET",
            },

            // INTERNAL. Use Pokemon.evolucion.create() instead.
            "::create::Pokemon::evolucion": {
              url: urlBase + "/Pokemons/:id/evolucion",
              method: "POST",
            },

            // INTERNAL. Use Pokemon.evolucion.createMany() instead.
            "::createMany::Pokemon::evolucion": {
              isArray: true,
              url: urlBase + "/Pokemons/:id/evolucion",
              method: "POST",
            },

            // INTERNAL. Use Pokemon.evolucion.update() instead.
            "::update::Pokemon::evolucion": {
              url: urlBase + "/Pokemons/:id/evolucion",
              method: "PUT",
            },

            // INTERNAL. Use Pokemon.evolucion.destroy() instead.
            "::destroy::Pokemon::evolucion": {
              url: urlBase + "/Pokemons/:id/evolucion",
              method: "DELETE",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Pokemon#patchOrCreate
             * @methodOf lbServices.Pokemon
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pokemon` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Pokemon#updateOrCreate
             * @methodOf lbServices.Pokemon
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pokemon` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Pokemon#patchOrCreateWithWhere
             * @methodOf lbServices.Pokemon
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pokemon` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Pokemon#update
             * @methodOf lbServices.Pokemon
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Pokemon#destroyById
             * @methodOf lbServices.Pokemon
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pokemon` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Pokemon#removeById
             * @methodOf lbServices.Pokemon
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pokemon` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Pokemon#prototype$patchAttributes
             * @methodOf lbServices.Pokemon
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Pokemon id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pokemon` object.)
             * </em>
             */
        R["prototype$patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Pokemon#modelName
        * @propertyOf lbServices.Pokemon
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Pokemon`.
        */
        R.modelName = "Pokemon";

    /**
     * @ngdoc object
     * @name lbServices.Pokemon.evolucion
     * @header lbServices.Pokemon.evolucion
     * @object
     * @description
     *
     * The object `Pokemon.evolucion` groups methods
     * manipulating `Pokemon` instances related to `Pokemon`.
     *
     * Call {@link lbServices.Pokemon#evolucion Pokemon.evolucion()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Pokemon#evolucion
             * @methodOf lbServices.Pokemon
             *
             * @description
             *
             * Fetches hasOne relation evolucion.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Pokemon id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pokemon` object.)
             * </em>
             */
        R.evolucion = function() {
          var TargetResource = $injector.get("Pokemon");
          var action = TargetResource["::get::Pokemon::evolucion"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pokemon.evolucion#create
             * @methodOf lbServices.Pokemon.evolucion
             *
             * @description
             *
             * Creates a new instance in evolucion of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Pokemon id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pokemon` object.)
             * </em>
             */
        R.evolucion.create = function() {
          var TargetResource = $injector.get("Pokemon");
          var action = TargetResource["::create::Pokemon::evolucion"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pokemon.evolucion#createMany
             * @methodOf lbServices.Pokemon.evolucion
             *
             * @description
             *
             * Creates a new instance in evolucion of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Pokemon id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pokemon` object.)
             * </em>
             */
        R.evolucion.createMany = function() {
          var TargetResource = $injector.get("Pokemon");
          var action = TargetResource["::createMany::Pokemon::evolucion"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pokemon.evolucion#destroy
             * @methodOf lbServices.Pokemon.evolucion
             *
             * @description
             *
             * Deletes evolucion of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Pokemon id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.evolucion.destroy = function() {
          var TargetResource = $injector.get("Pokemon");
          var action = TargetResource["::destroy::Pokemon::evolucion"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pokemon.evolucion#update
             * @methodOf lbServices.Pokemon.evolucion
             *
             * @description
             *
             * Update evolucion of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Pokemon id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pokemon` object.)
             * </em>
             */
        R.evolucion.update = function() {
          var TargetResource = $injector.get("Pokemon");
          var action = TargetResource["::update::Pokemon::evolucion"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Pokemon.tipos
     * @header lbServices.Pokemon.tipos
     * @object
     * @description
     *
     * The object `Pokemon.tipos` groups methods
     * manipulating `Tipo` instances related to `Pokemon`.
     *
     * Call {@link lbServices.Pokemon#tipos Pokemon.tipos()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Pokemon#tipos
             * @methodOf lbServices.Pokemon
             *
             * @description
             *
             * Queries tipos of Pokemon.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Pokemon id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tipo` object.)
             * </em>
             */
        R.tipos = function() {
          var TargetResource = $injector.get("Tipo");
          var action = TargetResource["::get::Pokemon::tipos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pokemon.tipos#count
             * @methodOf lbServices.Pokemon.tipos
             *
             * @description
             *
             * Counts tipos of Pokemon.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Pokemon id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.tipos.count = function() {
          var TargetResource = $injector.get("Tipo");
          var action = TargetResource["::count::Pokemon::tipos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pokemon.tipos#create
             * @methodOf lbServices.Pokemon.tipos
             *
             * @description
             *
             * Creates a new instance in tipos of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Pokemon id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tipo` object.)
             * </em>
             */
        R.tipos.create = function() {
          var TargetResource = $injector.get("Tipo");
          var action = TargetResource["::create::Pokemon::tipos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pokemon.tipos#createMany
             * @methodOf lbServices.Pokemon.tipos
             *
             * @description
             *
             * Creates a new instance in tipos of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Pokemon id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tipo` object.)
             * </em>
             */
        R.tipos.createMany = function() {
          var TargetResource = $injector.get("Tipo");
          var action = TargetResource["::createMany::Pokemon::tipos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pokemon.tipos#destroyAll
             * @methodOf lbServices.Pokemon.tipos
             *
             * @description
             *
             * Deletes all tipos of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Pokemon id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.tipos.destroyAll = function() {
          var TargetResource = $injector.get("Tipo");
          var action = TargetResource["::delete::Pokemon::tipos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pokemon.tipos#destroyById
             * @methodOf lbServices.Pokemon.tipos
             *
             * @description
             *
             * Delete a related item by id for tipos.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Pokemon id
             *
             *  - `fk` – `{*}` - Foreign key for tipos
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.tipos.destroyById = function() {
          var TargetResource = $injector.get("Tipo");
          var action = TargetResource["::destroyById::Pokemon::tipos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pokemon.tipos#exists
             * @methodOf lbServices.Pokemon.tipos
             *
             * @description
             *
             * Check the existence of tipos relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Pokemon id
             *
             *  - `fk` – `{*}` - Foreign key for tipos
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tipo` object.)
             * </em>
             */
        R.tipos.exists = function() {
          var TargetResource = $injector.get("Tipo");
          var action = TargetResource["::exists::Pokemon::tipos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pokemon.tipos#findById
             * @methodOf lbServices.Pokemon.tipos
             *
             * @description
             *
             * Find a related item by id for tipos.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Pokemon id
             *
             *  - `fk` – `{*}` - Foreign key for tipos
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tipo` object.)
             * </em>
             */
        R.tipos.findById = function() {
          var TargetResource = $injector.get("Tipo");
          var action = TargetResource["::findById::Pokemon::tipos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pokemon.tipos#link
             * @methodOf lbServices.Pokemon.tipos
             *
             * @description
             *
             * Add a related item by id for tipos.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Pokemon id
             *
             *  - `fk` – `{*}` - Foreign key for tipos
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tipo` object.)
             * </em>
             */
        R.tipos.link = function() {
          var TargetResource = $injector.get("Tipo");
          var action = TargetResource["::link::Pokemon::tipos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pokemon.tipos#unlink
             * @methodOf lbServices.Pokemon.tipos
             *
             * @description
             *
             * Remove the tipos relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Pokemon id
             *
             *  - `fk` – `{*}` - Foreign key for tipos
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.tipos.unlink = function() {
          var TargetResource = $injector.get("Tipo");
          var action = TargetResource["::unlink::Pokemon::tipos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pokemon.tipos#updateById
             * @methodOf lbServices.Pokemon.tipos
             *
             * @description
             *
             * Update a related item by id for tipos.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Pokemon id
             *
             *  - `fk` – `{*}` - Foreign key for tipos
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tipo` object.)
             * </em>
             */
        R.tipos.updateById = function() {
          var TargetResource = $injector.get("Tipo");
          var action = TargetResource["::updateById::Pokemon::tipos"];
          return action.apply(R, arguments);
        };


        return R;
      }]);


  module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    };

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    };

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch (err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', ['$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {
          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 }},
              status: 401,
              config: config,
              headers: function() { return undefined; },
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        },
      };
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the header name that is used for sending the authentication token.
     */
    this.getAuthHeader = function() {
      return authHeader;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      var LoopBackResource = function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };

      LoopBackResource.getUrlBase = function() {
        return urlBase;
      };

      LoopBackResource.getAuthHeader = function() {
        return authHeader;
      };

      return LoopBackResource;
    }];
  });
})(window, window.angular);
