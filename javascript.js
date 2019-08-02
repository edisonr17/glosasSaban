

$(function () {
   
        var TXT_URL = 'http://localhost/proyectos/glosas/data.txt';
       
       
        $.ajax({
            url: TXT_URL,
            dataType: "text",
            success: function (data) {
            var str = String(data).trim();
      
           
         
           res = str.split("<<");
           
           var datos = [];
           res.forEach(function callback(valor, index, array) {
               if(index > 0)
               {
                var datasplit = valor.split(/\n/);
                var indiceParaElDocumento = null;
                datasplit.forEach(function buscarDocYObservacion(val, ind, arr)
                {

                    if(val.indexOf("DOCUMENTO") > -1)
                    {
                        indiceParaElDocumento = ind;
                       
                    }

                });
                if(index != null)
                {
                    datos.push({"numero factura": datasplit[0], "documento": getNumbersInString(datasplit[indiceParaElDocumento]), "observacion:": datasplit[7]});
                }
               }
               
           });
       console.log(datos);
           var nstr = str.split(/\n/);
           
        }});
    


        function getNumbersInString(string) {
            var tmp = string.split("");
            var map = tmp.map(function(current) {
              if (!isNaN(parseInt(current))) {
                return current;
              }
            });
          
            var numbers = map.filter(function(value) {
              return value != undefined;
            });
          
            return numbers.join("");
          }
       
});
