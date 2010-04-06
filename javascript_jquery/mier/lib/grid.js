function Grid(width, height)
{
    this.width = width;
    this.height = height;
    this.cells = new Array(this.width);

    for(var i=0; i<this.width; i++){
        this.cells[i] = new Array(this.height);
        for(var j=0; j<this.height; j++){
            this.cells[i][j] = 'white';
        }
    }

    this.color = function(x,y) {
        return this.cells[x][y];
    }

    this.toggle = function(x,y) {
        if (this.cells[x][y] == 'black')
            this.cells[x][y] = 'white';
        else
            this.cells[x][y]='black';
    }
}