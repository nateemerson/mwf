/**
 * Defines methods under mwf.standard.preferences that create, read, and update 
 * preferences.
 *
 * @package standard
 * @subpackage js
 *
 * @author trott
 * @copyright Copyright (c) 2011 UC Regents
 * @license http://mwf.ucla.edu/license
 * @version 20111018
 *
 * @requires mwf
 * @requires mwf.capability
 * 
 */

mwf.standard.preferences=new function(){
    /**
     * Prefix for the preferences data in localStorage
     */
    var _localStorageName = mwf.site.localStorage.prefix+'prefs_';

    /**
     * Determine if the device has sufficient capabilities to support preferences.
     * 
     * @return bool
     */
    this.isSupported = function(){
        return mwf.capability.localstorage(); 
    }
    
    /**
     * Returns the value for the requested preferences key. 
     * 
     * It will always be a string.  Caller will need to use parseInt() etc. to
     * cast to other types.
     * 
     * Caller is responseible for checking isSupported() first.
     * 
     * @return string
     */
    this.get = function(key){
        return localStorage[_localStorageName+key]!=null ? localStorage[_localStorageName+key] : '';
    }
    
    /**
     * Set the value for the specified preference key.
     * 
     * Value will be cast to a string if it is not alrady a string.
     * 
     * Caller is responsible for checking isSupported() first.
     * 
     * @return void
     */
    this.set = function(key,value){
        localStorage[_localStorageName+key]=value;
    }
    
    /**
     * Resets preferences to default values (i.e., empty string). 
     * 
     * Note that this will reset all values set by MWF apps with the same current
     * hostname in the URL.  It is the nuclear option and should be used with
     * care.
     * 
     * Caller is responsible for checking isSupported() first.
     * 
     * @return void
     */
    this.reset = function(){

    }
};