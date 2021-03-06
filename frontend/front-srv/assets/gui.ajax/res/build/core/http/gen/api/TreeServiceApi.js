/**
 * Pydio Cells Rest API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ApiClient = require("../ApiClient");

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _modelRestBulkMetaResponse = require('../model/RestBulkMetaResponse');

var _modelRestBulkMetaResponse2 = _interopRequireDefault(_modelRestBulkMetaResponse);

var _modelRestCreateNodesRequest = require('../model/RestCreateNodesRequest');

var _modelRestCreateNodesRequest2 = _interopRequireDefault(_modelRestCreateNodesRequest);

var _modelRestCreateSelectionRequest = require('../model/RestCreateSelectionRequest');

var _modelRestCreateSelectionRequest2 = _interopRequireDefault(_modelRestCreateSelectionRequest);

var _modelRestCreateSelectionResponse = require('../model/RestCreateSelectionResponse');

var _modelRestCreateSelectionResponse2 = _interopRequireDefault(_modelRestCreateSelectionResponse);

var _modelRestDeleteNodesRequest = require('../model/RestDeleteNodesRequest');

var _modelRestDeleteNodesRequest2 = _interopRequireDefault(_modelRestDeleteNodesRequest);

var _modelRestDeleteNodesResponse = require('../model/RestDeleteNodesResponse');

var _modelRestDeleteNodesResponse2 = _interopRequireDefault(_modelRestDeleteNodesResponse);

var _modelRestGetBulkMetaRequest = require('../model/RestGetBulkMetaRequest');

var _modelRestGetBulkMetaRequest2 = _interopRequireDefault(_modelRestGetBulkMetaRequest);

var _modelRestHeadNodeResponse = require('../model/RestHeadNodeResponse');

var _modelRestHeadNodeResponse2 = _interopRequireDefault(_modelRestHeadNodeResponse);

var _modelRestNodesCollection = require('../model/RestNodesCollection');

var _modelRestNodesCollection2 = _interopRequireDefault(_modelRestNodesCollection);

var _modelRestRestoreNodesRequest = require('../model/RestRestoreNodesRequest');

var _modelRestRestoreNodesRequest2 = _interopRequireDefault(_modelRestRestoreNodesRequest);

var _modelRestRestoreNodesResponse = require('../model/RestRestoreNodesResponse');

var _modelRestRestoreNodesResponse2 = _interopRequireDefault(_modelRestRestoreNodesResponse);

/**
* TreeService service.
* @module api/TreeServiceApi
* @version 1.0
*/

var TreeServiceApi = (function () {

  /**
  * Constructs a new TreeServiceApi. 
  * @alias module:api/TreeServiceApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */

  function TreeServiceApi(apiClient) {
    _classCallCheck(this, TreeServiceApi);

    this.apiClient = apiClient || _ApiClient2['default'].instance;
  }

  /**
   * List meta for a list of nodes, or a full directory using /path/_* syntax
   * @param {module:model/RestGetBulkMetaRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestBulkMetaResponse} and HTTP response
   */

  TreeServiceApi.prototype.bulkStatNodesWithHttpInfo = function bulkStatNodesWithHttpInfo(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling bulkStatNodes");
    }

    var pathParams = {};
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = [];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = _modelRestBulkMetaResponse2['default'];

    return this.apiClient.callApi('/tree/stats', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * List meta for a list of nodes, or a full directory using /path/_* syntax
   * @param {module:model/RestGetBulkMetaRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestBulkMetaResponse}
   */

  TreeServiceApi.prototype.bulkStatNodes = function bulkStatNodes(body) {
    return this.bulkStatNodesWithHttpInfo(body).then(function (response_and_data) {
      return response_and_data.data;
    });
  };

  /**
   * Create dirs or empty files inside the tree
   * @param {module:model/RestCreateNodesRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestNodesCollection} and HTTP response
   */

  TreeServiceApi.prototype.createNodesWithHttpInfo = function createNodesWithHttpInfo(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling createNodes");
    }

    var pathParams = {};
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = [];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = _modelRestNodesCollection2['default'];

    return this.apiClient.callApi('/tree/create', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * Create dirs or empty files inside the tree
   * @param {module:model/RestCreateNodesRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestNodesCollection}
   */

  TreeServiceApi.prototype.createNodes = function createNodes(body) {
    return this.createNodesWithHttpInfo(body).then(function (response_and_data) {
      return response_and_data.data;
    });
  };

  /**
   * Create a temporary selection for further action (namely download)
   * @param {module:model/RestCreateSelectionRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestCreateSelectionResponse} and HTTP response
   */

  TreeServiceApi.prototype.createSelectionWithHttpInfo = function createSelectionWithHttpInfo(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling createSelection");
    }

    var pathParams = {};
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = [];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = _modelRestCreateSelectionResponse2['default'];

    return this.apiClient.callApi('/tree/selection', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * Create a temporary selection for further action (namely download)
   * @param {module:model/RestCreateSelectionRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestCreateSelectionResponse}
   */

  TreeServiceApi.prototype.createSelection = function createSelection(body) {
    return this.createSelectionWithHttpInfo(body).then(function (response_and_data) {
      return response_and_data.data;
    });
  };

  /**
   * Handle nodes deletion
   * @param {module:model/RestDeleteNodesRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestDeleteNodesResponse} and HTTP response
   */

  TreeServiceApi.prototype.deleteNodesWithHttpInfo = function deleteNodesWithHttpInfo(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling deleteNodes");
    }

    var pathParams = {};
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = [];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = _modelRestDeleteNodesResponse2['default'];

    return this.apiClient.callApi('/tree/delete', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * Handle nodes deletion
   * @param {module:model/RestDeleteNodesRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestDeleteNodesResponse}
   */

  TreeServiceApi.prototype.deleteNodes = function deleteNodes(body) {
    return this.deleteNodesWithHttpInfo(body).then(function (response_and_data) {
      return response_and_data.data;
    });
  };

  /**
   * Return node meta without the node content itself
   * @param {String} node 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestHeadNodeResponse} and HTTP response
   */

  TreeServiceApi.prototype.headNodeWithHttpInfo = function headNodeWithHttpInfo(node) {
    var postBody = null;

    // verify the required parameter 'node' is set
    if (node === undefined || node === null) {
      throw new Error("Missing the required parameter 'node' when calling headNode");
    }

    var pathParams = {
      'Node': node
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = [];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = _modelRestHeadNodeResponse2['default'];

    return this.apiClient.callApi('/tree/stat/{Node}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * Return node meta without the node content itself
   * @param {String} node 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestHeadNodeResponse}
   */

  TreeServiceApi.prototype.headNode = function headNode(node) {
    return this.headNodeWithHttpInfo(node).then(function (response_and_data) {
      return response_and_data.data;
    });
  };

  /**
   * Handle nodes restoration from recycle bin
   * @param {module:model/RestRestoreNodesRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestRestoreNodesResponse} and HTTP response
   */

  TreeServiceApi.prototype.restoreNodesWithHttpInfo = function restoreNodesWithHttpInfo(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling restoreNodes");
    }

    var pathParams = {};
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = [];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = _modelRestRestoreNodesResponse2['default'];

    return this.apiClient.callApi('/tree/restore', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * Handle nodes restoration from recycle bin
   * @param {module:model/RestRestoreNodesRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestRestoreNodesResponse}
   */

  TreeServiceApi.prototype.restoreNodes = function restoreNodes(body) {
    return this.restoreNodesWithHttpInfo(body).then(function (response_and_data) {
      return response_and_data.data;
    });
  };

  return TreeServiceApi;
})();

exports['default'] = TreeServiceApi;
module.exports = exports['default'];
