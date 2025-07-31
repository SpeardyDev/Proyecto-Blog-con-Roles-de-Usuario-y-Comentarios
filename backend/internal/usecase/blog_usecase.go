package usecase

import (
	"Proyecto-Blog-con-Roles-de-Usuario-y-Comentarios/backend/internal/domain"
	"Proyecto-Blog-con-Roles-de-Usuario-y-Comentarios/backend/internal/repository"
)

type BlogUsecase struct {
	BlogRepo repository.BlogRepository
}

func (b *BlogUsecase) Create(blog *domain.Blog) error {
	// Implementar lógica de creación de blog
	return nil
}

func (b *BlogUsecase) List() ([]domain.Blog, error) {
	// Implementar lógica de listado de blogs
	return nil, nil
}
