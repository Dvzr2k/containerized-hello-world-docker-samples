# Dockerized Hello World Applications

Repository with Docker configurations for setting up Hello World web applications in three different programming languages: Java, Python, and JavaScript. 

## Prerequisites

- Docker

## Usage

1. Clone this repository to your local machine:
   ```sh
   git clone https://github.com/Dvzr2k/containerized-hello-world-docker-samples.git
   cd containerized-hello-world-docker-samples
   
2. Navigate to the directory of the aplication and execute
- For Java
   ```sh
   cd hello-world-java
   docker build -t dvzr032/hello-world-java:0.0.1.V .
   docker run -p 5000:5000 -d dvzr032/hello-world-java:0.0.1.V 
   
- For Python
   ```sh
   cd hello-world-python
   docker build -t dvzr032/hello-world-python:0.0.1.V .
   docker run -p 5001:5000 -d dvzr032/hello-world-python:0.0.1.V 
   
- For JavaScript
   ```sh
   cd hello-world-nodejs
   docker build -t dvzr032/hello-world-nodejs:0.0.1.V .
   docker run -p 5000:5000 -d dvzr032/hello-world-nodejs:0.0.1.V 

   
3. Verify the web
   
   ![image](https://github.com/user-attachments/assets/88cf771f-91dc-4b0e-8f4d-b23420b545e7)

   ![image](https://github.com/user-attachments/assets/edfa63ad-3ec7-48df-b971-17be7dd8869c)

   ![image](https://github.com/user-attachments/assets/cb11fb18-d265-4f15-97de-baf07dd804f9)
4. Dockerhub
   You can also check the repositories in dockerhub
   
   ![image](https://github.com/user-attachments/assets/bfce2339-7dcf-4a31-b74d-e90581cbac4b)



  

  

   

   

   
   
   
   
