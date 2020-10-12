# Build an app for GitHub Pages

build:
	cd frontend && npm run build
	mkdir -p docs/model
	cp -r backend/pneumonia_model/* docs/model
	cd frontend && cp -r dist/* ../docs
