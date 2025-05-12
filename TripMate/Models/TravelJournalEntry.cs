public class TripModel
{
    public string Id { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
}

public class TravelJournalEntryModel
{
    public string Id { get; set; } = string.Empty;
    public string TripId { get; set; } = string.Empty;
    public DateTime Date { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string Mood { get; set; } = string.Empty; // e.g., "Happy", "Sad", "Excited"
    public string PhotoUrl { get; set; } = string.Empty;
}