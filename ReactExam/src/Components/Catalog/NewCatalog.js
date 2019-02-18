import React from 'react';
import SearchFilter from './Components/SearchFilter/SearchFilter';
import ManufactureSorter from './Components/ManufactureSorter/ManufactureSorter';
import Unchecker from './Components/Unchecker/Unchecker';

let a = '';

class NewCatalog extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         data: (
            <div>
                {SearchFilter(a)}
            </div>
        )
      }
      this.updateState = this.updateState.bind(this);
   };
   updateState() {
      this.setState({data: ( 
        <div>
            {SearchFilter(a)}
        </div>
      )})
   }
   
   render() {
      return (
         <div class="container">
            <h1 class="header-big">Catalog</h1>
        
                <div class="catalog">
        
                    <div class="column-left">
                    
                        <div class="filter">
                            <div class="filter-header">
                                <h4>Search</h4>
                                <button onClick={()=>{a='';this.updateState();document.getElementById('searcher').value = '';Unchecker()}} class="clear" class="clear-button">Clear</button>
                            </div>
                            <div>
                                <input onChange={(y)=>{a=y.target.value;this.updateState();Unchecker();}} type="text" id="searcher" placeholder="search..."/>
                            </div>
                            {(() => {
                                let filtered = ManufactureSorter()
                                return (
                                    <div>
                                        <h4>Manufacturer</h4>
                                        <div>
                                            <div>
                                                <input type="radio" name="manufacturere" id="all" value="all" onClick={() => {a='';this.updateState()}}/>
                                                <label for="all">All</label>
                                            </div>
                                            {filtered.map((element) => (
                                                <div>
                                                    <input type="radio" name="manufacturere" id={element} value={element} onClick={()=>{a=element;this.updateState()}}/>
                                                    <label for={element}>{element}</label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            })()}
                        </div>
                    </div>

                    <div>
                        {this.state.data}
                    </div>
                </div>
        </div>
            
      );
   }
}




export default NewCatalog; 

