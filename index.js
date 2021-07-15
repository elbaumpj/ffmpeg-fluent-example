const ffmpeg = require('fluent-ffmpeg');
const { data } = require('./data')

data.forEach((item) => {
  ffmpeg(`${item.input}`)
    .setStartTime(`${item.start}`)
    .setDuration(`${item.duration}`)
    .save(`${item.output}`)
})