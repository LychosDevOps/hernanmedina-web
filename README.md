# hernanmedina-web

Primera versión de la landing page profesional de Hernán Medina para hernanmedina.com.

## Descripción

Landing page estática enfocada en consultoría técnica para redes empresariales, infraestructura, automatización, troubleshooting, documentación técnica, monitoreo, datacenter y operación inteligente.

## Stack

- HTML
- CSS
- JavaScript vanilla

No usa backend, base de datos, frameworks, analítica, formularios funcionales ni dependencias externas.

## Estructura

```text
/index.html
/README.md
/PROJECT_RULES.md
/PROFILE_CONTEXT.md
/CONTENT.md
/css/styles.css
/js/main.js
/assets/images/
/assets/icons/
```

## Probar localmente

La página puede abrirse directamente desde `index.html` en un navegador moderno.

También puede servirse con un servidor estático:

```bash
python -m http.server 8000
```

Luego abrir:

```text
http://localhost:8000
```

## Publicar en Cloudflare Pages

Configuración esperada:

- Framework preset: None
- Build command: vacío
- Build output directory: /

Conectar el repositorio de GitHub a Cloudflare Pages y asociar el dominio oficial:

```text
hernanmedina.com
```

## Contacto

Correo público oficial:

```text
contacto@hernanmedina.com
```

LinkedIn oficial:

```text
https://www.linkedin.com/in/ing-hernan-medina
```

## Pendiente para una segunda versión

- Definir enlace oficial de GitHub si se desea mostrar funcionalmente.
- Evaluar nuevas secciones solo cuando el contenido quede autorizado en `CONTENT.md`.
- Mantener cualquier dato nuevo dentro de `PROJECT_RULES.md`, `PROFILE_CONTEXT.md` o `CONTENT.md` antes de publicarlo.
