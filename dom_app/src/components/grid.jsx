//this space for typing and stuffs
//have to create the function for addRow() first
//ohh okk but i have to think about itttt
import React, {Component, ReactPropTypes} from 'react';
import './grid.css';

class Grid extends Component{
    constructor(props){
        super(props);
        this.state = {
            rowCount: 1,
            colCount: 1,
            //create an array for grid?
            gridSquares: [], 
        };
    }

    //filling the gridSquare?
    // generateGridSquares = () =>{
    //     const{rowCount, colCount} = this.state;//destructuring like rowCount will hold this.state.rowCount
    //     let squares = [];
    //     for(let i = 0; i < rowCount; i++){
    //         let row = [];
    //         for (let j = 0; j < colCount; j++){
    //             row.push('');
    //         }
    //         squares.push(row);
    //     }
    //     this.setState({
    //         gridSquares: squares
    //     });
    // }

    // renderGridCells = ()=>{
    //     return this.state.gridSquares.map((row, rowIndex) =>(<tr key={rowIndex}>
            
    //     </tr>));
    // }

    addRow = () => {
        this.setState(prevState => {
          const { rowCount, colCount } = prevState;
          console.log(colCount);
          const newGridSquares = [...prevState.gridSquares];
          //create a new Row filled with array of empty string to the colCount
          const newRow = Array(colCount).fill('');
          //push that newly created row to newGridSquares
          newGridSquares.push(newRow);
          return {
            //update rowCount
            rowCount: rowCount + 1,
            //update gridSquares
            gridSquares: newGridSquares
          };
        });
    };
    
    

    render(){
//have to figure out what to put inside the table tag for grid ...
        return(
        <div> 
        
            <div>
                <button onClick={this.addRow}>Add Row</button>
                <button onClick={this.removeRow}>Remove Row</button>
                <button>Add Column</button>
                <button>Remove Column</button>
            </div>
            <p>testtt</p>
            <table>
                <tbody>
                    {/*
                        row will carry color - future
                        gridSquares.map > go each 'row' in gridSquares
                        key attribute and index of row and col will help in efficient updating 
                        row.map > go each 'cell' inside row
                            for each do this function inside td / creating td-s in with colindex
                        
                    */}
                    {this.state.gridSquares.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                        {row.map((cell, colIndex) => (
                          <td key={colIndex} style={{ backgroundColor: cell }}></td>
                        ))}
                      </tr>
                    ))}
                </tbody>
            </table>
        </div>
        )
    }
}
export default Grid;
