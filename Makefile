# Build an app for production

build:
	cd frontend && npm run build
	mkdir -p docs/model
	cp backend/pneumonia_model/* docs/model