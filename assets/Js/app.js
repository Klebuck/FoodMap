$(document).ready(function() {
    setTimeout(function() {
        $(".content").fadeOut(1500);
    },3000);
});

$(document).ready(function() {   
    setTimeout(function() {
        $(".content2").fadeIn(1500);
    },3000);
});

var cont = $('#container');
    
    $('#categorias').on('change', function() {
    	var selection = $('#categorias').val();
      //cont.text(selection);
      if( selection === "comidarapida") {
      cont.html('<p>Elige tu opción de comida rápida</p><img  id="foto1" src="http://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/4/8/4/WU1004H_Chicken-Nuggets_s4x3.jpg.rend.hgtvcom.616.462.suffix/1428675741536.jpeg"/><img id="foto2" src="http://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/04/comidarapida.jpg"/><img id="foto3" src="https://i.pinimg.com/474x/7d/02/75/7d027542e807ab1b823235587b207e51--hot-dog-stand-gourmet-hot-dogs.jpg"/><img id="foto4" src="http://www.paginasamarillas.com.ar/imagenes/pipe/AVI15768/15768969/15768969_GAL5.jpg"/>');
      }
      if( selection === "comidachina") {
      cont.html('<p>Elige la mejor opción de comida China cerca de tu hogar</p> <img src="https://static.vix.com/es/sites/default/files/styles/large/public/imj/otramedicina/B/Beneficios-de-la-cocina-medicinal-china-2.jpg?itok=60TCWabt"/><img src="https://cocinea.es/install/wp-content/uploads/2016/03/Dim-Sum-Comida-China.jpg"/><img src="http://aucdn.ar-cdn.com/recipes/originals/ce4326a8-37de-4cb7-8460-55aea056c246.jpg"/><img src="http://clcdn02.mundotkm.com/2015/12/1336956.jpg"/>');
      }
      if( selection === "sushi") {
      cont.html('<p>Una deliciosa pieza de sushi cerca de tu hogar</p> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu9PC2uimr1HeA0k5As_imDI46EeK7Hzyl7vxltomegri1SqtL"/><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYgaPJmjxcRrP4lkQLPd_CQp15aecUrfjzUHYbIrpukZkYu_Te"/><img src="https://img.grouponcdn.com/deal/fmPws6o2uTweCftZu7yj/p4-2048x1229/v1/c700x420.jpg"/><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdUquPaUD5QsmA00VGW5SBZ2MU1V6B2uO9ko-XKonwwLrCpXLrWA"/>'); 
      }
      if( selection === "pasteleria") {
      cont.html('<p>Un momento dulce? Encuentra tu pasteleria</p> <img src="http://www.goodlifeeats.com/wp-content/uploads/2012/02/easy-valentine-dessert-raspberry-brownie-parfait.jpg"/><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMCC9Nv79s4opTkOdWRl1MSuyaoJRVS-bViEwsa1gshMSuI47d"/><img src="https://www.meals.com/ImagesRecipes/121806lrg.jpg"/><img src="https://i.pinimg.com/236x/03/40/1a/03401a9d492262388b20e077efbcec71--cake-with-strawberries-blueberries.jpg"/>');
      }
})


