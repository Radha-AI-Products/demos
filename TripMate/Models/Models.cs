using System;
using System.ComponentModel.DataAnnotations;

// Model for the trip summary
public class TripSummaryViewModel
{
    public string Destination { get; set; } = "Paris, France";
    public DateTime StartDate { get; set; } = DateTime.Today.AddDays(7);
    public DateTime EndDate { get; set; } = DateTime.Today.AddDays(14);
    public string TripType { get; set; } = "Leisure";
}

// Model for individual itinerary items
public class ItineraryItem
{
    public string Id { get; set; } = Guid.NewGuid().ToString(); // Unique ID for each item

    [Required]
    public DateTime Date { get; set; }

    [Required]
    [RegularExpression(@"^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$", ErrorMessage = "Time must be in HH:mm format")]
    public string Time { get; set; } = "09:00";

    [Required]
    [StringLength(100, ErrorMessage = "Title is too long.")]
    public string Title { get; set; } = string.Empty;

    [Required]
    [StringLength(150, ErrorMessage = "Location is too long.")]
    public string Location { get; set; } = string.Empty;

    [Required]
    public string Category { get; set; } = "Sightseeing"; // Default category

    // Helper property for EditForm binding if needed, not strictly required here
    // public string DateString { get => Date.ToString("yyyy-MM-dd"); set => Date = DateTime.Parse(value); }
}