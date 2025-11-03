package controllers

import "github.com/gofiber/fiber/v2"

func UsersIndex(c *fiber.Ctx) error {
	return c.Render("users/index", fiber.Map{
		"hello": "world",
	})
}
