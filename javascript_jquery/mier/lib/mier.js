Mier = function(grid,x,y){
  this.grid = grid;
  this.x = x;
  this.y = y;
  this.direction = 'up';

    this.move = function(){
        this.grid.toggle(this.x,this.y);
        if (this.direction == 'up') {
            this.x++;
            this.direction = 'right';
        }
        else{
            this.y++;
        }
    }
}