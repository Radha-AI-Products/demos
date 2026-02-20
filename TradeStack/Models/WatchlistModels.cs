namespace TradeStack.Models;

// NOTE: WatchlistItemModel is defined elsewhere in the project.
// This file intentionally defines a different model to avoid duplicate type names.
public class WatchlistQuoteModel
{
    public int Id { get; set; }

    public string Symbol { get; set; } = string.Empty;

    // Dashboard uses Name/Last/ChangePct; the Watchlist page uses Company/CurrentPrice/DayChangePct.
    // Keep both sets to avoid coupling and to allow simple reuse.
    public string Name { get; set; } = string.Empty;
    public string Company { get; set; } = string.Empty;

    public double Last { get; set; }
    public double ChangePct { get; set; }

    public double CurrentPrice { get; set; }
    public double DayChangePct { get; set; }

    public long Volume { get; set; }
    public double Range52WLow { get; set; }
    public double Range52WHigh { get; set; }

    public List<double> MiniSeries { get; set; } = new();
}

public class MarketMoverModel
{
    public int Rank { get; set; }
    public string Symbol { get; set; } = string.Empty;
    public string Company { get; set; } = string.Empty;
    public double Price { get; set; }
    public double ChangePct { get; set; }
    public long Volume { get; set; }
}
