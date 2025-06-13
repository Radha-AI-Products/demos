public class TransactionModel
{
    public string Id { get; set; }
    public DateTime Date { get; set; }
    public string Description { get; set; }
    public decimal Amount { get; set; }
    public string Category { get; set; }
    public string Status { get; set; }
    public string UserId { get; set; }
}