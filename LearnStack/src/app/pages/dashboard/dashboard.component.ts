import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';

interface CourseCard {
  readonly title: string;
  readonly category: string;
  readonly lessons: number;
  readonly progress: number;
}

interface ExploreCourse {
  readonly title: string;
  readonly subtitle: string;
  readonly duration: string;
}

interface AssignmentItem {
  readonly title: string;
  readonly course: string;
  readonly due: string;
}

interface ActivityBar {
  readonly day: string;
  readonly value: number;
}

@Component({
  selector: 'app-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatChipsModule,
    MatDividerModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  readonly continueLearning = signal<CourseCard>({
    title: 'Advanced UX Writing',
    category: 'Design Communication',
    lessons: 24,
    progress: 68,
  });

  readonly myCourses = signal<CourseCard[]>([
    { title: 'Product Design Basics', category: 'Design', lessons: 18, progress: 42 },
    { title: 'Frontend Foundations', category: 'Development', lessons: 30, progress: 81 },
    { title: 'Data Storytelling', category: 'Analytics', lessons: 14, progress: 55 },
    { title: 'Team Leadership', category: 'Career', lessons: 12, progress: 23 },
  ]);

  readonly exploreCourses = signal<ExploreCourse[]>([
    { title: 'AI for Beginners', subtitle: 'Interactive foundations', duration: '6 weeks' },
    { title: 'Visual Design Systems', subtitle: 'Build scalable interfaces', duration: '4 weeks' },
    { title: 'Motion in UI', subtitle: 'Create polished interactions', duration: '3 weeks' },
    { title: 'SQL Essentials', subtitle: 'Query real datasets', duration: '5 weeks' },
  ]);

  readonly assignments = signal<AssignmentItem[]>([
    { title: 'Submit wireframe critique', course: 'Product Design Basics', due: 'Today, 5:00 PM' },
    { title: 'Quiz: JavaScript modules', course: 'Frontend Foundations', due: 'Tomorrow, 10:00 AM' },
    { title: 'Record insight presentation', course: 'Data Storytelling', due: 'Friday, 2:00 PM' },
  ]);

  readonly activity = signal<ActivityBar[]>([
    { day: 'Mon', value: 45 },
    { day: 'Tue', value: 70 },
    { day: 'Wed', value: 58 },
    { day: 'Thu', value: 82 },
    { day: 'Fri', value: 60 },
    { day: 'Sat', value: 36 },
    { day: 'Sun', value: 50 },
  ]);

  readonly totalInProgress = computed((): number => this.myCourses().length + 1);

  barHeight(value: number): number {
    return Math.max(value, 16);
  }
}
