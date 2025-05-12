// Defines the data structure for a trip
public class Trip
{
    public string Id { get; set; } = Guid.NewGuid().ToString(); // Default to a new Guid
    public string Title { get; set; } = string.Empty;
    public string Destination { get; set; } = string.Empty;
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public string Type { get; set; } = string.Empty; // e.g., Vacation, Business
    public string UserId { get; set; } = string.Empty; // Assuming user context is handled elsewhere
    public string Name { get; set; } = string.Empty;

}