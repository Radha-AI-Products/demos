import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';

interface LessonNote {
  readonly title: string;
  readonly content: string;
}

interface DiscussionItem {
  readonly author: string;
  readonly role: string;
  readonly message: string;
  readonly time: string;
}

interface LessonResource {
  readonly title: string;
  readonly kind: string;
  readonly detail: string;
  readonly icon: string;
}

interface CourseLesson {
  readonly id: string;
  readonly title: string;
  readonly type: 'Video' | 'Workshop' | 'Reading';
  readonly duration: string;
  readonly description: string;
  readonly thumbnail: string;
  readonly notes: readonly LessonNote[];
  readonly discussion: readonly DiscussionItem[];
  readonly resources: readonly LessonResource[];
  readonly completed: boolean;
}

interface CourseModule {
  readonly id: string;
  readonly title: string;
  readonly summary: string;
  readonly lessons: readonly CourseLesson[];
}

interface LessonNode extends CourseLesson {
  readonly moduleId: string;
  readonly moduleTitle: string;
}

@Component({
  selector: 'app-learn',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressBarModule,
    MatTabsModule,
  ],
  templateUrl: './learn.component.html',
  styleUrl: './learn.component.scss',
})
export class LearnComponent {
  readonly courseTitle = 'Product Design Sprint';
  readonly courseSubtitle = 'Learn a focused framework for research, ideation, prototyping, and presenting polished product decisions.';

  readonly modules = signal<CourseModule[]>([
    {
      id: 'module-1',
      title: 'Getting Oriented',
      summary: 'Set expectations, align on outcomes, and prepare your workflow.',
      lessons: [
        {
          id: 'lesson-1',
          title: 'Welcome to the Sprint',
          type: 'Video',
          duration: '06 min',
          description: 'Meet your instructor, understand the sprint structure, and learn how each module builds toward a complete product design case study.',
          thumbnail: 'https://placehold.co/1280x720?text=Welcome+to+the+Sprint',
          completed: true,
          notes: [
            { title: 'What this course covers', content: 'The sprint moves from framing a problem to validating a polished prototype through short, practical lessons.' },
            { title: 'How to use the lessons', content: 'Follow lessons in sequence and keep notes beside each module so you can reuse the framework on future projects.' },
          ],
          discussion: [
            { author: 'Ava Reynolds', role: 'Instructor', message: 'Introduce yourself and share the product challenge you want to work on during the course.', time: '2 hours ago' },
            { author: 'Jordan Miles', role: 'Learner', message: 'I am applying the sprint structure to improve onboarding in a fintech app.', time: '50 minutes ago' },
          ],
          resources: [
            { title: 'Sprint roadmap', kind: 'PDF', detail: '2 pages', icon: 'description' },
            { title: 'Course workspace checklist', kind: 'Template', detail: 'Notion copy', icon: 'checklist' },
          ],
        },
        {
          id: 'lesson-2',
          title: 'Setting Your Learning Goals',
          type: 'Reading',
          duration: '08 min',
          description: 'Clarify your desired outcome, identify constraints, and define a measurable goal for the product you will explore throughout the sprint.',
          thumbnail: 'https://placehold.co/1280x720?text=Setting+Your+Learning+Goals',
          completed: true,
          notes: [
            { title: 'Outcome first', content: 'A concrete outcome keeps each design choice grounded in user value and business context.' },
            { title: 'Keep scope tight', content: 'Choose one flow, one audience, and one measurable improvement for the strongest learning experience.' },
          ],
          discussion: [
            { author: 'Mina Park', role: 'Learner', message: 'I narrowed my goal to improving first-session activation for new users.', time: 'Yesterday' },
          ],
          resources: [
            { title: 'Goal framing worksheet', kind: 'Template', detail: 'Editable board', icon: 'dashboard_customize' },
          ],
        },
        {
          id: 'lesson-3',
          title: 'Project Setup Essentials',
          type: 'Workshop',
          duration: '12 min',
          description: 'Organize your files, prepare your references, and create a repeatable structure that keeps the sprint distraction-free from lesson to lesson.',
          thumbnail: 'https://placehold.co/1280x720?text=Project+Setup+Essentials',
          completed: true,
          notes: [
            { title: 'Single source of truth', content: 'Keep research, sketches, and feedback in one place to reduce context switching.' },
            { title: 'Template stack', content: 'Prepare boards and folders before you begin deep work so the learning flow stays focused.' },
          ],
          discussion: [
            { author: 'Ava Reynolds', role: 'Instructor', message: 'Share a screenshot of your project structure if you want feedback before moving on.', time: 'Yesterday' },
          ],
          resources: [
            { title: 'Folder structure guide', kind: 'PDF', detail: '1 page', icon: 'folder' },
            { title: 'Reference board starter', kind: 'Template', detail: 'Figma file', icon: 'view_quilt' },
          ],
        },
      ],
    },
    {
      id: 'module-2',
      title: 'Research & Framing',
      summary: 'Turn observations into clear design opportunities and user needs.',
      lessons: [
        {
          id: 'lesson-4',
          title: 'Research Questions That Matter',
          type: 'Video',
          duration: '11 min',
          description: 'Build a short set of research questions that reveal pain points, motivations, and moments of friction without overcomplicating your study.',
          thumbnail: 'https://placehold.co/1280x720?text=Research+Questions+That+Matter',
          completed: true,
          notes: [
            { title: 'Questions should reveal behavior', content: 'Avoid asking for opinions only; ask for stories, steps, and recent examples.' },
            { title: 'Prioritize decision-making', content: 'Each question should help you make a better product decision later in the sprint.' },
          ],
          discussion: [
            { author: 'Leo Grant', role: 'Learner', message: 'Swapping generic questions for scenario-based prompts gave me much clearer answers.', time: '6 hours ago' },
          ],
          resources: [
            { title: 'Interview question bank', kind: 'PDF', detail: '3 pages', icon: 'quiz' },
          ],
        },
        {
          id: 'lesson-5',
          title: 'Running Lightweight Interviews',
          type: 'Video',
          duration: '14 min',
          description: 'Learn a simple structure for short interviews that helps you uncover intent, hesitation, and unmet expectations in a reliable way.',
          thumbnail: 'https://placehold.co/1280x720?text=Running+Lightweight+Interviews',
          completed: false,
          notes: [
            { title: 'Warm-up first', content: 'Start with easy context questions to build comfort before you ask about friction and goals.' },
            { title: 'Probe for specifics', content: 'Ask follow-up questions about time, effort, and workarounds to expose the real issue behind a complaint.' },
          ],
          discussion: [
            { author: 'Ava Reynolds', role: 'Instructor', message: 'What is one follow-up question that consistently leads to better insight in your interviews?', time: '40 minutes ago' },
            { author: 'Chris Lane', role: 'Learner', message: 'I now ask what users tried before finding the current solution and it reveals hidden expectations.', time: '15 minutes ago' },
          ],
          resources: [
            { title: 'Interview note template', kind: 'Template', detail: 'Duplicate link', icon: 'note_alt' },
            { title: 'Consent checklist', kind: 'Guide', detail: 'Quick reference', icon: 'fact_check' },
          ],
        },
        {
          id: 'lesson-6',
          title: 'Synthesizing Key Insights',
          type: 'Workshop',
          duration: '13 min',
          description: 'Cluster quotes, patterns, and recurring blockers into themes that directly inform the problem statement for your sprint.',
          thumbnail: 'https://placehold.co/1280x720?text=Synthesizing+Key+Insights',
          completed: false,
          notes: [
            { title: 'Group by signal, not by transcript', content: 'Organize notes into themes such as trust, clarity, speed, or confidence instead of meeting order.' },
            { title: 'Name the tension', content: 'Strong synthesis highlights the gap between what users need and what the product currently delivers.' },
          ],
          discussion: [
            { author: 'Dana Cole', role: 'Learner', message: 'Affinity clustering helped me see that onboarding confusion was really a trust issue.', time: 'Today' },
          ],
          resources: [
            { title: 'Synthesis board template', kind: 'Template', detail: 'Sticky note board', icon: 'grid_view' },
          ],
        },
      ],
    },
    {
      id: 'module-3',
      title: 'Ideation & Prototyping',
      summary: 'Move from insights to concepts and polished interaction flows.',
      lessons: [
        {
          id: 'lesson-7',
          title: 'From Insight to Opportunity',
          type: 'Reading',
          duration: '09 min',
          description: 'Translate research themes into opportunity statements that are ambitious enough to inspire ideas and narrow enough to design against.',
          thumbnail: 'https://placehold.co/1280x720?text=From+Insight+to+Opportunity',
          completed: false,
          notes: [
            { title: 'Opportunity statements', content: 'Phrase them around helping a user make progress with less effort, uncertainty, or delay.' },
          ],
          discussion: [
            { author: 'Ava Reynolds', role: 'Instructor', message: 'Post your opportunity statement if you want a quick clarity check from the group.', time: 'Today' },
          ],
          resources: [
            { title: 'Opportunity statement examples', kind: 'PDF', detail: '2 pages', icon: 'lightbulb' },
          ],
        },
        {
          id: 'lesson-8',
          title: 'Sketching Product Concepts',
          type: 'Workshop',
          duration: '16 min',
          description: 'Use timed sketching exercises to explore multiple directions quickly before selecting one concept to prototype.',
          thumbnail: 'https://placehold.co/1280x720?text=Sketching+Product+Concepts',
          completed: false,
          notes: [
            { title: 'Quantity before polish', content: 'Generate several directions rapidly so your first idea does not become your only idea.' },
          ],
          discussion: [
            { author: 'Marco Silva', role: 'Learner', message: 'The timed sketching forced me to think beyond the obvious dashboard approach.', time: 'Today' },
          ],
          resources: [
            { title: 'Crazy eights worksheet', kind: 'Template', detail: 'Printable PDF', icon: 'draw' },
          ],
        },
        {
          id: 'lesson-9',
          title: 'Building the Prototype',
          type: 'Video',
          duration: '18 min',
          description: 'Turn the strongest concept into a simple prototype that communicates value, direction, and interaction logic without unnecessary detail.',
          thumbnail: 'https://placehold.co/1280x720?text=Building+the+Prototype',
          completed: false,
          notes: [
            { title: 'Prototype for learning', content: 'Only design what you need to test your core assumption and keep everything else lightweight.' },
          ],
          discussion: [
            { author: 'Jules Tan', role: 'Learner', message: 'Reducing the number of screens made feedback sessions much clearer.', time: 'Today' },
          ],
          resources: [
            { title: 'Prototype checklist', kind: 'Guide', detail: '5 items', icon: 'check_circle' },
          ],
        },
      ],
    },
    {
      id: 'module-4',
      title: 'Review & Present',
      summary: 'Refine your narrative, package the work, and prepare next steps.',
      lessons: [
        {
          id: 'lesson-10',
          title: 'Testing the Flow',
          type: 'Video',
          duration: '12 min',
          description: 'Run a fast feedback loop to validate whether the prototype solves the intended problem and where it still falls short.',
          thumbnail: 'https://placehold.co/1280x720?text=Testing+the+Flow',
          completed: false,
          notes: [
            { title: 'Observe reactions', content: 'Pay close attention to hesitation and moments when a participant asks for reassurance.' },
          ],
          discussion: [
            { author: 'Ava Reynolds', role: 'Instructor', message: 'What surprised you most during your first round of testing?', time: 'Today' },
          ],
          resources: [
            { title: 'Test script', kind: 'Guide', detail: 'Interview prompts', icon: 'forum' },
          ],
        },
        {
          id: 'lesson-11',
          title: 'Documenting Design Decisions',
          type: 'Reading',
          duration: '10 min',
          description: 'Capture why each design decision was made so your case study reads clearly and your team can build from your work with confidence.',
          thumbnail: 'https://placehold.co/1280x720?text=Documenting+Design+Decisions',
          completed: false,
          notes: [
            { title: 'Decision logs', content: 'Write short rationales that connect the user problem, insight, and chosen solution.' },
          ],
          discussion: [
            { author: 'Noa Patel', role: 'Learner', message: 'Writing a brief rationale for each screen made my presentation feel more strategic.', time: 'Today' },
          ],
          resources: [
            { title: 'Case study outline', kind: 'Template', detail: 'Slide deck', icon: 'slideshow' },
          ],
        },
        {
          id: 'lesson-12',
          title: 'Presenting Your Sprint Outcome',
          type: 'Workshop',
          duration: '15 min',
          description: 'Package the story, communicate the outcome, and define the next experiment or handoff after the sprint is complete.',
          thumbnail: 'https://placehold.co/1280x720?text=Presenting+Your+Sprint+Outcome',
          completed: false,
          notes: [
            { title: 'Tell a clear arc', content: 'Frame the story around the problem, insight, design response, and what you learned from testing.' },
          ],
          discussion: [
            { author: 'Ava Reynolds', role: 'Instructor', message: 'Share your final presentation takeaway with the cohort once you finish the course.', time: 'Today' },
          ],
          resources: [
            { title: 'Presentation checklist', kind: 'Guide', detail: 'Final pass', icon: 'task_alt' },
          ],
        },
      ],
    },
  ]);

  readonly currentLessonId = signal<string>('lesson-5');

  readonly lessonSequence = computed<LessonNode[]>(() =>
    this.modules().flatMap((module) =>
      module.lessons.map((lesson) => ({
        ...lesson,
        moduleId: module.id,
        moduleTitle: module.title,
      })),
    ),
  );

  readonly totalLessonCount = computed<number>(() => this.lessonSequence().length);

  readonly completedLessonCount = computed<number>(() =>
    this.lessonSequence().filter((lesson) => lesson.completed).length,
  );

  readonly courseProgress = computed<number>(() =>
    Math.round((this.completedLessonCount() / this.totalLessonCount()) * 100),
  );

  readonly currentLesson = computed<LessonNode>(() => {
    const sequence = this.lessonSequence();
    return sequence.find((lesson) => lesson.id === this.currentLessonId()) ?? sequence[0];
  });

  readonly currentLessonIndex = computed<number>(() =>
    this.lessonSequence().findIndex((lesson) => lesson.id === this.currentLessonId()),
  );

  readonly currentLessonNumber = computed<number>(() => this.currentLessonIndex() + 1);

  readonly currentModuleId = computed<string>(() => this.currentLesson().moduleId);

  readonly previousLesson = computed<LessonNode | null>(() => {
    const index = this.currentLessonIndex();
    const sequence = this.lessonSequence();
    return index > 0 ? sequence[index - 1] : null;
  });

  readonly nextLesson = computed<LessonNode | null>(() => {
    const index = this.currentLessonIndex();
    const sequence = this.lessonSequence();
    return index < sequence.length - 1 ? sequence[index + 1] : null;
  });

  selectLesson(lessonId: string): void {
    this.currentLessonId.set(lessonId);
  }

  goToPreviousLesson(): void {
    const lesson = this.previousLesson();
    if (lesson) {
      this.currentLessonId.set(lesson.id);
    }
  }

  goToNextLesson(): void {
    const lesson = this.nextLesson();
    if (lesson) {
      this.markLessonComplete(this.currentLessonId());
      this.currentLessonId.set(lesson.id);
    }
  }

  markCurrentLessonComplete(): void {
    this.markLessonComplete(this.currentLessonId());
  }

  isCurrentLesson(lessonId: string): boolean {
    return this.currentLessonId() === lessonId;
  }

  moduleCompletionCount(module: CourseModule): number {
    return module.lessons.filter((lesson) => lesson.completed).length;
  }

  private markLessonComplete(lessonId: string): void {
    this.modules.update((modules) =>
      modules.map((module) => ({
        ...module,
        lessons: module.lessons.map((lesson) =>
          lesson.id === lessonId ? { ...lesson, completed: true } : lesson,
        ),
      })),
    );
  }
}
