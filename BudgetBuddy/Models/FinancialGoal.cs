using System;
using System.ComponentModel.DataAnnotations;

public class FinancialGoal
{
    public string Id { get; set; } = string.Empty;

    [Required(ErrorMessage = "Goal name is required.")]
    [StringLength(100, ErrorMessage = "Name is too long.")]
    public string Name { get; set; } = string.Empty;

    [Required(ErrorMessage = "Target amount is required.")]
    [Range(0.01, double.MaxValue, ErrorMessage = "Target amount must be positive.")]
    public decimal TargetAmount { get; set; }

    [Required(ErrorMessage = "Current savings is required.")]
    [Range(0.00, double.MaxValue, ErrorMessage = "Current savings cannot be negative.")]
    public decimal CurrentSavings { get; set; }

    [Required(ErrorMessage = "Deadline is required.")]
    public DateTime? Deadline { get; set; }

    public string UserId { get; set; } = string.Empty;
}