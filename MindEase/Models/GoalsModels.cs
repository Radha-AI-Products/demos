using System;

public class GoalModel
{
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public int DaysCompleted { get; set; }
    public int TargetDays { get; set; }
}

public class SuggestedGoalModel
{
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
}
