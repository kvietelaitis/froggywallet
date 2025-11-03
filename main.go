package main

import (
	"os"

	"github.com/KvietelaitisMartynas/froggywallet/controllers"
	"github.com/KvietelaitisMartynas/froggywallet/initializers"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/template/html/v2"
)

func init() {
	initializers.LoadEnvVariables()
	initializers.ConnectToDatabase()
	initializers.SyncDatabase()
}

func main() {
	// load templates
	engine := html.New("./views", ".tmpl")

	// setup app
	app := fiber.New(fiber.Config{
		Views: engine,
	})

	// configure app
	app.Static("/", "./public")

	// setup routes
	frontend_routes := []string{
		"/",
		"/about",
	}

	for _, route := range frontend_routes {
		app.Get(route, controllers.UsersIndex)
	}

	// start app
	app.Listen(":" + os.Getenv("PORT"))
}
