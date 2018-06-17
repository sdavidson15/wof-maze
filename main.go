package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	restURI := ":8080"

	router := mux.NewRouter().StrictSlash(true)
	router.PathPrefix("/").Handler(http.FileServer(http.Dir("./frontend")))
	log.Print(fmt.Sprintf("Serving on %s", restURI))
	log.Fatal(http.ListenAndServe(restURI, router))
}