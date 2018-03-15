export class JournalEntry
{
  constructor(title, body)
  {
    this.title = title;
    this.body = body;
    this.wordArray = this.body.split(' ');
  }
  getConsonants()
  {
    const consonantArray = [];
    for(let i = 0; i < this.body.length; i++)
    {
      switch(this.body.charAt(i).toUpperCase())
      {
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
        case 'Y':
        case ' ':
        case '.':
        case ',':
        case '!':
      break;
      default:
        consonantArray.push(this.body.charAt(i));
      }
    }
    return consonantArray;
  }
  getVowels()
  {
    const vowelArray = [];
    for(let i = 0; i < this.body.length; i++)
    {
      switch(this.body.charAt(i).toUpperCase())
      {
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
        case 'Y':
        vowelArray.push(this.body.charAt(i));
        break;
      }
    }
    return vowelArray;
  }
}
