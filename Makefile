CHECK_FILES?=./...
VERSION = 0.0.1

docker-build:
	docker build --rm -t python-reset-flow:$(VERSION) .

docker-remove:
	docker stop python-reset-flow-app
	docker rm python-reset-flow-app

docker-stop:
	docker stop python-reset-flow-app

docker-run:
	docker run -d -p 8080:8000 -e SUPABASE_URL=http://host.docker.internal:54321 -e SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0 --name python-reset-flow-app python-reset-flow:$(VERSION)