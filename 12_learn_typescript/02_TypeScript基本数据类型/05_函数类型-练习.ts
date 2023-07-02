type LyricType = {
  time:number
  text:string
}

function parseLyric(lyric:string):LyricType[]{
  const lyrics:LyricType[] = []
  lyrics.push({time:1111,text:"天空想要下雨"})
  return lyrics
}

const lyricInfos = parseLyric("fafaafafaa")

for(const item of lyricInfos){
  console.log(item.time ,item.text)
}


// export {}