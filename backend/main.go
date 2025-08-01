package main

import (
	"blog-backend/internal/config"
	"log"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	// Cargar variables de entorno desde .env
	err := godotenv.Load()
	if err != nil {
		log.Println("No se pudo cargar el archivo .env, usando variables de entorno del sistema")
	}

	db, err := config.ConnectDB()
	if err != nil {
		log.Fatalf("Error conectando a la base de datos: %v", err)
	}
	defer db.Close()

	r := gin.Default()
	r.GET("/", func(c *gin.Context) {
		c.String(200, "Bienvenido al backend del blog!")
	})
	r.GET("/login", func(ctx *gin.Context) {
		ctx.String(200, "Endpoint de login disponible. Usa POST para autenticar.")
	})
	r.POST("/login", func(ctx *gin.Context) {
		var req struct {
			Username string `json:"username"`
			Password string `json:"password"`
		}
		if err := ctx.ShouldBindJSON(&req); err != nil {
			ctx.JSON(400, gin.H{"error": "Datos inválidos"})
			return
		}
		// Aquí iría la lógica real de autenticación
		ctx.JSON(200, gin.H{
			"message":  "Login recibido",
			"username": req.Username,
		})
	})
	r.GET("/health", func(c *gin.Context) {
		if err := db.Ping(); err != nil {
			c.JSON(500, gin.H{"status": "error", "db": "no conectado"})
			return
		}
		c.JSON(200, gin.H{"status": "ok", "db": "conectado"})
	})
	r.Run() // por defecto en :8080
}
