package models

import (
	"time"

	"gorm.io/gorm"
)

type Islaida struct {
	gorm.Model
	ID             uint      `gorm:"primaryKey"`
	KategorijaID   *uint     // Optional category ID
	Suma           float64   `gorm:"not null"`
	Data           time.Time `gorm:"not null"`
	Komentaras     string    // Comment
	Pavadinimas    string    `gorm:"not null"` // Name
	MokejimosBudas string    // Payment method

	// Relationships
	Kategorija *Kategorija `gorm:"foreignKey:KategorijaID"`
}
