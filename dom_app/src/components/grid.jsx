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
            
            //getting the row and col count from the previous state
            const { rowCount, colCount } = prevState;

            //spread operator on getting gridSquares array from previous state
            const newGridSquares = [...prevState.gridSquares];
            //create a new Row filled with array of empty string to the colCount
            //conflict when addColumns ~ quick solve on 1 more grid or col when addRow()
            let newRow 
                if(colCount !== 1){
                    newRow = Array(colCount - 1).fill('');
                }else{
                    newRow = Array(colCount).fill('');
                }
                
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
    
    removeRow = () => {
        this.setState(prevState => {
            //only rowCount is needed when removing Row, getting the row count from prevState
            const{rowCount} = prevState;
            //limit the activity not to go rowCount to -
            if(rowCount > 1){
                //spread operator on getting gridSquares array from previous state
                const newGridSquares = [...prevState.gridSquares];
                //pop the array so that last element is remove so does removing row
                newGridSquares.pop();
                return{
                    //update rowCOunt and gridSquares
                    rowCount: rowCount - 1,
                    gridSquares: newGridSquares
                };
            }
        })
    };

    addColumn = () => {
        this.setState(prevState => {
            const{rowCount, colCount} = prevState;
            let newGridSquares;
            //when there is no row to loop create a single grid
            if(colCount === 1 && rowCount === 1){
                newGridSquares = [...prevState.gridSquares];
                //create a new Row filled with array of empty string to the colCount
                const newRow = Array(colCount).fill('');
                //push that newly created row to newGridSquares
                newGridSquares.push(newRow);
                
            }else{
                //going to loop through each row which is the elements in gridSquares array
                //use spread and append the blank array 
                //map will create the new Array with those added blank array
                newGridSquares = prevState.gridSquares.map(row => [...row, ''] );
                
            }
            return{
                //update colCount and gridSquares 
                colCount: colCount + 1,
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
                <button onClick={this.addColumn}>Add Column</button>
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
