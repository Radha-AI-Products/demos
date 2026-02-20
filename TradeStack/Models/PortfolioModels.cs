namespace TradeStack.Models;

public class PortfolioSummaryMetricModel
{
    public string Title { get; set; } = string.Empty;
    public string ValueText { get; set; } = string.Empty;
    public string DeltaText { get; set; } = string.Empty;
    public bool HasDelta { get; set; }
    public bool IsPositive { get; set; }
    public string IconCss { get; set; } = string.Empty;
}

public class HoldingModel
{
    public int Id { get; set; }

    public string Symbol { get; set; } = string.Empty;
    public double AvgPrice { get; set; }
    public int Qty { get; set; }

    public double InvestedValue { get; set; }
    public double CurrentValue { get; set; }

    public double UnrealizedPL { get; set; }
    public double DayChangePercent { get; set; }
    public double AllocationPercent { get; set; }

    public string Sector { get; set; } = string.Empty;

    // Simple per-holding trend points for sparkline/mini-chart
    public List<KpiSparkPointModel> Trend { get; set; } = new();
}

public class SectorAllocationSliceModel
{
    public string Sector { get; set; } = string.Empty;
    public double Weight { get; set; }
}

public class TopHoldingBarModel
{
    public string Symbol { get; set; } = string.Empty;
    public double Weight { get; set; }
}
