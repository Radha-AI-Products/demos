public class MoodModel
{
    public string Id { get; set; }
    public string Label { get; set; }
    public string Emoji { get; set; }

    public MoodModel(string id, string label, string emoji)
    {
        Id = id;
        Label = label;
        Emoji = emoji;
    }

    public override string ToString() => Label;
}
