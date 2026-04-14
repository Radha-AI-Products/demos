import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

type AssignmentStatus = 'Pending' | 'Submitted' | 'Overdue';
type AssignmentStatusFilter = 'All' | AssignmentStatus;
type DueDateFilter = 'All dates' | 'Due today' | 'Next 7 days' | 'Next 30 days' | 'Overdue';
type AssignmentUrgency = 'high' | 'medium' | 'low';

interface AssignmentItem {
  id: string;
  title: string;
  course: string;
  dueDate: Date;
  status: AssignmentStatus;
  urgency: AssignmentUrgency;
  module: string;
  estimatedTime: string;
}

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
  ],
})
export class AssignmentsComponent {
  readonly assignments = signal<AssignmentItem[]>(ASSIGNMENT_ITEMS);
  readonly statusFilter = signal<AssignmentStatusFilter>('All');
  readonly dueDateFilter = signal<DueDateFilter>('All dates');
  readonly selectedAssignmentId = signal<string | null>(null);
  readonly displayedColumns: string[] = ['assignment', 'course', 'dueDate', 'status', 'urgency', 'actions'];
  readonly statusOptions: AssignmentStatusFilter[] = ['All', 'Pending', 'Submitted', 'Overdue'];
  readonly dueDateOptions: DueDateFilter[] = ['All dates', 'Due today', 'Next 7 days', 'Next 30 days', 'Overdue'];

  readonly pendingCount = computed(() => this.assignments().filter((assignment) => assignment.status === 'Pending').length);
  readonly submittedCount = computed(() => this.assignments().filter((assignment) => assignment.status === 'Submitted').length);
  readonly overdueCount = computed(() => this.assignments().filter((assignment) => assignment.status === 'Overdue').length);

  readonly filteredAssignments = computed(() => {
    const status = this.statusFilter();
    const dueFilter = this.dueDateFilter();

    return this.assignments().filter((assignment) => {
      const matchesStatus = status === 'All' || assignment.status === status;
      const matchesDueDate = this.matchesDueDateFilter(assignment, dueFilter);

      return matchesStatus && matchesDueDate;
    });
  });

  readonly selectedAssignment = computed(() => {
    const selectedId = this.selectedAssignmentId();

    return this.assignments().find((assignment) => assignment.id === selectedId) ?? null;
  });

  updateStatusFilter(value: AssignmentStatusFilter | null): void {
    this.statusFilter.set(value ?? 'All');
  }

  updateDueDateFilter(value: DueDateFilter | null): void {
    this.dueDateFilter.set(value ?? 'All dates');
  }

  clearFilters(): void {
    this.statusFilter.set('All');
    this.dueDateFilter.set('All dates');
  }

  viewAssignment(assignmentId: string): void {
    this.selectedAssignmentId.set(assignmentId);
  }

  submitAssignment(assignmentId: string): void {
    this.assignments.update((items) =>
      items.map((assignment) =>
        assignment.id === assignmentId
          ? {
              ...assignment,
              status: 'Submitted',
              urgency: 'low',
            }
          : assignment,
      ),
    );
  }

  canSubmit(status: AssignmentStatus): boolean {
    return status === 'Pending' || status === 'Overdue';
  }

  getDueLabel(dueDate: Date, status: AssignmentStatus): string {
    if (status === 'Submitted') {
      return 'Submitted';
    }

    const differenceInDays = this.getDayDifference(dueDate);

    if (differenceInDays < 0) {
      return `${Math.abs(differenceInDays)} day${Math.abs(differenceInDays) === 1 ? '' : 's'} late`;
    }

    if (differenceInDays === 0) {
      return 'Due today';
    }

    if (differenceInDays === 1) {
      return 'Due tomorrow';
    }

    return `${differenceInDays} days left`;
  }

  getUrgencyLabel(urgency: AssignmentUrgency): string {
    if (urgency === 'high') {
      return 'High';
    }

    if (urgency === 'medium') {
      return 'Medium';
    }

    return 'Low';
  }

  getUrgencyIcon(urgency: AssignmentUrgency): string {
    if (urgency === 'high') {
      return 'priority_high';
    }

    if (urgency === 'medium') {
      return 'schedule';
    }

    return 'check_circle';
  }

  getStatusIcon(status: AssignmentStatus): string {
    if (status === 'Submitted') {
      return 'task_alt';
    }

    if (status === 'Overdue') {
      return 'error';
    }

    return 'pending_actions';
  }

  private matchesDueDateFilter(assignment: AssignmentItem, filter: DueDateFilter): boolean {
    const differenceInDays = this.getDayDifference(assignment.dueDate);

    if (filter === 'All dates') {
      return true;
    }

    if (filter === 'Overdue') {
      return assignment.status === 'Overdue';
    }

    if (filter === 'Due today') {
      return differenceInDays === 0;
    }

    if (filter === 'Next 7 days') {
      return differenceInDays >= 0 && differenceInDays <= 7;
    }

    return differenceInDays >= 0 && differenceInDays <= 30;
  }

  private getDayDifference(dueDate: Date): number {
    const today = this.normalizeDate(new Date());
    const due = this.normalizeDate(dueDate);

    return Math.round((due - today) / 86400000);
  }

  private normalizeDate(date: Date): number {
    const normalizedDate = new Date(date);
    normalizedDate.setHours(0, 0, 0, 0);

    return normalizedDate.getTime();
  }
}

function createRelativeDate(daysFromToday: number): Date {
  const date = new Date();
  date.setHours(12, 0, 0, 0);
  date.setDate(date.getDate() + daysFromToday);

  return date;
}

const ASSIGNMENT_ITEMS: AssignmentItem[] = [
  {
    id: 'ux-research-brief',
    title: 'UX Research Brief',
    course: 'Design Thinking Foundations',
    dueDate: createRelativeDate(1),
    status: 'Pending',
    urgency: 'high',
    module: 'Module 3 · User Interviews',
    estimatedTime: '45 min',
  },
  {
    id: 'api-integration-lab',
    title: 'API Integration Lab',
    course: 'Modern Angular in Practice',
    dueDate: createRelativeDate(4),
    status: 'Pending',
    urgency: 'medium',
    module: 'Module 6 · Data Services',
    estimatedTime: '1 hr 20 min',
  },
  {
    id: 'sprint-retrospective',
    title: 'Sprint Retrospective Summary',
    course: 'Agile Delivery Essentials',
    dueDate: createRelativeDate(-2),
    status: 'Overdue',
    urgency: 'high',
    module: 'Module 5 · Collaboration Rituals',
    estimatedTime: '30 min',
  },
  {
    id: 'python-data-cleaning',
    title: 'Data Cleaning Notebook',
    course: 'Python for Data Analysis',
    dueDate: createRelativeDate(7),
    status: 'Pending',
    urgency: 'medium',
    module: 'Module 4 · Working with Pandas',
    estimatedTime: '55 min',
  },
  {
    id: 'product-roadmap-review',
    title: 'Product Roadmap Review',
    course: 'Product Strategy Masterclass',
    dueDate: createRelativeDate(0),
    status: 'Pending',
    urgency: 'high',
    module: 'Module 2 · Prioritization Frameworks',
    estimatedTime: '25 min',
  },
  {
    id: 'sql-query-challenge',
    title: 'SQL Query Challenge',
    course: 'Data Foundations Bootcamp',
    dueDate: createRelativeDate(-5),
    status: 'Submitted',
    urgency: 'low',
    module: 'Module 1 · Query Basics',
    estimatedTime: '40 min',
  },
  {
    id: 'brand-story-deck',
    title: 'Brand Story Deck',
    course: 'Creative Marketing Studio',
    dueDate: createRelativeDate(12),
    status: 'Pending',
    urgency: 'low',
    module: 'Module 7 · Campaign Narrative',
    estimatedTime: '1 hr 5 min',
  },
  {
    id: 'security-audit-checklist',
    title: 'Security Audit Checklist',
    course: 'Cloud Fundamentals',
    dueDate: createRelativeDate(-1),
    status: 'Overdue',
    urgency: 'high',
    module: 'Module 8 · Compliance Controls',
    estimatedTime: '35 min',
  },
];
