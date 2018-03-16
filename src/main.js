import { Haiku } from './haiku.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function(){
  $("#haiku-form").submit(function(event){
    event.preventDefault();
    var inputTitle = $("#title").val();
    var inputBody = $("#body").val();

    const newHaiku = new Haiku(inputTitle, inputBody);

    $("#input-title").append(newHaiku.title);
    $("#input-title").append(newHaiku.body);

    $("#total-consonants").append(newHaiku.getConsonants().length);
    $("#total-vowels").append(newHaiku.getVowels().length);
    $("#initially-hidden").show();
  });
});
