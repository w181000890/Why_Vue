function parseLyric(lyric) {
    var lyrics = [];
    lyrics.push({ time: 1111, text: "天空想要下雨" });
    return lyrics;
}
var lyricInfos = parseLyric("fafaafafaa");
for (var _i = 0, lyricInfos_1 = lyricInfos; _i < lyricInfos_1.length; _i++) {
    var item = lyricInfos_1[_i];
    console.log(item.time, item.text);
}
// export {}
