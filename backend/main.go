package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {

	http.Handle("/", http.FileServer(http.Dir("./frontend/dist")))
	http.Handle("/model/", http.StripPrefix("/model", http.FileServer(http.Dir("./backend/pneumonia_model"))))
	fmt.Println("Initializing app on port 9000")
	srvErr := http.ListenAndServe(":9000", nil)
	if srvErr == nil {
		fmt.Println("Server running on port 9000")
	} else {
		log.Fatal("System unable to start: ", srvErr)
	}
	log.Fatal("Unable to establish connection")
}
