var request= new XMLHttpRequest();
        // console.log(request);
        request.open('GET','https://restcountries.com/v3.1/all');
        request.send();
        request.onload= function(){
            var data=JSON.parse(request.response)
            console.log(data);
            for(var i=0;i<data.length;i++){
            console.log(data[i].capital);
        }
        for(var index of data){
            console.log(index.region);
        }

        for(var key in data){
            console.log(key);
        }

        data.forEach((element) => {
            console.log(element.flag);
        });


    }