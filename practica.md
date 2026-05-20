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

Pregunta 2: Per a què serveix depends_on? Garanteix que el servei estigui operatiu?
depends_on indica a Docker Compose l'ordre d'arrencada dels serveis. En el nostre cas, mongoexpress-botiga depèn de mongodb-botiga, de manera que Docker Compose engega primer el servei de MongoDB i després el de Mongo Express.
Però NO garanteix que MongoDB estigui completament operatiu quan Mongo Express intenta connectar-s'hi. depends_on només espera que el contenidor estigui engegat (l'estat "running"), no que el servei intern hagi acabat d'inicialitzar-se del tot. Per això hem afegit restart: unless-stopped a Mongo Express: si falla en connectar, es reinicia sol fins que MongoDB estigui llest.
Per garantir que el servei està realment operatiu caldria usar depends_on amb condition: service_healthy i definir un healthcheck.

Pregunta 3: Xarxa bridge per defecte vs xarxa personalitzada
AspecteBridge per defecteXarxa personalitzadaResolució de noms❌ No disponible (cal usar IPs)✅ Els contenidors es troben pel nom del serveiAïllamentTots els contenidors de Docker comparteixen la mateixa xarxa per defecteCada compose té la seva pròpia xarxa, aïllada de la restaConfiguracióAutomàtica, sense opcionsConfigurable (driver, subnet, etc.)
En el nostre projecte hem creat xarxa-botiga, una xarxa personalitzada. Gràcies a això, Mongo Express pot referenciar MongoDB simplement amb el hostname mongodb-botiga, sense necessitat de saber la seva IP, que podria canviar en cada arrencada.


