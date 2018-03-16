export class Haiku
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
  };

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

  getLetters()
  {
    const letterArray = [];
    for(let i = 0; i < this.body.length; i++)
    {
      switch(this.body.charAt(i).toUpperCase())
      {
        case ' ':
        case '.':
        case ',':
        case '!':
      break;
      default:
        letterArray.push(this.body.charAt(i));
      }
    }
    return letterArray;
  }

  getSyllables()
  {
    let diphThongs = {
      1: "ae",
      2: "ai",
      3: "ao",
      4: "au",
      5: "ea",
      6: "ee",
      7: "eu",
      8: "ey",
      9: "ie",
      10: "iu",
      11: "oa",
      12: "oe",
      13: "oi",
      14: "oo",
      15: "ou",
      16: "ua",
      17: "ui",
      18: "uo",
      19: "ya",
      20: "ye"
    };

    let counter = 0; //will get a tick w/ each syllable
    let bd = this.body;

    for(let i = 1; i <= 20; i++)
    {
      if(bd.includes(diphThongs[i]))
      {
        counter++;
      }
    }

    let vowels = this.getVowels().length;
    let consts = this.getConsonants().length;

    if(vowels === consts)
    {
      counter += consts/3;
    }
    return counter;
  }

}// end class
