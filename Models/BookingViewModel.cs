// Represents the data model for a booking.
public class BookingViewModel
{
    public string Id { get; set; } = Guid.NewGuid().ToString("N").Substring(0, 8).ToUpper();
    public string TripId { get; set; } = string.Empty;
    public string BookingType { get; set; } = string.Empty; // "Flight", "Stay", "Activity"
    public string Provider { get; set; } = string.Empty;
    public DateTime BookingDate { get; set; }
    public string Status { get; set; } = string.Empty; // "Confirmed", "Cancelled", "Pending"
    public string ReferenceCode { get; set; } = string.Empty;
}