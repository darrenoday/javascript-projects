const whoWon = require('../RPS.js');

describe("whoWon", function(){
    test("checks to see if both players with same selection returns 'TIE!'", function(){
        let output  = whoWon('rock','rock')
        expect(output).toEqual('TIE!');
    });
    test("checks to see if player one rock and player two paper returns 'Player 2 wins!'", function(){
        let output  = whoWon('rock','paper')
        expect(output).toEqual('Player 2 wins!');
    });
    test("checks to see if player one rock and player two paper returns 'Player 2 wins!'", function(){
        let output  = whoWon('rock','paper')
        expect(output).toEqual('Player 2 wins!');
    });
    test("checks to see if player one paper and player two scissors returns 'Player 2 wins!'", function(){
        let output  = whoWon('paper','scissors')
        expect(output).toEqual('Player 2 wins!');
    });
    test("checks to see if player scissors and player two rock returns 'Player 2 wins!'", function(){
        let output  = whoWon('scissors','rock')
        expect(output).toEqual('Player 2 wins!');
    });
    test("checks to see if player one rock and player two scissors returns 'Player 1 wins!'", function(){
        let output  = whoWon('rock','scissors')
        expect(output).toEqual('Player 1 wins!');
    });
    test("checks for invalid input if player 1 or 2 is anything other than scissors, rock, or paper", function(){
        let output = whoWon('ham','sandwich')
        expect(output).toEqual('invalid input');
    });

});

