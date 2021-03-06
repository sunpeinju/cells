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

/**
* The RestFrontEnrollAuthRequest model module.
* @module model/RestFrontEnrollAuthRequest
* @version 1.0
*/

var RestFrontEnrollAuthRequest = (function () {
    /**
    * Constructs a new <code>RestFrontEnrollAuthRequest</code>.
    * @alias module:model/RestFrontEnrollAuthRequest
    * @class
    */

    function RestFrontEnrollAuthRequest() {
        _classCallCheck(this, RestFrontEnrollAuthRequest);

        this.EnrollType = undefined;
        this.EnrollInfo = undefined;
    }

    /**
    * Constructs a <code>RestFrontEnrollAuthRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RestFrontEnrollAuthRequest} obj Optional instance to populate.
    * @return {module:model/RestFrontEnrollAuthRequest} The populated <code>RestFrontEnrollAuthRequest</code> instance.
    */

    RestFrontEnrollAuthRequest.constructFromObject = function constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestFrontEnrollAuthRequest();

            if (data.hasOwnProperty('EnrollType')) {
                obj['EnrollType'] = _ApiClient2['default'].convertToType(data['EnrollType'], 'String');
            }
            if (data.hasOwnProperty('EnrollInfo')) {
                obj['EnrollInfo'] = _ApiClient2['default'].convertToType(data['EnrollInfo'], { 'String': 'String' });
            }
        }
        return obj;
    };

    /**
    * @member {String} EnrollType
    */
    return RestFrontEnrollAuthRequest;
})();

exports['default'] = RestFrontEnrollAuthRequest;
module.exports = exports['default'];

/**
* @member {Object.<String, String>} EnrollInfo
*/
