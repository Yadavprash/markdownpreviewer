import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyComponent from "./MyComponent";
import {Provider} from "react-redux";
import store from "./store";
import {marked} from "marked";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <MyComponent/>
        </Provider>
);
export function toMarked(content){
        marked.setOptions({
                breaks:true
        })
        let preview = document.getElementById('preview');
        preview.innerHTML = (marked(content))
}


