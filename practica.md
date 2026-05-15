# Practica

1.2 Preguntes teòriques
Prepara la resposta d’aquestes preguntes i escriu-la al fitxer practica.md. Aquestes preguntes se’t
podran demanar en la validació oral.
1. Quina és la diferència entre docker run i docker compose up?

    docker run serveix per engegar un sol contenidor de forma puntual des de la línia 
    de comandes, especificant totes les opcions (ports, volums, variables d'entorn) manualment 
    cada vegada.

    docker compose up llegeix el fitxer docker-compose.yml i engega tots els serveis definits de cop, 
    amb la configuració ja guardada al fitxer. És molt més còmode quan tens múltiples serveis que han 
    de funcionar junts (com MongoDB + Mongo Express), i a més gestiona automàticament la xarxa entre ells.


2. Per a què serveix la instrucció depends_on? Garanteix que el servei dependent estigui
completament operatiu?



3. Explica quina és la diferència entre una xarxa bridge per defecte i una xarxa
personalitzada (amb nom) a Docker Compose.

