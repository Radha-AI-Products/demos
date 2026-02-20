namespace TradeStack.Models;

public enum DashboardRange
{
    OneDay,
    OneWeek,
    OneMonth,
    SixMonths,
    OneYear
}

public class KpiSparkPointModel
{
    public int Index { get; set; }
    public double Value { get; set; }
}

public class DashboardKpiModel
{
    public string Title { get; set; } = string.Empty;
    public string PrimaryValue { get; set; } = string.Empty;
    public string DeltaText { get; set; } = string.Empty;
    public bool IsPositive { get; set; }
    public List<KpiSparkPointModel> Sparkline { get; set; } = new();
}

public class PortfolioPointModel
{
    public DateTime Date { get; set; }
    public double Value { get; set; }
}

public class AllocationSliceModel
{
    public string Asset { get; set; } = string.Empty;
    public double Weight { get; set; }
}

public class ActivityItemModel
{
    public int Id { get; set; }
    public DateTime Time { get; set; }
    public string Type { get; set; } = string.Empty;
    public string Symbol { get; set; } = string.Empty;
    public string Side { get; set; } = string.Empty;
    public int Qty { get; set; }
    public double Price { get; set; }
    public string Status { get; set; } = string.Empty;
}

public class WatchlistItemModel
{
    public string Symbol { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public double Last { get; set; }
    public double ChangePct { get; set; }
}
