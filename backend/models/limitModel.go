package models

import (
	"gorm.io/gorm"
)

type Riba struct {
	gorm.Model
	ID           uint   `gorm:"primaryKey"`
	BiudzetasID  uint   `gorm:"not null"`
	KategorijaID *uint  // Optional category ID
	Pavadinimas  string `gorm:"not null"` // Name
	Procentas    int    `gorm:"not null"` // Percentage

	// Relationships
	Biudzetas  Biudzetas   `gorm:"foreignKey:BiudzetasID"`
	Kategorija *Kategorija `gorm:"foreignKey:KategorijaID"`
}
