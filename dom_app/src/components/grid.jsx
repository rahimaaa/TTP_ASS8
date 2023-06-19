//this space for typing and stuffs
//have to create the function for addRow() first
//ohh okk but i have to think about itttt
import React, {Component, ReactPropTypes} from 'react';
import './grid.css';

import SelectButton from './selectButton';

class Grid extends Component{
    constructor(props){
        super(props);
        this.state = {
            rowCount: 0,
            colCount: 0,
            //create an array for grid?
            gridSquares: [], 
            color: "",
            click: false,
        };

        //bind function
        this.getColor = this.getColor.bind(this);
        this.mouseEnter = this.mouseEnter.bind(this);
    }

    

    addRow = () => {
        this.setState(prevState => {
            
            //getting the row and col count from the previous state
            const { rowCount, colCount } = prevState;

            //spread operator on getting gridSquares array from previous state
            const newGridSquares = [...prevState.gridSquares];
            //create a new Row filled with array of empty string to the colCount
            //conflict when addColumns ~ quick solve on 1 more grid or col when addRow()
            console.log("row: ",rowCount, "col: ", colCount);
            let newRow; 
                
                 if(colCount === 0){
                    newRow = Array(colCount + 1). fill('');
                    newGridSquares.push(newRow);

                    return{
                        rowCount: rowCount + 1,
                        colCount: colCount + 1,
                        gridSquares: newGridSquares,
                    }
                 }
                 newRow = Array(colCount).fill('');
                
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

    //trigger color change in select button
    getColor = (row,col) =>{
        //x.currentTarget.style.backgroundColor = this.props.color;
        //console.log(row, " ", col);

        
        this.setState(prevState => {

            const newGridSquares = [...prevState.gridSquares]
            newGridSquares[row][col] = this.props.color;

            return {gridSquares : newGridSquares};
        })
        
    };
    
    removeRow = () => {
        this.setState(prevState => {
            //only rowCount is needed when removing Row, getting the row count from prevState
            const{rowCount, colCount} = prevState;
            //limit the activity not to go rowCount to -
            console.log("row: ",rowCount, "col: ", colCount);
            if(rowCount >= 1){
                //spread operator on getting gridSquares array from previous state
                const newGridSquares = [...prevState.gridSquares];
                //pop the array so that last element is remove so does removing row
                newGridSquares.pop();

                if(rowCount <= 1){;
                    return {
                        rowCount: 0,
                        colCount: 0,
                        gridSquares: newGridSquares,
                    }
                }
                return{
                    //update rowCOunt and gridSquares
                    rowCount: rowCount - 1,
                    gridSquares: newGridSquares,
                };
            }
        })
    };

    addColumn = () => {
        this.setState(prevState => {
            const{rowCount, colCount} = prevState;
            let newGridSquares;

            //when there is no row to loop create a single grid
            console.log("row: ",rowCount, "col: ", colCount);
            if(colCount === 0 && rowCount === 0){
                newGridSquares = [...prevState.gridSquares];
                //create a new Row filled with array of empty string to the colCount
                const newRow = Array(colCount + 1).fill('');
                //push that newly created row to newGridSquares
                newGridSquares.push(newRow);

                return{
                    rowCount: rowCount + 1,
                    colCount: colCount + 1,
                    gridSquares: newGridSquares
                }
                
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

    removeColumn = () => {
        this.setState(prevState => {
          const { rowCount,colCount } = prevState;
          console.log("row: ",rowCount, "col: ", colCount);
          if (colCount >= 0) {
                //slice will give a new sliced array starting from the index of 0 and it will slice the last
                //element
                let newGridSquares = prevState.gridSquares.map(row => row.slice(0, -1));
                if(colCount > 1){
                    return {
                        colCount: colCount - 1,
                        gridSquares: newGridSquares,
                    };
                }

                //reset when it hit 0 therefore making gridSquares back to blank array
                newGridSquares = []; 
                return {
                    rowCount: 0,
                    colCount: 0,
                    gridSquares: newGridSquares,
                }
                    
            }
          return prevState;
        });
      };

      //trigger by fill empty button
      fillEmpty = () => {
        this.setState(prevState => {

            const newGridSquares = [...prevState.gridSquares]
            for(let row = 0 ; row < newGridSquares.length ; row++){
                for(let col = 0 ; col < newGridSquares[row].length ; col++){
                    if(newGridSquares[row][col] === ""){
                        newGridSquares[row][col] = this.props.color;
                    }
                }
            }

            return {gridSquares : newGridSquares};
        })
      }

      fillAllCells=()=>{
        this.setState(prevState => {

            const newGridSquares = [...prevState.gridSquares]
            for(let row = 0 ; row < newGridSquares.length ; row++){
                for(let col = 0 ; col < newGridSquares[row].length ; col++){
                    newGridSquares[row][col] = this.props.color;
                }
            }

            return {gridSquares : newGridSquares};
        })
      }

      clearAll=()=>{
        this.setState(prevState => {

            const newGridSquares = [...prevState.gridSquares]
            for(let row = 0 ; row < newGridSquares.length ; row++){
                for(let col = 0 ; col < newGridSquares[row].length ; col++){
                    newGridSquares[row][col] = "";
                }
            }

            return {gridSquares : newGridSquares};
        })
        
      }
      mouseDown=()=>{
        this.setState({click:true})
      }
      mouseUp=()=>{
        this.setState({click:false})
      }

      mouseEnter = (row, col)=>{
        if(this.state.click){
            
            this.setState(prevState => {

                const newGridSquares = [...prevState.gridSquares]
                newGridSquares[row][col] = this.props.color;
    
                return {gridSquares : newGridSquares};
            })
        }
      }


    render(){
        return(
        <div> 
        
            <div>
                <button onClick={this.addRow}>Add Row</button>
                <button onClick={this.removeRow}>Remove Row</button>
                <button onClick={this.addColumn}>Add Column</button>
                <button onClick={this.removeColumn}>Remove Column</button>
            </div>
            <p>testtt</p>

            <div>
                <button onClick={this.fillEmpty}>Fill All Empty Cell</button>
                <button onClick={this.fillAllCells}>Fill All Cells</button>
                <button onClick={this.clearAll}>Clear All Cells</button>


            </div>
            <br />
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
                          <td 
                          key={colIndex} 
                          style={{ backgroundColor: cell }} 
                          onClick={() => this.getColor(rowIndex,colIndex)}
                          onMouseDown = {this.mouseDown}
                          onMouseUp = {this.mouseUp}
                          onMouseEnter = {() => this.mouseEnter(rowIndex, colIndex)}
                          >
                            {rowIndex} + {colIndex}
                          </td>
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
