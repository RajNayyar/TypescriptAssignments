import {LitElement, html, customElement, property, css} from 'lit-element';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// LitElement --> Base class for Element Creation
// encapulate, properties, styles, events, template
// Lifecycle management for Shadow-DOM

// html --> inline constant funcation that will be
// use for containing HTML template for rendering

// customElement --> inline constant function for
// defining the LiteElement so that parent can use it

@customElement('demo-element')
export class demoLit extends LitElement{
  // define properties, to accept input
  // from the container
  @property ({type: String}) dataSource
  @property({type: String}) name;
  
  headers: Array<string>
  values: Array<String[]>
  parsedData: Array<any>
  constructor() {
      super()
      this.headers = []
  }
  
  fetchHeadersAndValues(data: Array<any>)
  {
    if(data.length > 0) {
        for(let p in data[0]) {
          this.headers.push(p);
        }
      } 
      console.log(this.headers)
  }

  render() {
    let parsedDataSource = JSON.parse(this.dataSource)
    this.fetchHeadersAndValues(parsedDataSource)
    return html `
    <table style="width:100%">
  <tr>
  ${this.headers.map(item => html`<th>${item}</th>`)}
  </tr>
  ${parsedDataSource.map(item => `<tr> ${this.headers.map(header => `<td> ${item[header]} </td>`)}/<tr>`)}
</table>
    
    `;
  }
}