'use client'

import React, { FC, useState } from 'react';
import styled from 'styled-components';

import { ThemeProvider, Typography } from '@mui/material';
import { theme } from './theme';
import KnopkiRelease from './KnopkiRelease';
import TableForCustom from './TableForCustom';

const segments = [{
  Start: 10,
  End: 15,
  ChannelNumber: 0,
},{
  Start: 20,
  End: 30,
  ChannelNumber: 1,
},
{
  Start: 55,
  End: 75,
  ChannelNumber: 1,
},
]

const keywords = [{
  keyword: {
      Start: 10,
      End: 11,
      Name: 'Привет',
      ChannelNumber: 2,
      Confidence: 0.9,
    },
    color: 'red',
},
{
  keyword: {
      Start: 50,
      End: 51,
      Name: 'Коля',
      ChannelNumber: 1,
      Confidence: 1,
    },
    color: 'green',
},
{
  keyword: {
      Start: 60,
      End: 61,
      Name: 'Петька',
      ChannelNumber: 2,
      Confidence: 0.6,
    },
    color: 'purple',
}
]

const tableData = [
  { id: '1', title: 'Audio 1', url: '/audio/rus.wav',segments: segments, keywords: keywords },
  { id: '2', title: 'Audio 2', url: 'https://assets.codepen.io/4358584/Anitek_-_Komorebi.mp3',segments: segments, keywords: keywords },
  { id: '3', title: 'Audio 3', url: 'https://webaudioapi.com/samples/audio-tag/chrono.mp3',segments: segments, keywords: keywords },
  // ...
];

const words = [{
  id: 1,
  recordId: 1,
  channelNumber: 1,
  lang: 'russ',
  word: 'Коля',
  confidence: 1,
  start: 10.99,
  end: 11.00,
  color: 'green',
  bgColor: '#000',
  type: 'string',
},{
  id: 2,
  recordId: 1,
  channelNumber: 1,
  lang: 'russ',
  word: 'Наташа',
  confidence: 0.8,
  start: 30.99,
  end: 31.00,
  color: 'green',
  bgColor: '#000',
  type: 'string',
}]

const words2 = [{
  word: 'Коля',
  start: 15.99,
  color: 'red',
},{

  word: 'Наташа',
  start: 99.99,
  color: 'green',
}]





const App: FC = () => {
  const [url, setUrl] = useState('')
  const [keywords, setKeywords] = useState<any []>([])
  const [channelNumber, setChannelNumber] = useState<number>(0)
  const [name, setName] = useState('')
  
  const handleRowClick = (url:string, keywords: any[], channelNumber: number, name: string) => {
    setUrl(url)
    setKeywords(keywords)
    setChannelNumber(channelNumber)
    setName(name)
  }
  return (
    <ThemeProvider theme={theme}>
    <div>
      <TableForCustom handleRowClick={handleRowClick} />
      <div style={{display: 'flex', justifyContent: 'center', margin: '2rem'}} >
      <Typography variant='h6'>
        В текущей версии:
        <br></br><br></br>
        1. Полностью самодельный аудиоплеер, без использования сторонних библиотек. <br></br>
        Аудио дорожка берётся непосредственно из аудио файла, а не приходит картинкой с бэкэнда.
        <br></br><br></br>
        2. Два вида отображения: компактный и развёрнутый. <br></br>
        Оба вида синхронизированы друг с другом, т.е. идёт воспроизведение, хочется рассмотреть что-то на осцилограмме, разворачиваешь - ползунок воспроизведения сохраняет позицию.
        <br></br><br></br>
        3. Гибкая отрисовка осцилограммы. Можно добавить отрисовку ключевых слов, выделить сегменты, добавить временную шкалу.
        <br></br><br></br>
        4. При зумировании ключевые слова отображаются корректно + добавил анимацию.
        <br></br><br></br>
        Добавить:
        <br></br><br></br>
        1. При измении размера страницы - перерисовывать осцилограмму, чтобы шкала времени правильно отображалась.
        <br></br><br></br>
        2. Придумать, как распологать кнопки в расширенной версии.
        <br></br><br></br>
        3. Сделать, чтобы можно было переключаться между файлами, не останавливая воспроизведение файла.
      </Typography>
      </div>
      <KnopkiRelease audioUrl= {url} channelNumber={channelNumber} markers={keywords} fileName={name}/>
    </div>
    </ThemeProvider>
  )
}

export default App;