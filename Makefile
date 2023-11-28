#
#
#

run:
	docker compose up

build:
	docker compose down  --rmi local --remove-orphans
	docker compose rm
	docker compose build
