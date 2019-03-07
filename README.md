# \<sacs-simple-table\>

data table responsive

## Instala Polymer-CLI

Necesitas tener el [Polymer CLI](https://www.npmjs.com/package/polymer-cli) y bower instalado.

## Descarda el repositorio

Descarga el componente con https:

```
 $ git clone https://github.com/sacscloud/sacs-simple-table.git
``` 
o con SSH

```
 $ git@github.com:sacscloud/sacs-simple-table.git
``` 

## Instala las depencias
 
En la carpeta del componente el siguiente comando:

```
$ bower i
```

## Ver el componente

Ejecuta en la carpeta del componente el siguiente comando:

```
$ polymer serve
```
Poder ver el componente en el navegador la linea de comando te dare una url como la siguiente
`http://127.0.0.1:8081/components/sacs-simple-table/`

## Correr test


Corre `polymer test` para correr la suite de test de polymer localmente.

```
$ polymer test
```

El componente esta listo para ser probado via [web-component-tester](https://github.com/Polymer/web-component-tester). 

### Styling
Las siguientes propiedades y muxins estan disponibles para styling.

Custom property | Description | Default
----------------|-------------|----------
`--sacs-table-horizontal-scroll-color` | Color of vertical scroll when the table overflows  | `#36c6d3`
`--sacs-table-horizontal-scroll-hover-color` | Color of hover in vertical scroll when the table overflows | `#0de3f6`
`--sacs-table-first-row-color` | Color of principal rows | `#f2f2f2`
`--sacs-table-second-row-color` | Color of secondary rows | `white`
`--sacs-table-background-head` | Background of table header | `white`