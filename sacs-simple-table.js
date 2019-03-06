/**
 * @customElement
 * @polymer
 * @demo demo/index.html
 * 
 * `<sacs-simple-table>` creates dynamically responsive table.
 *
 * In typical use, just slap some `<sacs-simple-table>` at the top of your body:
 *
 *     <body>
 *       <sacs-simple-table></sacs-simple-table>
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

        /**
         *Data for create titles of table dynamically
         * @attribute titles
         * @type {Array}
         * @default []
        */
        titles: {
            type: Array,
            value: []
        }
    }
});
