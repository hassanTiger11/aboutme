build:
	docker build -t hassantiger11 .
run:
	docker run -dp 3000:3000 hassantiger11


aws-1:
	aws ecr create-repository --repository-name hassantiger11 --region us-east-2
