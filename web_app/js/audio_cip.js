var audio1 = document.getElementById("demo");

audio1.currentTime = 1200;

function go_min(audio_clip, min)
{
	var time_to = min * 60;
	audio_clip.currentTime = time_to;
}