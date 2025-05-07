using System.ComponentModel.DataAnnotations;

// Using a ViewModel to combine User and Settings data for the UI
public class UserSettingsViewModel
{
    // Settings specific properties
    public string Id { get; set; } = Guid.NewGuid().ToString(); // Settings record ID
    public string UserId { get; set; } = string.Empty; // Foreign key to User

    [Required(ErrorMessage = "Default trip type is required.")]
    public string? DefaultTripType { get; set; }

    public string[] PreferredDestinations { get; set; } = Array.Empty<string>();

    [Required(ErrorMessage = "Time zone is required.")]
    public string? TimeZone { get; set; }

    public bool NotifyBookings { get; set; }
    public bool NotifyChanges { get; set; }
    public bool NotifyDeals { get; set; }

    // User profile properties (denormalized for easier Profile tab editing)
    [Required(ErrorMessage = "Name is required.")]
    [StringLength(100, ErrorMessage = "Name cannot be longer than 100 characters.")]
    public string? UserName { get; set; }

    [Required(ErrorMessage = "Email is required.")]
    [EmailAddress(ErrorMessage = "Invalid email address format.")]
    public string? UserEmail { get; set; }

    // Store URL or potentially byte[]/IBrowserFile if handling uploads directly
    public string? ProfilePictureUrl { get; set; }

    // Clone method for easy state duplication (needed for cancellation)
    public UserSettingsViewModel Clone()
    {
        return new UserSettingsViewModel
        {
            Id = this.Id,
            UserId = this.UserId,
            DefaultTripType = this.DefaultTripType,
            PreferredDestinations = this.PreferredDestinations?.ToArray() ?? Array.Empty<string>(), // Ensure array is copied
            TimeZone = this.TimeZone,
            NotifyBookings = this.NotifyBookings,
            NotifyChanges = this.NotifyChanges,
            NotifyDeals = this.NotifyDeals,
            UserName = this.UserName,
            UserEmail = this.UserEmail,
            ProfilePictureUrl = this.ProfilePictureUrl
        };
    }
}

// Simple User model example
public class UserViewModel
{
    public string Id { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string ProfilePictureUrl { get; set; } = string.Empty;
}