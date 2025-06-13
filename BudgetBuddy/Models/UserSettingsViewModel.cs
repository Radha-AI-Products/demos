public class UserSettingsViewModel : ICloneable
{
    public string Id { get; set; } = string.Empty;
    public string UserId { get; set; } = string.Empty;
    public string? DefaultCurrency { get; set; }
    public IEnumerable<string> PreferredCategories { get; set; } = new List<string>();
    public string? TimeZone { get; set; }
    public bool NotifyOverspending { get; set; }
    public bool NotifyMilestones { get; set; }
    public bool NotifyNewTransactions { get; set; }

    public object Clone()
    {
        return new UserSettingsViewModel
        {
            Id = this.Id,
            UserId = this.UserId,
            DefaultCurrency = this.DefaultCurrency,
            TimeZone = this.TimeZone,
            PreferredCategories = new List<string>(this.PreferredCategories),
            NotifyOverspending = this.NotifyOverspending,
            NotifyMilestones = this.NotifyMilestones,
            NotifyNewTransactions = this.NotifyNewTransactions
        };
    }
}