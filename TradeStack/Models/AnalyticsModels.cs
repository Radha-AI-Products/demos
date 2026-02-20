namespace TradeStack.Models;

public sealed class MetricCardModel
{
    public string Title { get; set; }
    public string ValueText { get; set; }
    public string DeltaText { get; set; }
    public bool IsPositive { get; set; }
    public string IconCss { get; set; }
}

public sealed class EquityPointModel
{
    public DateTime Date { get; set; }
    public double Portfolio { get; set; }
    public double Index { get; set; }
}

public sealed class MonthlyReturnModel
{
    public string Month { get; set; }
    public double ReturnPct { get; set; }
}

public sealed class TradeAnalysisModel
{
    public int Id { get; set; }
    public string Symbol { get; set; }
    public DateTime Entry { get; set; }
    public DateTime Exit { get; set; }
    public int DurationDays { get; set; }
    public double NetProfit { get; set; }
    public string Strategy { get; set; }
}
