namespace TradeStack.Models;

public enum OrderSide
{
    Buy,
    Sell
}

public enum OrderKind
{
    Market,
    Limit
}

public enum OrderStatus
{
    Open,
    PartiallyFilled,
    Filled,
    Cancelled,
    Rejected
}

public class OrderModel
{
    public int OrderId { get; set; }
    public string Symbol { get; set; } = string.Empty;
    public string Type { get; set; } = string.Empty; // e.g., Market/Limit
    public double Qty { get; set; }
    public double? OrderPrice { get; set; }
    public double? ExecutedPrice { get; set; }
    public OrderStatus Status { get; set; }
    public DateTime Timestamp { get; set; }

    public double? EstimatedValue => (ExecutedPrice ?? OrderPrice) is null ? null : Qty * (ExecutedPrice ?? OrderPrice!.Value);
}

public class PlaceOrderDraftModel
{
    public OrderSide Side { get; set; } = OrderSide.Buy;
    public OrderKind Kind { get; set; } = OrderKind.Market;
    public string Symbol { get; set; } = "AAPL";
    public double? Qty { get; set; } = 10;
    public double? LimitPrice { get; set; }

    public double? EstimatedNotional(double marketPrice)
    {
        if (Qty is null || Qty <= 0) return null;
        var px = Kind == OrderKind.Limit ? LimitPrice : marketPrice;
        if (px is null || px <= 0) return null;
        return Qty.Value * px.Value;
    }
}
