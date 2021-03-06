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


import ApiClient from '../ApiClient';
import JobsTaskStatus from './JobsTaskStatus';





/**
* The JobsListJobsRequest model module.
* @module model/JobsListJobsRequest
* @version 1.0
*/
export default class JobsListJobsRequest {
    /**
    * Constructs a new <code>JobsListJobsRequest</code>.
    * @alias module:model/JobsListJobsRequest
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>JobsListJobsRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/JobsListJobsRequest} obj Optional instance to populate.
    * @return {module:model/JobsListJobsRequest} The populated <code>JobsListJobsRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobsListJobsRequest();

            
            
            

            if (data.hasOwnProperty('Owner')) {
                obj['Owner'] = ApiClient.convertToType(data['Owner'], 'String');
            }
            if (data.hasOwnProperty('EventsOnly')) {
                obj['EventsOnly'] = ApiClient.convertToType(data['EventsOnly'], 'Boolean');
            }
            if (data.hasOwnProperty('TimersOnly')) {
                obj['TimersOnly'] = ApiClient.convertToType(data['TimersOnly'], 'Boolean');
            }
            if (data.hasOwnProperty('LoadTasks')) {
                obj['LoadTasks'] = JobsTaskStatus.constructFromObject(data['LoadTasks']);
            }
            if (data.hasOwnProperty('JobIDs')) {
                obj['JobIDs'] = ApiClient.convertToType(data['JobIDs'], ['String']);
            }
            if (data.hasOwnProperty('TasksOffset')) {
                obj['TasksOffset'] = ApiClient.convertToType(data['TasksOffset'], 'Number');
            }
            if (data.hasOwnProperty('TasksLimit')) {
                obj['TasksLimit'] = ApiClient.convertToType(data['TasksLimit'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {String} Owner
    */
    Owner = undefined;
    /**
    * @member {Boolean} EventsOnly
    */
    EventsOnly = undefined;
    /**
    * @member {Boolean} TimersOnly
    */
    TimersOnly = undefined;
    /**
    * @member {module:model/JobsTaskStatus} LoadTasks
    */
    LoadTasks = undefined;
    /**
    * @member {Array.<String>} JobIDs
    */
    JobIDs = undefined;
    /**
    * @member {Number} TasksOffset
    */
    TasksOffset = undefined;
    /**
    * @member {Number} TasksLimit
    */
    TasksLimit = undefined;








}


