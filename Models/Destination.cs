// Represents a travel destination
public class Destination
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string[] BestMonths { get; set; } = Array.Empty<string>();
    public string[] Tags { get; set; } = Array.Empty<string>(); // e.g., "beach", "culture", "food", "mountains"
    public string ImageUrl { get; set; } = string.Empty;
}