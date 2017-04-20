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
});