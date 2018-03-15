import { JournalEntry } from './journal.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function(){
  $("#journal-form").submit(function(event){
    event.preventDefault();
    var inputTitle = $("#title").val();
    var inputBody = $("#body").val();

    const journalEntry = new JournalEntry(inputTitle, inputBody);

    $("#input-title").append(journalEntry.title);
    $("#input-title").append(journalEntry.body);

    $("#total-consonants").append(journalEntry.getConsonants().length);
    $("#total-vowels").append(journalEntry.getVowels().length);
    $("#initially-hidden").show();
  });
});
