//
//  planetx-api
//	version: 1.0.0
//
//  Created by Steve Kim on 8/5/16.
//  Copyright © 2016 Steve Kim. All rights reserved.
//

( function(global) {

    // ================================================================================================
    //  Class: PlanetXApiAppCenter
    // ================================================================================================
    
	var PlanetXApiAppCenter = function() {};

	PlanetXApiAppCenter.basePath = "https://apis.skplanetx.com/";
	PlanetXApiAppCenter.version = 1;

	PlanetXApiAppCenter.defaultCenter = function() {
		if (!PlanetXApiAppCenter.uniqueInstance) {
			PlanetXApiAppCenter.uniqueInstance = new PlanetXApiAppCenter();
		}
		return PlanetXApiAppCenter.uniqueInstance;
	};

	PlanetXApiAppCenter.prototype = {
		appKey: null,

		call: function(options) {
			if (this.isEmpty(this.appKey)) {
				options.completion(null, new Error(-1, "APP KEY IS UNDEFINED."));
				return null;
			}

			return $.post({
				url: PlanetXApiAppCenter.basePath + options.path + "?version=" + PlanetXApiAppCenter.version,
    			headers: {"appKey": this.appKey},
				data: options.param,
				timeout: 5000,
				success: function(rs){
					if (rs) {
						options.completion(rs, null);
					} else {
						options.completion(null, new Error(99, "UNKNOWN_ERROR"));
					}
				},
				error: function(err) {
					options.completion(null, err);
				}
			});
		},

		isEmpty: function(value) {
			return value == undefined || value == null || value.length < 1
		},

		setUp: function(appKey) {
			this.appKey = appKey;
		}
	};

	window.PlanetXApiAppCenter = PlanetXApiAppCenter;

}() );