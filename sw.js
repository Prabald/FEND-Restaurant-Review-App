/* 
 Array of files to cache
*/
var files = [
'/index.html',
'/restaurant.html',
'/css/styles.css',
'/data/restaurants.json',
'/img/1.jpg',
'/img/2.jpg',
'/img/3.jpg',
'/img/4.jpg',
'/img/5.jpg',
'/img/6.jpg',
'/img/7.jpg',
'/img/8.jpg',
'/img/9.jpg',
'/img/10.jpg',
'/js/main.js',
'/js/dbhelper.js',
'/js/restaurant_info.js',
'/'
]
/* 
 Setting up 'install' event listener
*/
self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('e1').then(function(cache) {
     return cache.addAll(files);
   })
 );
});
/*
 Setting up 'fetch' event listener
*/
self.addEventListener('fetch',function(e){
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response){
      return response || fetch(e.request);
    })
    );
});