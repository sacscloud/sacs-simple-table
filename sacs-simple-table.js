/**
 * @customElement
 * @polymer
 * @demo demo/index.html
 * 
 * `<sacs-simple-table>` creates dynamically responsive table.
 *
 * You need pass a json with data for the table `<sacs-simple-table>` like this:
 *
 *       <sacs-simple-table data-table="[[dataTable]]" titles="[[titles]]"></sacs-simple-table>
 */

'use strict';

Polymer({
    is: 'sacs-simple-table',
    properties: {
        /**
         * Data for create content of table dynamically
         * @attribute dataTable
         * @type {Array}
         * @default []
        */
        dataTable: {
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

    attached: function () {
       console.log("Iniciado...")
      this.__formatDataTable(this.dataTable);
      console.log("OBJECT",this.dataToRender);
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
           console.log("order222", this.sort)
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


    __formatDataTable: function(array) {
        const arrayRows = [];
        let cellContent;
           
        for (let objects of array) {
            for (let obj in objects) {
             
               const arrayFiltered = this.titles.filter(element => element.id === obj)
               const positionElement = this.titles.indexOf(arrayFiltered[0]);
               cellContent = objects[obj];
              
                if (positionElement !== -1) {
                   arrayRows[positionElement] = cellContent;
                   console.log(cellContent)
                }
             
            }

            this.push('dataToRender', JSON.parse(JSON.stringify({row:arrayRows, sortData: cellContent })));
        }       
    }
});
