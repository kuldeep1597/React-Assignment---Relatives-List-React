import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
         const relatives=["papa","chacha","tauji","baba"];

        return(
            <div id="main">
                <ol key="relativeList">
                    {
                        relatives.map((r,i)=>(
                        <li key={"relativeListItem" + (i+1)}>{r}</li>

                        ))

                }
                </ol>
               
            </div>
        )
    }
}


export default App;
