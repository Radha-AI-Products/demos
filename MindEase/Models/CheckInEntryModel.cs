public class CheckInEntryModel
{
    public DateTime Date { get; set; }
    public MoodModel Mood { get; set; }
    public string Note { get; set; }

    public CheckInEntryModel(DateTime date, MoodModel mood, string note)
    {
        Date = date;
        Mood = mood;
        Note = note;
    }
}
