package models

import (
	"gorm.io/gorm"
)

type Skolininkas struct {
	gorm.Model
	ID          uint   `gorm:"primaryKey"`
	PaskolaID   uint   `gorm:"not null"`
	Pavadinimas string `gorm:"not null"` // Name
	ElPastas    string // Email
	TelNr       string // Phone number

	// Relationships
	Paskola Paskola `gorm:"foreignKey:PaskolaID"`
}
