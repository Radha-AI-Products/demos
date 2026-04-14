import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';

interface EnrolledCourse {
  readonly title: string;
  readonly instructor: string;
  readonly category: 'Design' | 'Development' | 'Data' | 'Business';
  readonly progress: number;
  readonly thumbnail: string;
  readonly nextLesson: string;
}

type CourseCategory = 'All' | EnrolledCourse['category'];
type SortOption = 'progress-desc' | 'progress-asc' | 'title-asc';

@Component({
  selector: 'app-my-courses',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatProgressBarModule,
    MatSelectModule,
  ],
  templateUrl: './my-courses.component.html',
  styleUrl: './my-courses.component.scss',
})
export class MyCoursesComponent {
  readonly courses = signal<EnrolledCourse[]>([
    {
      title: 'Frontend Foundations',
      instructor: 'Maya Chen',
      category: 'Development',
      progress: 81,
      thumbnail: 'https://placehold.co/640x360?text=Frontend+Foundations',
      nextLesson: 'State management patterns',
    },
    {
      title: 'Product Design Basics',
      instructor: 'Noah Patel',
      category: 'Design',
      progress: 42,
      thumbnail: 'https://placehold.co/640x360?text=Product+Design+Basics',
      nextLesson: 'User journey mapping',
    },
    {
      title: 'Data Storytelling',
      instructor: 'Amara Lewis',
      category: 'Data',
      progress: 55,
      thumbnail: 'https://placehold.co/640x360?text=Data+Storytelling',
      nextLesson: 'Narrative dashboards',
    },
    {
      title: 'Leadership for Teams',
      instructor: 'Ethan Brooks',
      category: 'Business',
      progress: 23,
      thumbnail: 'https://placehold.co/640x360?text=Leadership+for+Teams',
      nextLesson: 'Feedback that scales',
    },
    {
      title: 'Advanced UX Writing',
      instructor: 'Sofia Kim',
      category: 'Design',
      progress: 68,
      thumbnail: 'https://placehold.co/640x360?text=Advanced+UX+Writing',
      nextLesson: 'Writing for empty states',
    },
    {
      title: 'SQL Essentials',
      instructor: 'Liam Walker',
      category: 'Data',
      progress: 36,
      thumbnail: 'https://placehold.co/640x360?text=SQL+Essentials',
      nextLesson: 'Joining real datasets',
    },
    {
      title: 'Motion in UI',
      instructor: 'Ava Reynolds',
      category: 'Design',
      progress: 74,
      thumbnail: 'https://placehold.co/640x360?text=Motion+in+UI',
      nextLesson: 'Micro-interaction timing',
    },
    {
      title: 'AI for Beginners',
      instructor: 'Daniel Ortiz',
      category: 'Development',
      progress: 17,
      thumbnail: 'https://placehold.co/640x360?text=AI+for+Beginners',
      nextLesson: 'Prompt structure basics',
    },
  ]);

  readonly selectedCategory = signal<CourseCategory>('All');
  readonly selectedSort = signal<SortOption>('progress-desc');

  readonly categoryOptions = computed<CourseCategory[]>(() => ['All', 'Design', 'Development', 'Data', 'Business']);

  readonly visibleCourses = computed<EnrolledCourse[]>(() => {
    const category = this.selectedCategory();
    const sort = this.selectedSort();

    const filteredCourses = this.courses().filter((course) => category === 'All' || course.category === category);
    const sortedCourses = [...filteredCourses];

    switch (sort) {
      case 'progress-asc':
        sortedCourses.sort((first, second) => first.progress - second.progress);
        break;
      case 'title-asc':
        sortedCourses.sort((first, second) => first.title.localeCompare(second.title));
        break;
      case 'progress-desc':
      default:
        sortedCourses.sort((first, second) => second.progress - first.progress);
        break;
    }

    return sortedCourses;
  });

  updateCategory(value: string): void {
    this.selectedCategory.set(value as CourseCategory);
  }

  updateSort(value: string): void {
    this.selectedSort.set(value as SortOption);
  }
}
