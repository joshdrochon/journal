import { Haiku } from '../src/haiku.js';

describe('Haiku', function()
{
  it('should build a Haiku object and check that it has values', function()
  {
    const newHaiku = new Haiku("TestTitleOne", "Test body one");
    expect(newHaiku.title).toEqual("TestTitleOne");
    expect(newHaiku.body).toEqual("Test body one");
  });

  it('should test the getConsonants method', function()
  {
    const newHaiku = new Haiku("Title","Body");
    expect(newHaiku.getConsonants()).toEqual(['B','d']);
  });

  it('should test the getVowels method', function()
  {
    const newHaiku = new Haiku("Title","Body");
    expect(newHaiku.getVowels()).toEqual(['o','y']);
  });

  it('should test the getLetters method', function()
  {
    const newHaiku = new Haiku("New Title","Hey, this is a body. Yeah!");
    expect(newHaiku.getLetters().length).toEqual(18);
  });

  it('should test the getSyllables method', function()
  {
    const newHaiku = new Haiku("Title", "Some Haikuo");
    expect(newHaiku.getSyllables()).toEqual(2);
    console.log(newHaiku.getSyllables());

  });

});
