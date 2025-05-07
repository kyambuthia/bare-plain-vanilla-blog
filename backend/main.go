package main

import (
        "net/http"
        "log"
        "time"
        "fmt"
)

func main() {
        mux := http.NewServeMux()

		// static file route handler.
        mux.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("../frontend/assets/"))))

        // frontend route handler.
		mux.Handle("/",  http.FileServer(http.Dir("../frontend")))

        srv := &http.Server{
                Handler: mux,
                Addr: "127.0.0.1:8000",
                WriteTimeout: 15 * time.Second,
                ReadTimeout: 15 * time.Second,
        }

        fmt.Printf("\n---\nServer is running locally at ADDR: http://%s \nCTRL-C to stop the server\n", srv.Addr)

        log.Fatal(srv.ListenAndServe())
}
