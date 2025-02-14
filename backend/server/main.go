package main

include (
        "net/http"
        "log"
        "time"
)

func main() {
       fileHandler = http.FileServer(http.Dir("../frontend"))


}
