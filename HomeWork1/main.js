var list = [{	name: "bike",
		distance: 50,
		tMinuts: 80
    },{	name: "scooter",
		distance: 100,
		tMinuts: 60
    },{	name: "train",
		distance: 200,
		tMinuts: 30
    },{	name: "cycl",
		distance: 50,
		tMinuts: 50
    },{	name: "car",
		distance: 90,
		tMinuts: 70
    }];

   var vMax = 0;

    function calculate(minutes, distance) {
        var time = minutes / 60;
        var Khm = distance / time;
        return Khm;
    }

    for(var i=0; i < list.length; i++) {
        var time = list[i].tMinuts;
        var distanse = list[i].distance;

        var result = calculate(time, distanse);
        if(vMax < result) {
            vMax = result;
        }
       
    }
 console.log(vMax);