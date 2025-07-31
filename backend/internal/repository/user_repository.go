package repository

import "Proyecto-Blog-con-Roles-de-Usuario-y-Comentarios/backend/internal/domain"

type UserRepository interface {
	Create(user *domain.User) error
	FindByUsername(username string) (*domain.User, error)
	FindByID(id int64) (*domain.User, error)
	List() ([]domain.User, error)
}
