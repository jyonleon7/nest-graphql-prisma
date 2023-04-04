up:
	docker-compose up -d

postgres:
	docker-compose exec postgres psql -U user testdb