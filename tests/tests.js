var appKey = "d1a2f50e-eb1b-3042-975c-6426d743da13";

QUnit.module("PlanetXApiAppCenter", function(){
	PlanetXApiAppCenter.defaultCenter().setUp(appKey);

	QUnit.test("defaultCenter", function(assert){
		assert.notOk(null, PlanetXApiAppCenter.defaultCenter());
		assert.equal(PlanetXApiAppCenter.uniqueInstance, PlanetXApiAppCenter.defaultCenter());
	});

	QUnit.test("setUp", function(assert){
		assert.equal(appKey, PlanetXApiAppCenter.defaultCenter().appKey);
	});

	QUnit.test("call-tmap-routes-pedestrian", function(assert){
		var async = assert.async();

		var param = {
			startX: 126.9823439963945,
			startY: 37.56461982743129,
			angle: 1,
			speed: 60,
			endPoiId: 334852,
			endRpFlag: 8,
			endX: 126.98031634883303,
			endY: 37.57007473965354,
			passList: "126.98506595175428,37.56674182109044,334857,16",
			reqCoordType: "WGS84GEO",
			gpsTime: 15000,
			startName: "aaa",
			searchOption: 0,
			endName: "bbb",
			resCoordType: "WGS84GEO"
		};

		PlanetXApiAppCenter.defaultCenter().call({
			path: "tmap/routes/pedestrian",
			param: param,
			completion: function(result, error){
				console.log(result, error);
				assert.ok(true);
				// assert.ok(result != null);
				// assert.ok(result.path.length > 0);
				// assert.ok(error == null);
				async();
			}
		});
	});
});