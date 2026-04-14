import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

type CourseCategory = 'Design' | 'Development' | 'Data' | 'Business' | 'Marketing';
type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced';
type DurationBucket = '0-2h' | '2-6h' | '6+h';
type CategoryFilter = 'All' | CourseCategory;
type LevelFilter = 'All' | CourseLevel;
type DurationFilter = 'Any duration' | DurationBucket;

interface ExploreCourse {
  readonly title: string;
  readonly instructor: string;
  readonly category: CourseCategory;
  readonly level: CourseLevel;
  readonly durationBucket: DurationBucket;
  readonly durationLabel: string;
  readonly rating: number;
  readonly lessons: number;
  readonly thumbnail: string;
  readonly description: string;
  readonly featured: boolean;
  readonly trending: boolean;
}

@Component({
  selector: 'app-explore',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss',
})
export class ExploreComponent {
  readonly categoryFilters: readonly CategoryFilter[] = ['All', 'Design', 'Development', 'Data', 'Business', 'Marketing'];
  readonly levelFilters: readonly LevelFilter[] = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  readonly durationFilters: readonly DurationFilter[] = ['Any duration', '0-2h', '2-6h', '6+h'];

  readonly courses = signal<ExploreCourse[]>([
    {
      title: 'UI Design Systems Essentials',
      instructor: 'Maya Chen',
      category: 'Design',
      level: 'Beginner',
      durationBucket: '2-6h',
      durationLabel: '4h 20m',
      rating: 4.8,
      lessons: 18,
      thumbnail: 'https://placehold.co/640x360?text=Design+Systems',
      description: 'Learn the foundations of scalable interface systems, tokens, and reusable patterns.',
      featured: true,
      trending: true,
    },
    {
      title: 'Angular for Modern Interfaces',
      instructor: 'Daniel Ortiz',
      category: 'Development',
      level: 'Intermediate',
      durationBucket: '6+h',
      durationLabel: '8h 10m',
      rating: 4.9,
      lessons: 26,
      thumbnail: 'https://placehold.co/640x360?text=Angular+Interfaces',
      description: 'Build polished product experiences with component architecture, state, and routing patterns.',
      featured: false,
      trending: true,
    },
    {
      title: 'Data Visualization Fundamentals',
      instructor: 'Amara Lewis',
      category: 'Data',
      level: 'Beginner',
      durationBucket: '2-6h',
      durationLabel: '5h 05m',
      rating: 4.7,
      lessons: 20,
      thumbnail: 'https://placehold.co/640x360?text=Data+Visualization',
      description: 'Turn metrics into clear stories with dashboards, charts, and communication best practices.',
      featured: false,
      trending: false,
    },
    {
      title: 'Product Strategy for Teams',
      instructor: 'Ethan Brooks',
      category: 'Business',
      level: 'Intermediate',
      durationBucket: '2-6h',
      durationLabel: '3h 40m',
      rating: 4.6,
      lessons: 14,
      thumbnail: 'https://placehold.co/640x360?text=Product+Strategy',
      description: 'Align roadmaps, outcomes, and collaboration habits to make smarter product decisions.',
      featured: false,
      trending: false,
    },
    {
      title: 'Growth Marketing Sprint',
      instructor: 'Sofia Kim',
      category: 'Marketing',
      level: 'Beginner',
      durationBucket: '0-2h',
      durationLabel: '1h 50m',
      rating: 4.5,
      lessons: 9,
      thumbnail: 'https://placehold.co/640x360?text=Growth+Marketing',
      description: 'Explore campaign planning, audience positioning, and experimentation for fast-moving teams.',
      featured: false,
      trending: true,
    },
    {
      title: 'Advanced UX Research Synthesis',
      instructor: 'Noah Patel',
      category: 'Design',
      level: 'Advanced',
      durationBucket: '6+h',
      durationLabel: '6h 35m',
      rating: 4.9,
      lessons: 22,
      thumbnail: 'https://placehold.co/640x360?text=UX+Research',
      description: 'Move from raw interviews to insight-backed product decisions using robust synthesis workflows.',
      featured: false,
      trending: false,
    },
    {
      title: 'SQL for Decision Making',
      instructor: 'Liam Walker',
      category: 'Data',
      level: 'Intermediate',
      durationBucket: '2-6h',
      durationLabel: '4h 45m',
      rating: 4.8,
      lessons: 17,
      thumbnail: 'https://placehold.co/640x360?text=SQL+Decision+Making',
      description: 'Query product data, validate assumptions, and answer stakeholder questions with confidence.',
      featured: false,
      trending: false,
    },
    {
      title: 'API Design for Frontend Teams',
      instructor: 'Ava Reynolds',
      category: 'Development',
      level: 'Advanced',
      durationBucket: '6+h',
      durationLabel: '7h 15m',
      rating: 4.7,
      lessons: 24,
      thumbnail: 'https://placehold.co/640x360?text=API+Design',
      description: 'Understand API contracts, payload design, and collaboration patterns that improve UI delivery.',
      featured: false,
      trending: false,
    },
  ]);

  readonly searchQuery = signal('');
  readonly selectedCategory = signal<CategoryFilter>('All');
  readonly selectedLevel = signal<LevelFilter>('All');
  readonly selectedDuration = signal<DurationFilter>('Any duration');

  readonly featuredCourse = computed<ExploreCourse>(() => {
    const featured = this.courses().find((course) => course.featured);
    return featured ?? this.courses()[0];
  });

  readonly trendingCourses = computed<ExploreCourse[]>(() => this.courses().filter((course) => course.trending));

  readonly visibleCourses = computed<ExploreCourse[]>(() => {
    const query = this.searchQuery().trim().toLowerCase();
    const category = this.selectedCategory();
    const level = this.selectedLevel();
    const duration = this.selectedDuration();

    return this.courses().filter((course) => {
      const matchesQuery =
        query.length === 0 ||
        course.title.toLowerCase().includes(query) ||
        course.instructor.toLowerCase().includes(query) ||
        course.category.toLowerCase().includes(query);
      const matchesCategory = category === 'All' || course.category === category;
      const matchesLevel = level === 'All' || course.level === level;
      const matchesDuration = duration === 'Any duration' || course.durationBucket === duration;

      return matchesQuery && matchesCategory && matchesLevel && matchesDuration;
    });
  });

  updateSearch(value: string): void {
    this.searchQuery.set(value);
  }

  updateCategory(value: string): void {
    if (this.categoryFilters.includes(value as CategoryFilter)) {
      this.selectedCategory.set(value as CategoryFilter);
    }
  }

  updateLevel(value: string): void {
    if (this.levelFilters.includes(value as LevelFilter)) {
      this.selectedLevel.set(value as LevelFilter);
    }
  }

  updateDuration(value: string): void {
    if (this.durationFilters.includes(value as DurationFilter)) {
      this.selectedDuration.set(value as DurationFilter);
    }
  }

  selectQuickCategory(category: CategoryFilter): void {
    this.selectedCategory.set(category);
  }
}
