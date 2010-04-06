describe 'Given a white grid of 10x10'
    before_each
        grid = new Grid(10,10);
    end
    describe ', a start position of 5,5 and heading up, '
        before_each
            mier = new Mier(grid,5,5);            
        end

        it 'should be in position 5, 5'
            mier.x.should.be 5
            mier.y.should.be 5
        end

        it 'initial position should be white'
          grid.color(5,5).should.be "white"
        end

      describe 'When moving next'
        before_each
            mier.move();
        end

        it 'should move to position 6,5'
          mier.x.should.be 6
          mier.y.should.be 5
        end

        it 'should mark the previous position black'
          grid.color(5,5).should.be "black"
        end
      end

    describe 'When moving next twice'
        before_each
            mier.move();
            mier.move();
        end
        it 'should move to position 6,6'
            mier.x.should.be 6
            mier.y.should.be 6
        end
        it 'should mark the previous positions black'
            grid.color(5,5).should.be "black"
            grid.color(6,5).should.be "black"
        end

    end
    end

end