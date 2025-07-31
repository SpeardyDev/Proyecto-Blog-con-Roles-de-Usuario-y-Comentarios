package repository

import "Proyecto-Blog-con-Roles-de-Usuario-y-Comentarios/backend/internal/domain"

type CommentRepository interface {
	Create(comment *domain.Comment) error
	FindByID(id int64) (*domain.Comment, error)
	ListByBlog(blogID int64) ([]domain.Comment, error)
	Delete(id int64) error
}
