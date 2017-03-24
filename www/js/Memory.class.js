function Memory(containerId, imgs){

    // attribut
    this.container = document.querySelector('#'+containerId);
    this.lastVisible = {};
    this.found = [];

    // méthodes
    this.onplay = this.onplay.bind(this);

    // tilesSettings
    this.tilesSettings = [];
    for(var i=0; i<imgs.length; i++) {

        // les tuiles sont en double
        this.tilesSettings.push({
            found:false,
            src:imgs[i]
        });
        this.tilesSettings.push({
            found:false,
            src:imgs[i]
        });
    }

    // suffle
    this.shuffle(this.tilesSettings);

    // génération des tuiles
    this.generate();
}

// génération de la grille de jeu
Memory.prototype.generate = function(){
    onplay = this.onplay;

  for(var i =0; i < this.tilesSettings.length; i++) {
      var t = this.tilesSettings[i];
      this.createTile(i, t.src);
  }

};

// algo de jeu : déclenché au click
Memory.prototype.onplay = function(id){

    // évite le double click
    if( typeof this.lastVisible.id !== 'undefined' && this.lastVisible.id == id) {
        return;
    }

    // évite le clic sur une tuile locked
    if( this.tilesSettings[id].found == true) {
        return;
    }

    // toggle l'image
    var img = document.querySelector('#memory-'+id);
    img.style.visibility = 'visible';

    // récupération de la source
    var src = img.src;

    // si pas d'images découvertes précédemment, on enregistre celle là
    if( typeof this.lastVisible.id == 'undefined') {
        this.lastVisible = {id : id, src:src};
    }

    // si une autre image découverte, on recache tout
    else if( this.lastVisible.src != src) {
        this.lastVisible = {};

        setTimeout((function() {
                for (var i = 0; i < this.tilesSettings.length; i++) {

                    if( !this.tilesSettings[i].found) {
                        var idImg = i;
                        document.querySelector('#memory-' + idImg).style.visibility = 'hidden';
                    }

                }
            }).bind(this),
            500);
    }
    // si la même image découverte, on les stocks dans found
    else {
        this.found.push(this.lastVisible.id);
        this.found.push(id);
        this.tilesSettings[this.lastVisible.id].found = true;
        this.tilesSettings[id].found = true;
        this.lastVisible = {};
    }

    // victoire
    if(this.found.length == this.tilesSettings.length) {
        console.log("gagne");
    }
};

// création de tuile
Memory.prototype.createTile = function(id, src){

    // rendu de la tuile
    var div = document.createElement('div');
    div.style.display = 'inline-block';
    div.style.border = '1px solid #eee';
    div.style.height = '200px';
    div.style.width = '200px';
    div.style.overflow = 'hidden';
    div.style.cursor = 'pointer';
    div.style.margin = "20px";

    // rendu de l'image
    var img = document.createElement('img');
    img.className = "memory-tile";
    img.id = "memory-"+id;
    img.src = src;
    img.style.height = '200px';
    img.style.width = 'auto';
    img.style.visibility = 'hidden';

    // association au DOM
    div.appendChild(img);
    this.container.appendChild(div);

    // click
    div.onclick = this.onplay.bind(this, id);
}

// mélange des tuiles
Memory.prototype.shuffle = function(a){
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
};

// array d'images
var array = [
    "http://24.media.tumblr.com/tumblr_lyr0k67j7B1r0mbi6o1_250.jpg",

    "http://25.media.tumblr.com/tumblr_m33hb8e6Oe1qze0hyo1_400.jpg",

    " http://25.media.tumblr.com/tumblr_lzqqi3mq2h1r6b7kmo1_500.jpg"

    ];

new Memory('container', array);