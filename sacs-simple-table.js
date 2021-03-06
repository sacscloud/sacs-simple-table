/**
 * @customElement
 * @polymer
 * @demo demo/index.html
 * 
 * `<sacs-simple-table>` creates dynamically responsive table.
 *
 * You need pass a json with data for the table `<sacs-simple-table>` like this:
 *
 *       <sacs-simple-table data="[[dataTable]]" titles="[[titles]]"></sacs-simple-table>
 */

'use strict';

Polymer({
    is: 'sacs-simple-table',
    properties: {
        /**
         * Data for create content of table dynamically
         * @attribute data
         * @type {Array}
         * @default []
        */
        data: {
            type: Array,
            value: []
        },

        dataToRender:{
          type:Array,
          value:[]
        },

        /**
         *Data for create titles of table dynamically
         * @attribute titles
         * @type {Array}
         * @default []
        */
        titles: {
            type: Array,
            value: []
        },


        /**
         *Value for sort of table
         * @attribute order
         * @type {String}
         * @default "ascending"
        */
        sort:{
            type:"String",
            value:"ascending"
        }
    },

    observers:[
        'handleData(data.*)'
    ],

    handleData: function(data){
        if(data.value.length > 0){
            this.__formatDataTable(data.value);
        }
        
    },

    /**
    * Sort data of table.
    *
    * @param {number, string} fisrt value of table to comparate and sort
    * @param {number, string} second value of table to comparate and sort
    * 
    * @return {number} always return `-1` the validation is what sort.
    */
    __orderTable: function(first, second){
          if(this.sort === "ascending"){
            if(first.sortData < second.sortData){
                return -1;
            }

          }else if (this.sort === "descending"){
            if(first.sortData > second.sortData){
                return -1;
            }

          }
    },


    __dataChanged: function(array){
        this.set("dataToRender", []);
        this.__formatDataTable(array);
    },

    __formatDataTable: function(array) {
        const arrayRows = [];
        let cellContent;
        this.set("dataToRender", []);
           
        for (let objects of array) {
            for (let obj in objects) {
             
               const arrayFiltered = this.titles.filter(element => element.id === obj)
               const positionElement = this.titles.indexOf(arrayFiltered[0]);
               cellContent = objects[obj];
              
                if (positionElement !== -1) {
                   arrayRows[positionElement] = cellContent;                   
                }
             
            }

           
            this.push('dataToRender', JSON.parse(JSON.stringify({row:arrayRows, sortData: cellContent })));
        }
    }
});
