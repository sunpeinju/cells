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

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _ActivityStreamContext = require('./ActivityStreamContext');

var _ActivityStreamContext2 = _interopRequireDefault(_ActivityStreamContext);

var _ActivitySummaryPointOfView = require('./ActivitySummaryPointOfView');

var _ActivitySummaryPointOfView2 = _interopRequireDefault(_ActivitySummaryPointOfView);

/**
* The ActivityStreamActivitiesRequest model module.
* @module model/ActivityStreamActivitiesRequest
* @version 1.0
*/

var ActivityStreamActivitiesRequest = (function () {
    /**
    * Constructs a new <code>ActivityStreamActivitiesRequest</code>.
    * @alias module:model/ActivityStreamActivitiesRequest
    * @class
    */

    function ActivityStreamActivitiesRequest() {
        _classCallCheck(this, ActivityStreamActivitiesRequest);

        this.Context = undefined;
        this.ContextData = undefined;
        this.StreamFilter = undefined;
        this.BoxName = undefined;
        this.UnreadCountOnly = undefined;
        this.Offset = undefined;
        this.Limit = undefined;
        this.AsDigest = undefined;
        this.PointOfView = undefined;
        this.Language = undefined;
    }

    /**
    * Constructs a <code>ActivityStreamActivitiesRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ActivityStreamActivitiesRequest} obj Optional instance to populate.
    * @return {module:model/ActivityStreamActivitiesRequest} The populated <code>ActivityStreamActivitiesRequest</code> instance.
    */

    ActivityStreamActivitiesRequest.constructFromObject = function constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActivityStreamActivitiesRequest();

            if (data.hasOwnProperty('Context')) {
                obj['Context'] = _ActivityStreamContext2['default'].constructFromObject(data['Context']);
            }
            if (data.hasOwnProperty('ContextData')) {
                obj['ContextData'] = _ApiClient2['default'].convertToType(data['ContextData'], 'String');
            }
            if (data.hasOwnProperty('StreamFilter')) {
                obj['StreamFilter'] = _ApiClient2['default'].convertToType(data['StreamFilter'], 'String');
            }
            if (data.hasOwnProperty('BoxName')) {
                obj['BoxName'] = _ApiClient2['default'].convertToType(data['BoxName'], 'String');
            }
            if (data.hasOwnProperty('UnreadCountOnly')) {
                obj['UnreadCountOnly'] = _ApiClient2['default'].convertToType(data['UnreadCountOnly'], 'Boolean');
            }
            if (data.hasOwnProperty('Offset')) {
                obj['Offset'] = _ApiClient2['default'].convertToType(data['Offset'], 'String');
            }
            if (data.hasOwnProperty('Limit')) {
                obj['Limit'] = _ApiClient2['default'].convertToType(data['Limit'], 'String');
            }
            if (data.hasOwnProperty('AsDigest')) {
                obj['AsDigest'] = _ApiClient2['default'].convertToType(data['AsDigest'], 'Boolean');
            }
            if (data.hasOwnProperty('PointOfView')) {
                obj['PointOfView'] = _ActivitySummaryPointOfView2['default'].constructFromObject(data['PointOfView']);
            }
            if (data.hasOwnProperty('Language')) {
                obj['Language'] = _ApiClient2['default'].convertToType(data['Language'], 'String');
            }
        }
        return obj;
    };

    /**
    * @member {module:model/ActivityStreamContext} Context
    */
    return ActivityStreamActivitiesRequest;
})();

exports['default'] = ActivityStreamActivitiesRequest;
module.exports = exports['default'];

/**
* @member {String} ContextData
*/

/**
* @member {String} StreamFilter
*/

/**
* @member {String} BoxName
*/

/**
* @member {Boolean} UnreadCountOnly
*/

/**
* @member {String} Offset
*/

/**
* @member {String} Limit
*/

/**
* @member {Boolean} AsDigest
*/

/**
* @member {module:model/ActivitySummaryPointOfView} PointOfView
*/

/**
* Provide language information for building the human-readable strings.
* @member {String} Language
*/
