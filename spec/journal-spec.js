import { JournalEntry } from '../src/journal.js';

describe('JournalEntry', function()
{
  it('should build a JournalEntry object and check that it has values', function()
  {
    const journalEntry = new JournalEntry("TestTitleOne", "Test body one");
    expect(journalEntry.title).toEqual("TestTitleOne");
    expect(journalEntry.body).toEqual("Test body one");
  });
  it('should test the getConsonants and getVowels functions', function()
  {
    const journalEntry = new JournalEntry("Title","Body");
    expect(journalEntry.getVowels()).toEqual(['o','y']);
    expect(journalEntry.getConsonants()).toEqual(['B','d']);
  });
});
