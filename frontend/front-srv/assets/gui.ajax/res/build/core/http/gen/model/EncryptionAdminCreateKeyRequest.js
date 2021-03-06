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
* The EncryptionAdminCreateKeyRequest model module.
* @module model/EncryptionAdminCreateKeyRequest
* @version 1.0
*/

var EncryptionAdminCreateKeyRequest = (function () {
    /**
    * Constructs a new <code>EncryptionAdminCreateKeyRequest</code>.
    * @alias module:model/EncryptionAdminCreateKeyRequest
    * @class
    */

    function EncryptionAdminCreateKeyRequest() {
        _classCallCheck(this, EncryptionAdminCreateKeyRequest);

        this.KeyID = undefined;
        this.Label = undefined;
    }

    /**
    * Constructs a <code>EncryptionAdminCreateKeyRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/EncryptionAdminCreateKeyRequest} obj Optional instance to populate.
    * @return {module:model/EncryptionAdminCreateKeyRequest} The populated <code>EncryptionAdminCreateKeyRequest</code> instance.
    */

    EncryptionAdminCreateKeyRequest.constructFromObject = function constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EncryptionAdminCreateKeyRequest();

            if (data.hasOwnProperty('KeyID')) {
                obj['KeyID'] = _ApiClient2['default'].convertToType(data['KeyID'], 'String');
            }
            if (data.hasOwnProperty('Label')) {
                obj['Label'] = _ApiClient2['default'].convertToType(data['Label'], 'String');
            }
        }
        return obj;
    };

    /**
    * @member {String} KeyID
    */
    return EncryptionAdminCreateKeyRequest;
})();

exports['default'] = EncryptionAdminCreateKeyRequest;
module.exports = exports['default'];

/**
* @member {String} Label
*/
