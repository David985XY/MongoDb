# MongoDb

Se trata de poder instalar el mongoDB a cualquier maquina, usando un docker e instalando el propio mongo que es una base de datos nosql.

# Prerequisits

1. Tener descargador el Docker

Para saber la version:

    docker --version
    docker compose version
    git --version

2. Tener un SCV (Sistema de Control de Versiones) GitHub o GitLab y el Docker

    -Instala el git en local

    para verificar la version del Git:
    git --version

# Instalación
    Clona el repositori en remot al teu local. A partir d’aquí pots treballar en el teu repositori
    local. Pots utilitzar un IDE com VS Code per editar els fitxers Markdown.

    Tienes que tener esta estructura:

        practica-mongodb/
        ├── docker-compose.yml # Definició dels serveis
        ├── mongo-init/
        │ └── init.js # Script d'inicialització
        ├── queries/
        │ ├── crud.js # Operacions CRUD
        │ └── advanced.js # Consultes avançades
        ├── data/ # Volum de dades (auto-generat)


                
