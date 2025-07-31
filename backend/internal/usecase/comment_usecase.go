package usecase

import (
	"Proyecto-Blog-con-Roles-de-Usuario-y-Comentarios/backend/internal/domain"
	"Proyecto-Blog-con-Roles-de-Usuario-y-Comentarios/backend/internal/repository"
)

type CommentUsecase struct {
	CommentRepo repository.CommentRepository
}

func (c *CommentUsecase) Create(comment *domain.Comment) error {
	// Implementar lógica de creación de comentario
	return nil
}

func (c *CommentUsecase) ListByBlog(blogID int64) ([]domain.Comment, error) {
	// Implementar lógica de listado de comentarios por blog
	return nil, nil
}
