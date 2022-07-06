# WordsEnigma
Wordle in multi languague


## Create Postgres Database Docker
docker run --name=db -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin -p '5432:5432' -d postgres