namespace TradeStack.Models;

public class MarketIndexModel
{
    public string Name { get; set; } = string.Empty;
    public string Ticker { get; set; } = string.Empty;
    public double Value { get; set; }
    public double ChangePercent { get; set; }
    public double ChangeValue { get; set; }
}

public class MarketRowModel
{
    public int Id { get; set; }
    public string Exchange { get; set; } = string.Empty;
    public string Sector { get; set; } = string.Empty;

    public string Symbol { get; set; } = string.Empty;
    public string Company { get; set; } = string.Empty;

    public double LastPrice { get; set; }
    public double ChangePercent { get; set; }

    public long Volume { get; set; }
    public double MarketCap { get; set; }

    public double Week52High { get; set; }
    public double Week52Low { get; set; }
}

public class FilterOptionModel
{
    public string Value { get; set; } = string.Empty;
    public string Text { get; set; } = string.Empty;
}
