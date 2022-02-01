# Widget Formulario React para Avon MAS


# USO

```
 pacificaConcursoWidget({options})
```

## Options (obligatorio):

- `country` :  required - string - 'co' | 'pe' | 'ec'
- (depreciado a partir de v.2) `imagesPath` : required - string - url base for image assets. ej:
  `"https://cdn.jsdelivr.net/gh/pacificosas/Avon-MAS-formulario-consurso-widget@0/assets/co"`
  
- `container`: optional - HTML node - default = null 
- `selector`: optional - string - selector css del contenedor del widget, es
  ignorado si container es seteado - default = `"#pacificaConcursoWidget"` 


## Ej:
  
```
  // index.html


  <div id="pacificaConcursoWidget"></div>


  <script>
    window.addEventListener('load',function(){
      pacificaConcursoWidget({
        country:"co",
      })
    })
  </script>
```

# Versiones

## V.1 

> corcurso 22 al 25 de octubre 2021

### Campos:

- nombre
- primer appelido
- segundo apellido
- instagram
- email
- fecha de nacimiento
- celular
- tipo de documento de identidad
- documento identidad
- aceptar terminos y condiciones
- aceptar news letter
- departamento
- ciudad
- pueblo
- frase adicional

## V.2

> corcurso 2 al 10 de Febrero 2021

- **Depreciado:** ~~`Options.imagesPath`~~
  ya no gestiona imagenes, ni otro contenido, solo el formlario


### Campos:

- **Nuevo:** direccion 
- **Depreciado:** ~~instagram~~
- **Depreciado:** ~~frase adicional~~