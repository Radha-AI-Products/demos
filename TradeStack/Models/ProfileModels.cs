namespace TradeStack.Models;

public class ProfileViewModel
{
    public string FullName { get; set; } = "Avery Chen";
    public string Email { get; set; } = "avery.chen@tradestack.io";
    public string Phone { get; set; } = "+1 (415) 555-0138";
    public string Organization { get; set; } = "TradeStack";

    public string DefaultCurrency { get; set; } = "USD";
    public string TimeZone { get; set; } = "America/New_York";

    public bool TwoFactorEnabled { get; set; } = true;
}

public class CurrencyOptionModel
{
    public string Code { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
}

public class TimeZoneOptionModel
{
    public string Id { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
}
