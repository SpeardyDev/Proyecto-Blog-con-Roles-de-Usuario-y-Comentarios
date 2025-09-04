import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Blog {
  id: string;
  title: string;
  author?: {
    name?: string;
    avatarUrl?: string;
  };
  coverUrl?: string;
  excerpt: string;
  publishedAt: string; // ISO date
  readTimeMinutes?: number;
  tags?: string[];
  commentsCount?: number;
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list.html',
})
export class List {
  blogs: Blog[] = [
    {
      id: '1',
      title: 'How to improve customer retention in 2025',
      coverUrl: 'https://picsum.photos/800/400?image=1062',
      excerpt: 'Short overview of strategies to increase retention using personalization and loyalty programs.',
      publishedAt: '2025-08-15T10:00:00Z',
      readTimeMinutes: 6,
      tags: ['Retention', 'Marketing'],
      commentsCount: 12
    },
    {
      id: '2',
      title: 'Designing accessible components with Tailwind',
      excerpt: 'Practical tips to make UI components accessible and responsive using Tailwind CSS.',
      publishedAt: '2025-07-20T08:30:00Z',
      readTimeMinutes: 8,
      tags: ['Accessibility', 'UI/UX'],
      commentsCount: 3
    }
  ];

  formatDate(iso: string) {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  }
}
