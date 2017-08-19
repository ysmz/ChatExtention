var recognizing;
var recognition = new webkitSpeechRecognition();
recognition.continuous = true;

function getBotSpeech() {
    var inputText = $('#txt').val();
    var messageMine = $("<div class='chatBox'><div class='usr chatBalloon'>" + esc(inputText) + "</div></div>");
    $('#chat').append(messageMine);
    $('#txt').val('').focus();

    $.ajax({
        url: "http://stg.deqwas.net/ChatBot/chatbot.php?text=" + encodeURI(inputText),
        type: "GET",
        async: true,
        cache: false
    }).done(function(data) {
        var chat = $("<div class='chatBox'><div class='bot'><img src='./images/bot_16.png'><div class='chatBalloon'>" + esc(data) + "</div></div></div>");
        $('#chat').append(chat);
    }).fail(function(data) {}).always(function(data) {});
}

function esc(s) {
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;');
}


function reset() {
    recognizing = false;
    $('.rec-btn').text("Click to Speak");
}

function toggleStartStop() {
    if (recognizing) {
        recognition.stop();
        reset();
    } else {
        recognition.start();
        recognizing = true;
        $('.rec-btn').text("Click to Stop");
    }
}

function clickHandler(e) {
    getBotSpeech();
}

function textareaHandler(e) {
    if (!(e.keyCode == 13 && e.shiftKey)) return;
    getBotSpeech();
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.chat-btn').addEventListener('click', clickHandler);
    document.querySelector('#txt').addEventListener('keyup', textareaHandler);
    document.querySelector('.rec-btn').addEventListener('click', toggleStartStop);
    recognition.addEventListener('result', function(event){
        for (var i = resultIndex; i < event.results.length; ++i) {
            if (event.results.final) {
                $('.txt').value += event.results[i][0].transcript;
            }
        }
        reset();
    });
});

$(function(){
    reset();
});