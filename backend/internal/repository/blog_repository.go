package repository

import "Proyecto-Blog-con-Roles-de-Usuario-y-Comentarios/backend/internal/domain"

type BlogRepository interface {
	Create(blog *domain.Blog) error
	FindByID(id int64) (*domain.Blog, error)
	List() ([]domain.Blog, error)
	Update(blog *domain.Blog) error
	Delete(id int64) error
}
