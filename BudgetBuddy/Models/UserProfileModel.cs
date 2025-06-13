using System.ComponentModel.DataAnnotations;

public class UserProfileModel : ICloneable
{
    public string Id { get; set; } = string.Empty;

    [Required]
    public string Name { get; set; } = string.Empty;

    [Required]
    [EmailAddress]
    public string Email { get; set; } = string.Empty;

    public string? ProfilePictureUrl { get; set; }

    public object Clone()
    {
        return this.MemberwiseClone();
    }
}