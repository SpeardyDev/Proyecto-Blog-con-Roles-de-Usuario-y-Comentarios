package usecase

import (
	"Proyecto-Blog-con-Roles-de-Usuario-y-Comentarios/backend/internal/domain"
	"Proyecto-Blog-con-Roles-de-Usuario-y-Comentarios/backend/internal/repository"
)

type AuthUsecase struct {
	UserRepo repository.UserRepository
}

func (a *AuthUsecase) Login(username, password string) (*domain.User, error) {
	// Implementar lógica de autenticación
	return nil, nil
}

func (a *AuthUsecase) Register(user *domain.User) error {
	// Implementar lógica de registro
	return nil
}
