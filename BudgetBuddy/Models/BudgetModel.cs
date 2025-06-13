using System.ComponentModel.DataAnnotations;

public class BudgetModel
{
    public string Id { get; set; } = string.Empty;

    [Required(ErrorMessage = "Budget name is required.")]
    public string Name { get; set; } = string.Empty;

    [Range(0.01, double.MaxValue, ErrorMessage = "Allocated amount must be greater than zero.")]
    public decimal AllocatedAmount { get; set; }

    [Range(0.00, double.MaxValue, ErrorMessage = "Current spending cannot be negative.")]
    public decimal CurrentSpending { get; set; }

    public decimal RemainingAmount => AllocatedAmount - CurrentSpending;
    
    public string? UserId { get; set; }
}