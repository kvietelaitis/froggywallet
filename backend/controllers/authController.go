package controllers

import (
	"github.com/KvietelaitisMartynas/froggywallet/backend/initializers"
	"github.com/KvietelaitisMartynas/froggywallet/backend/models"
	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

type LoginRequest struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

type RegisterRequest struct {
	Vardas          string `json:"vardas"`
	Pavarde         string `json:"pavarde"`
	ElPastas        string `json:"el_pastas"`
	Slaptazodis     string `json:"slaptazodis"`
	VartotojoVardas string `json:"vartotojo_vardas"`
}

func Login(c *fiber.Ctx) error {
	var body LoginRequest

	if err := c.BodyParser(&body); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Cannot parse JSON",
		})
	}

	var user models.Narys

	if err := initializers.DB.Where("el_pastas = ?", body.Email).First(&user).Error; err != nil {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"error": "Invalid email or password",
		})
	}

	// Compare password (you'll need to hash passwords when creating users)
	if err := bcrypt.CompareHashAndPassword([]byte(user.Slaptazodis), []byte(body.Password)); err != nil {
		return c.Status(401).JSON(fiber.Map{
			"status":  "error",
			"message": "Invalid credentials",
		})
	}

	return c.JSON(fiber.Map{
		"status":  "success",
		"message": "Login successful",
		"data": fiber.Map{
			"id":      user.ID,
			"email":   user.ElPastas,
			"vardas":  user.Vardas,
			"pavarde": user.Pavarde,
		},
	})
}

func Register(c *fiber.Ctx) error {
	var body RegisterRequest

	if err := c.BodyParser(&body); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Cannot parse JSON",
		})
	}

	var existing models.Narys
	if err := initializers.DB.Where("el_pastas = ?", body.ElPastas).First(&existing).Error; err == nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Email already in use",
		})
	}

	hashed, err := bcrypt.GenerateFromPassword([]byte(body.Slaptazodis), 10)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to hash password",
		})
	}

	user := models.Narys{
		Vardas:          body.Vardas,
		Pavarde:         body.Pavarde,
		ElPastas:        body.ElPastas,
		Slaptazodis:     string(hashed),
		VartotojoVardas: body.VartotojoVardas,
	}

	if err := initializers.DB.Create(&user).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error":   "Failed to create user",
			"details": err.Error(),
		})
	}

	return c.JSON(fiber.Map{
		"status":  "success",
		"message": "User registered successfully",
		"data": fiber.Map{
			"id":      user.ID,
			"email":   user.ElPastas,
			"vardas":  user.Vardas,
			"pavarde": user.Pavarde,
		},
	})
}
