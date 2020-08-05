var vue = new Vue({
 el: "#app",
 data: {
   clicked: 0,
   clicked_plusing: 1,
   cost_up:10
 },
 methods: {
   click: function() {
     //for(i = 0; i < 1;i++){
       this.clicked += this.clicked_plusing;
     //this.clicked_plusing++;
   },
   up: function() {

     this.clicked = this.clicked - this.cost_up;
     this.clicked_plusing++;
     this.cost_up = this.cost_up * 2;

   },
   //reset: function(){
     //this.clicked = 0;
     //this.clicked_plusing = 1;
     //this.cost_up = 10;
   //}
 }
   //}

})